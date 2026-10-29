import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Aikin samar da password mai tsaro bazuwar (Random 8-character password)
function generateSecurePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$";
  let pass = "";
  for (let i = 0; i < 9; i++) {
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
      passportNumber, 
      state, 
      lga, 
      address, 
      jobTitle, 
      targetCountry, 
      sponsorshipPathway, 
      paystackReference,
      amountPaid
    } = body;

    // 1. Duba ko mutumin yana da asusu a baya, idan babu a bude masa sabo
    let user = await db.user.findUnique({
      where: { email },
    });

    const generatedPassword = generateSecurePassword();

    if (!user) {
      user = await db.user.create({
        data: {
          fullName,

          phone,
          password: generatedPassword, // A gaskiya ana amfani da bcrypt wajen boye shi (hash)
          role: "USER",
        },
      });
    }

    // 2. Kafa sabon Application a karkashin wannan mutumin
    const application = await db.jobApplication.create({
      data: {
        userId: user.id,
        applicantName: fullName,
        passportNumber,

        phone,
        state,
        lga,
        address,
        jobTitle,
        targetCountry,
        sponsorshipPathway,
        cvUrl: body.cvUrl || "uploaded-cv-link",
        registrationPaid: true,
        registrationAmount: amountPaid,
        status: "SUBMITTED",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Application & Account Created Successfully",
      credentials: {

        temporaryPassword: generatedPassword,
      },
      applicationId: application.id,
    });
  } catch (error: any) {
    console.error("Application error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
