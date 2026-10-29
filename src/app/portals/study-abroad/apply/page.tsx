import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScholarshipApplyForm from "@/components/forms/ScholarshipApplyForm";
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Globe, 
  BookOpen, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

export default function StudyAbroadApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO BANNER SECTION */}
        <section 
          className="relative text-white py-14 px-4 sm:px-6 lg:px-8 shadow-xl" 
          style={{ backgroundColor: "#021235" }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <span 
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              style={{ 
                backgroundColor: "rgba(245, 158, 11, 0.15)", 
                color: "#FBBF24", 
                borderColor: "rgba(245, 158, 11, 0.4)" 
              }}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Global University Admissions & Scholarships
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              International Scholarship Admissions Portal
            </h1>
            
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Apply for full or partial university tuition waivers across Turkey, North Cyprus, Malaysia, Poland, and the United Kingdom.
            </p>
          </div>
        </section>

        {/* MAIN APPLICATION CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* LEFT / CENTER: FORM (Takes 2 Columns) */}
            <div className="lg:col-span-2">
              <ScholarshipApplyForm />
            </div>

            {/* RIGHT SIDEBAR: ADMISSION GUIDELINES & FINANCIAL STRUCTURE */}
            <div className="space-y-4">
              
              {/* Card 1: Milestone Pricing Breakdown */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-sm text-slate-900">
                    Milestone-Based Fee Structure
                  </h4>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <span className="font-bold text-slate-900 block">Phase 1: ₦50,000 (Due Now)</span>
                    <span className="text-[11px] text-slate-600">
                      Covers transcript evaluation, translation, and application submissions.
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block">Phase 2: ₦200,000 (Success Fee)</span>
                    <span className="text-[11px] text-slate-600">
                      Payable strictly after official university admission letter with scholarship grant is issued.
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Partner Countries & Institutions */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-sm text-slate-900">
                    Accredited Study Destinations
                  </h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Turkey:</strong> 50% - 100% Tuition Waivers & Dormitory Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>North Cyprus:</strong> 75% Guaranteed Direct Grants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Malaysia:</strong> STEM & Computing Merit Scholarships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Poland & Europe:</strong> Subsidized European Union Degrees</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Processing Steps */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-sm text-slate-900">
                    Application Timeline
                  </h4>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-600">Step 1:</span>
                    <span>Submit credentials & verify ₦50k registration via Paystack.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-600">Step 2:</span>
                    <span>Admissions Board evaluates documents within 72 hours.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-600">Step 3:</span>
                    <span>Admission & scholarship offer letter issued by partner university.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-600">Step 4:</span>
                    <span>Student visa appointment scheduling & departure preparation.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Consultation */}
              <div 
                className="p-5 rounded-2xl text-white shadow-md text-center space-y-2"
                style={{ backgroundColor: "#031B4E" }}
              >
                <BookOpen className="w-6 h-6 mx-auto text-amber-400" />
                <h5 className="font-bold text-xs uppercase tracking-wider">Need Academic Guidance?</h5>
                <p className="text-[11px] text-slate-200">
                  Speak directly with our overseas academic counselors for admission advisory.
                </p>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-1 px-4 py-2 rounded-xl text-xs font-bold transition hover:opacity-95"
                  style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
                >
                  Contact Admissions Officer
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}