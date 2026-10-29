import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobApplyForm from "@/components/forms/JobApplyForm";
import { Globe2, FileCheck, CheckCircle } from "lucide-react";

export default function WorkAbroadApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-ayax-gold/10 text-ayax-navy border border-ayax-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Ayax Global Work Opportunities
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ayax-navy mt-3">
              Global Employment & Work Permit Programs
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Connecting skilled talent to employers across the UK, Canada, Europe, and the Middle East with comprehensive immigration support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <JobApplyForm />
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <Globe2 className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">Target Destinations</h4>
                <p className="text-xs text-gray-600 mt-1">United Kingdom, Canada, Poland, Lithuania, United Arab Emirates, and Qatar.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <FileCheck className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">Legal Employment Verification</h4>
                <p className="text-xs text-gray-600 mt-1">All job opportunities comply with destination labor ministry regulations and valid contracts.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <CheckCircle className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">Interview & Relocation Coaching</h4>
                <p className="text-xs text-gray-600 mt-1">Full briefing sessions to prepare candidates for sponsor interviews and visa submissions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}