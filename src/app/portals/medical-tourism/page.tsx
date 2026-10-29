import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Stethoscope, 
  MapPin, 
  HeartPulse, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  UserCheck, 
  PhoneCall,
  Sparkles
} from "lucide-react";

export interface HospitalDirectoryItem {
  id: string;
  hospitalName: string;
  country: string;
  city: string;
  accreditations: string;
  specialties: string[];
  estimatedCostRange: string;
  treatmentTimeline: string;
  patientLogistics: string;
  packageIncludes: string[];
  badge: string;
}

const HOSPITALS_DIRECTORY: HospitalDirectoryItem[] = [
  {
    id: "apollo-delhi",
    hospitalName: "Indraprastha Apollo Hospitals",
    country: "India",
    city: "New Delhi",
    accreditations: "JCI & NABH Accredited (Global Gold Standard)",
    specialties: ["Cardiology & Open Heart Surgery", "Kidney & Liver Transplant", "Advanced Oncology (Proton Therapy)", "Orthopedic Joint Replacement"],
    estimatedCostRange: "$4,500 - $12,000 (Based on Diagnosis)",
    treatmentTimeline: "Direct Medical Visa in 3 - 5 Days",
    patientLogistics: "Free Airport Ambulance / Car Pickup + Dedicated English & Hausa Translators",
    packageIncludes: [
      "Official Hospital Visa Invitation Letter within 24 hours",
      "Executive inpatient private room & attendant couch",
      "Dedicated international patient coordinator desk",
      "Post-operative follow-up teleconsultations"
    ],
    badge: "Most Recommended in India"
  },
  {
    id: "fortis-gurgaon",
    hospitalName: "Fortis Memorial Research Institute (FMRI)",
    country: "India",
    city: "Gurugram / New Delhi",
    accreditations: "JCI & NABH Certified Multi-Super Specialty",
    specialties: ["Neuro & Spine Surgery", "Robotic Cardiac Surgery", "Bone Marrow Transplant", "Pediatric Cardiology"],
    estimatedCostRange: "$4,000 - $11,500 (Comprehensive)",
    treatmentTimeline: "Fast-Track Priority Admission",
    patientLogistics: "Executive airport concierge, localized lodging assistance & SIM card provision",
    packageIncludes: [
      "Express Indian Medical Visa facilitation",
      "Direct consultation with chief medical directors",
      "Translator and attendant lodging near hospital",
      "Nutritional dietary support tailored to foreign patients"
    ],
    badge: "Robotic Surgery Hub"
  },
  {
    id: "max-saket",
    hospitalName: "Max Super Specialty Hospital",
    country: "India",
    city: "Saket, New Delhi",
    accreditations: "NABH, NABL & ISO Certified Centers of Excellence",
    specialties: ["Comprehensive Cancer Institute", "Minimally Invasive Joint Surgery", "Nephrology & Urology", "Cosmetic & Reconstructive Surgery"],
    estimatedCostRange: "$3,800 - $10,500",
    treatmentTimeline: "3 - 4 Days Visa Processing",
    patientLogistics: "Airport reception, private transport and guest house booking assistance",
    packageIncludes: [
      "Detailed upfront proforma invoice directly from hospital",
      "Medical attendant support throughout hospital stay",
      "Pharmacy prescription discounts & verified medications",
      "Direct consular letter issued to Indian High Commission"
    ],
    badge: "Cancer & Kidney Center"
  },
  {
    id: "medipol-istanbul",
    hospitalName: "Medipol Mega University Hospital",
    country: "Turkey",
    city: "Istanbul",
    accreditations: "JCI Accredited Mega University Complex",
    specialties: ["Organ Transplant Center", "Cyberknife Cancer Treatment", "Complex Pediatric Surgery", "In-Vitro Fertilization (IVF)"],
    estimatedCostRange: "$5,500 - $15,000",
    treatmentTimeline: "Turkish Medical Visa Assistance (4 - 7 Days)",
    patientLogistics: "VIP Private Airport Transfer + 5-Star Hospital Suite Logistics",
    packageIncludes: [
      "Official Ministry of Health Turkey Invitation Letter",
      "Multilingual patient coordinators",
      "Subsidized lodging for long-term patient recovery",
      "Comprehensive medical diagnostics breakdown"
    ],
    badge: "European Standard in Turkey"
  }
];

export default function MedicalTourismPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO SECTION */}
        <section 
          className="relative text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{ backgroundColor: "#021235" }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <span 
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              style={{ 
                backgroundColor: "rgba(245, 158, 11, 0.15)", 
                color: "#FBBF24", 
                borderColor: "rgba(245, 158, 11, 0.4)" 
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Direct Hospital Affiliations (No Middlemen)
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Specialized Medical Tourism & Overseas Treatments
            </h1>

            <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              Affiliated with world-class JCI-accredited hospitals in India and Turkey for cardiac surgery, organ transplants, cancer treatment, and neurosurgery with full medical visa facilitation.
            </p>

            <div className="pt-2">
              <Link
                href="/portals/medical-tourism/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs shadow-lg transition hover:opacity-95"
                style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
              >
                <Stethoscope className="w-4 h-4" /> Submit Medical Reports for Free Evaluation
              </Link>
            </div>
          </div>
        </section>

        {/* 4 REASONS VALUE STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-900">Direct Hospital Tie-Ups</h4>
                <p className="text-[11px] text-slate-500">Official partners of Apollo, Fortis & Max.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-3">
              <Clock className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-900">Fast Medical Visas</h4>
                <p className="text-[11px] text-slate-500">Express invitation letters in 24 - 48 hours.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-900">Patient & Escort Care</h4>
                <p className="text-[11px] text-slate-500">Airport reception, translator & lodging.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-3">
              <HeartPulse className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-900">Zero Agency Sur-Charge</h4>
                <p className="text-[11px] text-slate-500">You pay actual hospital bills directly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOSPITAL DIRECTORY LISTING */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Partner Multi-Specialty Hospitals ({HOSPITALS_DIRECTORY.length} Centers)
              </h2>
              <p className="text-xs text-slate-500">
                Internationally verified hospitals equipped with latest robotic surgery and transplant theaters.
              </p>
            </div>

            <Link
              href="/portals/medical-tourism/apply"
              className="text-xs font-bold px-4 py-2 rounded-lg text-white transition hover:opacity-90"
              style={{ backgroundColor: "#031B4E" }}
            >
              Get Free Cost Estimate
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {HOSPITALS_DIRECTORY.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition flex flex-col justify-between overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" /> {hospital.city}, {hospital.country}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {hospital.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-snug">
                    {hospital.hospitalName}
                  </h3>

                  <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> {hospital.accreditations}
                  </p>
                </div>

                {/* Specialties & Treatment Info */}
                <div className="p-6 space-y-4 text-xs text-slate-600 bg-slate-50/50 flex-1">
                  <div>
                    <span className="font-bold text-slate-800 block text-[11px] mb-1.5">Core Specialties & Surgeries:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {hospital.specialties.map((spec, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 px-2 py-1 rounded text-[11px] font-medium text-slate-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                    <div>
                      <span className="font-bold text-slate-800 block text-[11px]">Visa Invitation Timeline:</span>
                      <span className="text-[11px] text-slate-600">{hospital.treatmentTimeline}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block text-[11px]">Local Logistics & Support:</span>
                      <span className="text-[11px] text-slate-600">{hospital.patientLogistics}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800 block text-[11px] mb-1">Package Inclusions:</span>
                    <ul className="space-y-1">
                      {hospital.packageIncludes.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Estimated Treatment Cost:</span>
                    <span className="text-xs font-black text-emerald-700">{hospital.estimatedCostRange}</span>
                  </div>

                  <Link
                    href={`/portals/medical-tourism/apply?hospital=${hospital.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs shadow hover:opacity-95 transition"
                    style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
                  >
                    Select & Send Reports <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </section>

      </div>

      <Footer />
    </main>
  );
}