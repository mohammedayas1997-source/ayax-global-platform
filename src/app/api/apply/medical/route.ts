import { NextRequest, NextResponse } from "next/server";

// Misalin Taskar Ajiya (A cikin production ana hada shi da Prisma / MongoDB / PostgreSQL)
let medicalApplicationsDatabase: any[] = [
  {
    refId: "AYX-MED-84920",
    patientName: "Alh. Mansur Bello",
    patientAge: "52",
    gender: "Male",
    passportNumber: "A10984521",
    companionName: "Kabiru Mansur",
    companionPassport: "A11294822",
    email: "mansur.bello@example.com",
    phone: "+2348030000000",
    selectedHospital: "Apollo Hospitals (New Delhi, India)",
    treatmentCategory: "Cardiology & Bypass Surgery",
    medicalSummary: "Severe coronary artery disease requiring double bypass graft.",
    status: "Medical Visa Invitation Issued",
    currentStage: 3,
    registrationFeeStatus: "Paid (₦50,000 via Paystack)",
    submittedAt: "2026-10-12T10:00:00.000Z"
  }
];

// 1. GET: Nemo takardun mara lafiya ta hanyar Reference ID ko Passport Number
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const refId = searchParams.get("refId");
    const passportNumber = searchParams.get("passportNumber");

    if (!refId && !passportNumber) {
      return NextResponse.json(
        { 
          success: true, 
          count: medicalApplicationsDatabase.length, 
          data: medicalApplicationsDatabase 
        },
        { status: 200 }
      );
    }

    const application = medicalApplicationsDatabase.find((item) => {
      if (refId && item.refId.toUpperCase() === refId.trim().toUpperCase()) {
        return true;
      }
      if (passportNumber && item.passportNumber.toUpperCase() === passportNumber.trim().toUpperCase()) {
        return true;
      }
      return false;
    });

    if (!application) {
      return NextResponse.json(
        { 
          success: false, 
          message: "No medical tourism record found matching your query." 
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: application
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Medical GET Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to retrieve medical record." },
      { status: 500 }
    );
  }
}

// 2. POST: Karbar sabon aikin neman jinya daga shafin cika fom
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      patientName,
      patientAge,
      gender,
      passportNumber,
      companionName,
      companionPassport,
      email,
      phone,
      selectedHospital,
      treatmentCategory,
      medicalSummary,
      uploadedReportUrls
    } = body;

    // Tabbatar da cewa cikakkun bayanan farko sun shigo
    if (!patientName || !passportNumber || !email || !phone || !selectedHospital) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Mandatory fields missing: Patient Name, Passport, Email, Phone, or Hospital." 
        },
        { status: 400 }
      );
    }

    // Kirkirar sabuwar Reference ID mai lamba 5 (e.g. AYX-MED-59281)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newRefId = `AYX-MED-${randomSuffix}`;

    const newApplicationRecord = {
      refId: newRefId,
      patientName,
      patientAge: patientAge || "N/A",
      gender: gender || "Unspecified",
      passportNumber: passportNumber.trim().toUpperCase(),
      companionName: companionName || "None (Solo Patient)",
      companionPassport: companionPassport ? companionPassport.trim().toUpperCase() : "N/A",
      email,
      phone,
      selectedHospital,
      treatmentCategory,
      medicalSummary: medicalSummary || "Records submitted for direct specialist review.",
      uploadedReportUrls: uploadedReportUrls || [],
      status: "Document Intake & Hospital Assessment",
      currentStage: 1,
      registrationFeeStatus: "Assessment Processing",
      submittedAt: new Date().toISOString()
    };

    // Ajiye a database
    medicalApplicationsDatabase.unshift(newApplicationRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Medical tourism dossier registered successfully.",
        refId: newRefId,
        data: newApplicationRecord
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Medical POST Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error registering medical case." },
      { status: 500 }
    );
  }
}