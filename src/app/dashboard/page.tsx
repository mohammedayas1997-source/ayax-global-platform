"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  FolderCheck, 
  LogOut, 
  Menu, 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  PhoneCall, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

const ACTIVE_USER_CASE = {
  fullName: "Alh. Mansur Bello",
  passportNo: "A10984521",
  applicantRefId: "AYX-MED-84920",
  serviceType: "Medical Tourism",
  specialization: "Cardiology & Coronary Bypass Surgery",
  targetDestination: "New Delhi, India",
  targetHospital: "Indraprastha Apollo Hospital",
  applicationDate: "October 12, 2026",
  overallProgress: 75,
  currentStageName: "Medical Visa Invitation Letter Issued",
  stages: [
    {
      id: "step-1",
      title: "Document Screening & Clinical Intake",
      status: "completed",
      date: "Oct 12, 2026",
      notes: "Medical reports, MRI scans, and passport bio-data verified by intake officers."
    },
    {
      id: "step-2",
      title: "Chief Specialist Medical Evaluation",
      status: "completed",
      date: "Oct 15, 2026",
      notes: "Apollo Hospital Department of Cardiology confirmed surgical acceptance and issued medical advisory."
    },
    {
      id: "step-3",
      title: "Consular Medical Visa Sponsorship Issuance",
      status: "active",
      date: "Oct 20, 2026",
      notes: "Official medical invitation transmitted directly to the High Commission of India."
    },
    {
      id: "step-4",
      title: "Flight Ticketing, Arrival Concierge & Admission",
      status: "pending",
      date: "Scheduled upon Visa Approval",
      notes: "Dedicated airport pick-up, local accommodation reservation, and direct hospital check-in."
    }
  ],
  financials: {
    registrationFee: "₦50,000",
    registrationStatus: "Paid (Paystack Ref: AYX-MED-84920-PAY)",
    estimatedHospitalBill: "$5,200",
    billSettlementMethod: "Direct Hospital Cashier Counter on Admission",
    consultationBalance: "₦0.00 (Cleared)"
  },
  documents: [
    {
      title: "Apollo_Hospital_Formal_Acceptance_Letter.pdf",
      date: "Oct 15, 2026",
      size: "1.2 MB",
      type: "Official Hospital Dossier"
    },
    {
      title: "Indian_High_Commission_Medical_Visa_Support.pdf",
      date: "Oct 20, 2026",
      size: "820 KB",
      type: "Embassy Support Letter"
    },
    {
      title: "Patient_Initial_Diagnostics_Summary.pdf",
      date: "Oct 12, 2026",
      size: "2.4 MB",
      type: "Verified Clinical Records"
    }
  ]
};

export default function DashboardPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "timeline" | "financials" | "documents">("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // KARE SHAFIN: Tabbatar da Session Kafin Nuna Dashboard
  useEffect(() => {
    const session = typeof window !== "undefined" ? localStorage.getItem("ayax_user_session") : null;
    if (!session) {
      router.replace("/auth/login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out of your applicant session?");
    if (confirmLogout) {
      localStorage.removeItem("ayax_user_session");
      router.replace("/auth/login");
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
        Authenticating applicant session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      
      {/* MOBILE HEADER BAR */}
      <header className="lg:hidden bg-[#021235] text-white p-4 flex items-center justify-between border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Ayax Travels Logo"
              width={38}
              height={38}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
            />
          </div>
          <div>
            <span className="font-black text-sm block leading-tight">AYAX TRACKER</span>
            <span className="text-[9px] font-bold text-amber-400 block tracking-wider">RC: 9345377</span>
          </div>
        </div>

        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Toggle Navigation Menu"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 text-white flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out border-r border-slate-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ backgroundColor: "#021235" }}
      >
        <div className="p-6 space-y-8 flex-1 overflow-y-auto">
          
          {/* Brand Identity with Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Ayax Travels Logo"
                  width={46}
                  height={46}
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                />
              </div>
              <div>
                <span className="font-extrabold text-sm block tracking-tight">AYAX TRAVELS</span>
                <span className="text-[10px] font-bold text-amber-400 block tracking-widest uppercase">
                  Client Portal
                </span>
              </div>
            </div>

            <button 
              onClick={() => setSidebarOpen(false)} 
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Applicant Identification Badge */}
          <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Verified Candidate
            </span>
            <h4 className="text-xs font-bold text-white truncate">{ACTIVE_USER_CASE.fullName}</h4>
            <span className="text-[11px] text-slate-400 block font-mono">
              Ref: {ACTIVE_USER_CASE.applicantRefId}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <button
              onClick={() => { setActiveTab("overview"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left cursor-pointer ${
                activeTab === "overview" 
                  ? "bg-amber-500 text-slate-950 shadow-md font-black" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dossier Overview</span>
            </button>

            <button
              onClick={() => { setActiveTab("timeline"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left cursor-pointer ${
                activeTab === "timeline" 
                  ? "bg-amber-500 text-slate-950 shadow-md font-black" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Processing Stages</span>
            </button>

            <button
              onClick={() => { setActiveTab("financials"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left cursor-pointer ${
                activeTab === "financials" 
                  ? "bg-amber-500 text-slate-950 shadow-md font-black" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Financial Ledger</span>
            </button>

            <button
              onClick={() => { setActiveTab("documents"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left cursor-pointer ${
                activeTab === "documents" 
                  ? "bg-amber-500 text-slate-950 shadow-md font-black" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FolderCheck className="w-4 h-4" />
              <span>Official Documents</span>
            </button>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
              >
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>Return to Main Website</span>
              </Link>
            </div>
          </nav>

        </div>

        {/* Sidebar Footer with Logout Button */}
        <div className="p-6 border-t border-white/10 space-y-3">
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>Ayax Global Ventures Ltd</span>
            <span className="text-amber-400 font-bold">RC: 9345377</span>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 px-4 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-6xl overflow-y-auto">
        
        {/* Top Operational Status Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                {ACTIVE_USER_CASE.serviceType}
              </span>
              <span className="text-xs text-slate-400 font-mono font-bold">
                {ACTIVE_USER_CASE.applicantRefId}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Case Tracker: {ACTIVE_USER_CASE.fullName}
            </h1>
            <p className="text-xs text-slate-500">
              International Passport No: <strong>{ACTIVE_USER_CASE.passportNo}</strong> | Registered: {ACTIVE_USER_CASE.applicationDate}
            </p>
          </div>

          <a
            href="https://wa.me/2348161444444"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white shadow transition flex items-center gap-2 hover:opacity-90"
            style={{ backgroundColor: "#031B4E" }}
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Assigned Officer Desk</span>
          </a>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div 
              className="p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
              style={{ backgroundColor: "#031B4E" }}
            >
              <div className="relative z-10 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Live Case Progression: Stage 03 of 04
                  </span>
                  <span className="text-lg font-black text-amber-400">
                    {ACTIVE_USER_CASE.overallProgress}% Complete
                  </span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/15">
                  <div 
                    className="bg-amber-400 h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${ACTIVE_USER_CASE.overallProgress}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-xs text-slate-200 pt-1">
                  <span>Current Milestone: <strong>{ACTIVE_USER_CASE.currentStageName}</strong></span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Normal Processing Speed
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Assigned Institution
                </span>
                <h4 className="text-sm font-bold text-slate-900">{ACTIVE_USER_CASE.targetHospital}</h4>
                <span className="text-xs text-amber-600 font-medium block">{ACTIVE_USER_CASE.targetDestination}</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Medical Specialty / Scope
                </span>
                <h4 className="text-sm font-bold text-slate-900">{ACTIVE_USER_CASE.specialization}</h4>
                <span className="text-xs text-slate-500 block">Direct Inpatient Admission Track</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Registration Payment Status
                </span>
                <h4 className="text-sm font-bold text-emerald-700">Verified &amp; Reconciled</h4>
                <span className="text-xs text-slate-500 block">{ACTIVE_USER_CASE.financials.registrationFee} Paid via Paystack</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Application Milestones Timeline
                </h3>
                <button
                  onClick={() => setActiveTab("timeline")}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  View Full Audit Log <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                {ACTIVE_USER_CASE.stages.map((stg) => (
                  <div key={stg.id} className="flex items-start gap-4">
                    <div className="mt-1">
                      {stg.status === "completed" && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {stg.status === "active" && <Clock className="w-5 h-5 text-amber-500 animate-pulse" />}
                      {stg.status === "pending" && <div className="w-5 h-5 rounded-full border-2 border-slate-300" />}
                    </div>
                    <div className="flex-1 border-b border-slate-100 pb-3">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <h4 className={`text-xs sm:text-sm font-bold ${stg.status === "pending" ? "text-slate-400" : "text-slate-900"}`}>
                          {stg.title}
                        </h4>
                        <span className="text-[11px] text-slate-400">{stg.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{stg.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DETAILED TIMELINE */}
        {activeTab === "timeline" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Official Case Verification Pipeline</h2>
              <p className="text-xs text-slate-500 mt-1">
                Chronological status updates logged directly by foreign hospital coordinators, employers, and embassy filing desks.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pl-6 py-2">
              {ACTIVE_USER_CASE.stages.map((stg, idx) => (
                <div key={stg.id} className="relative">
                  <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 bg-white ${
                    stg.status === "completed" 
                      ? "border-emerald-500 bg-emerald-500" 
                      : stg.status === "active" 
                        ? "border-amber-500 bg-amber-400 animate-ping" 
                        : "border-slate-300 bg-white"
                  }`} />

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 w-fit">
                        Milestone 0{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{stg.date}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">{stg.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{stg.notes}</p>

                    <div className="pt-2 flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        stg.status === "completed" ? "bg-emerald-100 text-emerald-800" :
                        stg.status === "active" ? "bg-amber-100 text-amber-900" : "bg-slate-200 text-slate-600"
                      }`}>
                        {stg.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FINANCIAL LEDGER */}
        {activeTab === "financials" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Official Financial &amp; Milestone Ledger</h2>
              <p className="text-xs text-slate-500 mt-1">
                Transparent breakdown of statutory administrative costs, hospital billing estimates, and zero-fraud verification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Intake &amp; Assessment Filing Fee
                </span>
                <h3 className="text-2xl font-black text-slate-900">{ACTIVE_USER_CASE.financials.registrationFee}</h3>
                <span className="text-xs font-bold text-emerald-700 block">Status: {ACTIVE_USER_CASE.financials.registrationStatus}</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Estimated Hospital Surgical Billing
                </span>
                <h3 className="text-2xl font-black text-slate-900">{ACTIVE_USER_CASE.financials.estimatedHospitalBill}</h3>
                <span className="text-xs text-slate-600 block">{ACTIVE_USER_CASE.financials.billSettlementMethod}</span>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Ayax Global Anti-Fraud Direct Billing Protocol</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                Under RC: 9345377 statutory consumer protection laws, Ayax Travels and Tours does not collect hospital treatment funds into local third-party accounts. All surgical bills are settled by the patient directly with Apollo Hospital cashier desks upon arrival in India.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: OFFICIAL DOCUMENTS */}
        {activeTab === "documents" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Official Case Records &amp; Downloadable Files</h2>
              <p className="text-xs text-slate-500 mt-1">
                Authentic documents bearing official institutional accreditation stamps and consular barcodes.
              </p>
            </div>

            <div className="space-y-3">
              {ACTIVE_USER_CASE.documents.map((doc, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-amber-500 bg-slate-50 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{doc.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Starting verified download: ${doc.title}`)}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-amber-500 hover:text-slate-950 text-slate-700 shadow-sm transition flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}