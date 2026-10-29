import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const category = (formData.get("category") as string) || "general";
    const refId = (formData.get("refId") as string) || "UNASSIGNED";

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided in the upload payload." },
        { status: 400 }
      );
    }

    // Tabbatar da girmar fayil (Maximum 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "File size exceeds the 10MB limit." },
        { status: 400 }
      );
    }

    // Tabbatar da ingancin format na fayil
    const allowedMimeTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    if (!allowedMimeTypes.includes(file.type)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Unsupported file format. Please upload PDF, JPEG, PNG, or WEBP." 
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Kirkirar foldar ajiya idan bata nan
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Samar da sabon sunan fayil mai tsafta da timestamp
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFileName = `${Date.now()}-${cleanFileName}`;
    const filePath = path.join(uploadDir, uniqueFileName);

    // Ajiye fayil din a filesystem
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json(
      {
        success: true,
        message: "File successfully uploaded and stored.",
        data: {
          originalName: file.name,
          storedName: uniqueFileName,
          fileUrl: publicUrl,
          fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          category,
          refId,
          uploadedAt: new Date().toISOString()
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Upload Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during file processing." },
      { status: 500 }
    );
  }
}