import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function generateSecurePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#$";
  let pass = "";
  for (let i = 0; i < 8; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      fullName, 
      phone, 
      email, 
      passportNo, 
      jobCategory, 
      destinationCountry, 
      qualification 
    } = body;

    const applicantEmail = email && typeof email === "string" && email.trim() !== "" 
      ? email.trim() 
      : `${String(phone || Date.now()).replace(/[^0-9]/g, "")}@applicant.ayaxtravels.com`;

    const generatedPassword = generateSecurePassword();

    // 1. Nemo ko kirkiri User
    let user: any = await (db as any).user.findFirst({
      where: {
        OR: [
          { email: applicantEmail },
          { phone: phone }
        ]
      }
    });

    if (!user) {
      user = await (db as any).user.create({
        data: {
          fullName: fullName || "Applicant",
          email: applicantEmail,
          phone: phone || "N/A",
          password: generatedPassword,
          role: "USER"
        }
      });
    }

    // 2. Kirkiri Job Application tare da kiyaye schema
    const refId = "AYX-WRK-" + Math.floor(10000 + Math.random() * 90000);

    const appData: Record<string, any> = {
      userId: user.id,
      refId,
      passportNo: passportNo || "PENDING",
      jobCategory: jobCategory || "General",
      destinationCountry: destinationCountry || "Gulf",
      qualification: qualification || "Standard"
    };

    await (db as any).jobApplication.create({
      data: appData
    });

    return NextResponse.json({
      success: true,
      refId,
      tempPassword: generatedPassword,
      message: "Application registered successfully"
    });

  } catch (error: any) {
    console.error("Job Application API Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process application" },
      { status: 500 }
    );
  }
}
