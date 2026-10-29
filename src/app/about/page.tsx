"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Users, 
  CheckCircle2, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  Compass, 
  Plane,
  FileText
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-16">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            About Ayax Travels and Tours
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Bridging Global Opportunities With Legal Integrity &amp; Excellence
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating under <strong>Ayax Global Ventures Ltd (RC: 9345377, TIN: 2620247919304)</strong>, we are a certified corporate entity delivering transparent international medical travel, verified cross-border manpower supply, student placements, and VIP pilgrimage logistics.
          </p>
        </div>

        {/* Corporate Statutory Identity Box */}
        <div className="bg-[#021235] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Statutory Incorporation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Legally Registered Under CAMA 2020
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Incorporated by the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria, Ayax Global Ventures Ltd operates with an authorized share capital of 2,000,000 fully issued ordinary shares under the leadership of Founder and Sole Director, <strong>Mohammed Abdulrahman Ayas</strong>.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/15 backdrop-blur-md space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">RC Number:</span>
                <span className="font-mono font-bold text-amber-400">9345377</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Tax ID (TIN):</span>
                <span className="font-mono font-bold text-white">2620247919304</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Operational Office:</span>
                <span className="text-right text-white font-medium">Suite C13 &amp; C14, Yam Musa Plaza, Kano State</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Registered Office:</span>
                <span className="text-right text-white font-medium">37, Bello Ahmed Road Jimeta, Adamawa State</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Strategic Operations</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Delivering verified institutional outcomes across multiple specialized industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Medical Tourism Escorts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct partnerships with premier tertiary hospital chains in India and Turkey (Apollo, Fortis, Medipol) for oncology, cardiology, organ transplants, and post-operative recovery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">B2B Manpower Supply &amp; Visas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sourcing, screening, and mobilizing skilled logistics drivers, security personnel, healthcare assistants, and technical tradesmen for licensed GCC and European employers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">VIP Umrah &amp; Educational Placement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct e-Visa procurement, Clock Tower Haram-facing suite bookings, Haramain express train tickets, alongside global university admissions with 50%–100% tuition scholarships.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Standards */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-black text-slate-900">Strict Verification &amp; Vetting Protocol</h3>
            <p className="text-xs text-slate-500">Every case handled by our desk undergoes rigorous four-tier authentication.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-slate-900">Passport &amp; Biometrics</h4>
              <p className="text-slate-500">Valid travel documents with at least 2-year validity verified with NIS standards.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900">Security Clearance</h4>
              <p className="text-slate-500">National Identification (NIN) confirmation and Police Character Clearance (PCC).</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <FileText className="w-5 h-5 text-blue-600" />
              <h4 className="font-bold text-slate-900">GAMCA Medical Fitness</h4>
              <p className="text-slate-500">Standardized medical fitness checkups aligned with GCC and European consular guidelines.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <Award className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-slate-900">Zero Middleman Markup</h4>
              <p className="text-slate-500">Anti-fraud direct hospital billing and verified sovereign employer quotas only.</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}