import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JOBS_LIST, AvailableJob } from "@/lib/jobs-data";
import { 
  Briefcase, 
  MapPin, 
  Banknote, 
  Clock, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert,
  Sparkles
} from "lucide-react";

export default function WorkAbroadJobsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO BANNER */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-white relative shadow-xl" style={{ backgroundColor: "#021235" }}>
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border" style={{ borderColor: "rgba(245, 158, 11, 0.4)", color: "#FBBF24", backgroundColor: "rgba(245, 158, 11, 0.1)" }}>
              <Sparkles className="w-3.5 h-3.5" /> Verified Employment Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Available International Job Vacancies
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore open vacancies in the Gulf and Europe. Review employment criteria, duty schedules, salary offers, and visa sponsorship packages before initiating your application.
            </p>
          </div>
        </section>

        {/* JOB CARDS CONTAINER */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Current Open Positions ({JOBS_LIST.length})</h2>
              <p className="text-xs text-slate-500">Updated weekly by Ayax Global Recruitment & Overseas Partner Desks</p>
            </div>
            <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
              Registration Fee: ₦50,000 (Non-Refundable)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOBS_LIST.map((job: AvailableJob) => (
              <div 
                key={job.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition flex flex-col justify-between overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-600" /> {job.country}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      job.region === "Gulf" 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {job.sponsorshipType.includes("Sponsored") ? "Visa Sponsored" : "European Pathway"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-base">
                    <Banknote className="w-5 h-5 text-emerald-600" />
                    {job.salary}
                  </div>
                </div>

                {/* Key Employment Conditions & Terms */}
                <div className="p-6 space-y-4 text-xs text-slate-600 bg-slate-50/50 flex-1">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Duty Hours:</span>
                        <span>{job.dutyHours}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Home className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Accommodation:</span>
                        <span>{job.accommodation}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800 block mb-1">Eligibility & Requirements:</span>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="border-t border-slate-200 pt-3 space-y-1">
                    <div className="flex justify-between items-center text-slate-800 font-bold">
                      <span>Package Structure:</span>
                      <span className="text-amber-700 font-black">{job.totalPackageFee}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic">
                      {job.paymentBreakdown}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Age: {job.ageLimit}</span>
                  <Link
                    href={`/portals/work-abroad/apply?job=${job.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs shadow hover:opacity-95 transition"
                    style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
                  >
                    Select & Apply <ArrowRight className="w-4 h-4" />
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