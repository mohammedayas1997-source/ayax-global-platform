"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  Compass, 
  Plane, 
  Search, 
  Printer, 
  FileText, 
  Eye, 
  X, 
  LogOut, 
  ExternalLink,
  ChevronRight,
  DollarSign,
  TrendingUp,
  CreditCard,
  Wallet,
  ArrowUpRight
} from "lucide-react";

export default function AdminMainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);
  const [overrideStage, setOverrideStage] = useState("");
  const [messagePayload, setMessagePayload] = useState("");

  const [applications, setApplications] = useState([
    {
      id: "app-1",
      name: "Alh. Mansur Bello",
      refId: "AYX-MED-84920",
      passportNo: "A10984521",
      type: "Medical Tourism",
      folderLink: "/admin/medical-cases",
      details: "Apollo Hospital (India) - Bypass",
      stage: "Approved / Ready",
      registrationFee: 50000,
      balanceFee: 200000,
      feeStatus: "Paid (₦50,000)"
    },
    {
      id: "app-2",
      name: "Usman Jibril",
      refId: "AYX-WRK-51209",
      passportNo: "B20491823",
      type: "Job Placement",
      folderLink: "/admin/job-applicants",
      details: "Qatar Heavy Logistics Driver",
      stage: "Under Assessment",
      registrationFee: 50000,
      balanceFee: 200000,
      feeStatus: "Paid (₦50,000)"
    },
    {
      id: "app-3",
      name: "Fatima Abubakar",
      refId: "AYX-SCH-90214",
      passportNo: "A30182744",
      type: "Scholarships",
      folderLink: "/admin/scholarships",
      details: "Near East University (75% Waiver)",
      stage: "Under Assessment",
      registrationFee: 50000,
      balanceFee: 200000,
      feeStatus: "Paid (₦50,000)"
    },
    {
      id: "app-4",
      name: "Mukhtar Idris",
      refId: "AYX-VIS-77291",
      passportNo: "B19284722",
      type: "Visa & Umrah",
      folderLink: "/admin/visa-requests",
      details: "VIP Umrah & Haramain Suite",
      stage: "Intake Review",
      registrationFee: 50000,
      balanceFee: 350000,
      feeStatus: "Paid (₦50,000)"
    },
    {
      id: "app-5",
      name: "Dr. Farouk Umar",
      refId: "AYX-FLT-88201",
      passportNo: "A90182741",
      type: "Flight Booking",
      folderLink: "/admin/flight-bookings",
      details: "Kano (KAN) → Dubai (DXB) - 4 Pax",
      stage: "Ticket Reservation Issued",
      registrationFee: 50000,
      balanceFee: 150000,
      feeStatus: "Paid (₦50,000)"
    }
  ]);

  // A saman Admin Page inda ake karanta data:
const [manpowerRequests, setManpowerRequests] = useState([
  {
    id: "REQ-948210",
    companyName: "Al-Mansoor Logistics LLC",
    contactPerson: "Engr. Tariq Al-Sayed",
    email: "tariq@almansoorlogistics.qa",
    phone: "+974 5512 8899",
    country: "Qatar",
    jobCategory: "Logistics & Heavy Drivers",
    headcount: 25,
    salaryOffered: "2,400 QAR + Free Accommodation",
    benefits: "Visa + Flight + Insurance",
    date: "Oct 28, 2026",
    status: "NEW_PENDING"
  }
]);

// Karanta sabbin bukatu da kamfanoni suka shigar:
useEffect(() => {
  const saved = localStorage.getItem("ayax_manpower_requests");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setManpowerRequests((prev) => [...parsed, ...prev]);
      }
    } catch (e) {
      console.error(e);
    }
  }
}, []);

  // Lissafin Kudi Kai Tsaye (Revenue Calculations)
  const totalRegistrationsPaid = applications.reduce((sum, item) => sum + item.registrationFee, 0);
  const totalPendingBalances = applications.reduce((sum, item) => sum + item.balanceFee, 0);
  const estimatedGrossRevenue = totalRegistrationsPaid + totalPendingBalances;

  const filtered = applications.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row text-slate-800">
      
      {/* SIDEBAR NAVIGATION */}
      <aside 
        className="w-full lg:w-72 text-white flex flex-col justify-between border-r border-slate-800 lg:h-screen lg:sticky top-0"
        style={{ backgroundColor: "#021235" }}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shadow"
              style={{ backgroundColor: "#031B4E", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.4)" }}
            >
              AG
            </div>
            <div>
              <span className="font-extrabold text-sm block tracking-tight">AYAX GLOBAL</span>
              <span className="text-[10px] font-bold text-amber-400 block tracking-widest uppercase">
                Enterprise Admin
              </span>
            </div>
          </div>

          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-xs space-y-1">
            <span className="text-[10px] text-amber-400 font-bold block uppercase">RC: 9345377</span>
            <span className="text-white font-bold block">Super Administrator</span>
            <span className="text-slate-400 text-[11px] block">Full Clearance Access</span>
          </div>

          <nav className="space-y-1.5 pt-2">
            <Link
              href="/admin"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black bg-amber-500 text-slate-950 shadow transition"
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4" />
                <span>Overview Dashboard</span>
              </div>
            </Link>

            <Link
              href="/admin/medical-cases"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <Stethoscope className="w-4 h-4 text-blue-400" />
                <span>Medical Cases</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <button
  onClick={() => setActiveTab("manpower")}
  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition text-left cursor-pointer ${
    activeTab === "manpower"
      ? "bg-amber-500 text-slate-950 shadow-md font-black"
      : "text-slate-300 hover:bg-white/5 hover:text-white"
  }`}
>
  <div className="flex items-center gap-2.5">
    <Users className="w-4 h-4" />
    <span>Manpower Demand Desk</span>
  </div>
  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950">
    {manpowerRequests.length}
  </span>
</button>

            <Link
              href="/admin/job-applicants"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Job Applicants</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <Link
              href="/admin/scholarships"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>Scholarships</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <Link
              href="/admin/visa-requests"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Visa Requests</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <Link
              href="/admin/flight-bookings"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <div className="flex items-center gap-3">
                <Plane className="w-4 h-4 text-sky-400" />
                <span>Flight Bookings</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
              >
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>Open Public Portal</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="p-6 border-t border-white/10">
          <Link
            href="/"
            className="w-full py-2.5 px-4 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </Link>
        </div>
      </aside>

      {/* MAIN BODY */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl overflow-y-auto space-y-8">
        
        {/* TOP BANNER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                Command Center
              </span>
              <span className="text-xs text-slate-400 font-bold">Ayax Global Ventures Ltd (RC: 9345377)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Admin Master Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Central control over financial revenue, portal quotas, applicant files, and compliance reviews.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4 text-amber-500" />
            <span>Print Financial Summary</span>
          </button>
        </div>

        {/* FINANCIAL REVENUE CARDS (JIMILLAR KUDIN SHIGA) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Card 1: Total Initial Revenue Received */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Settled Intake Fees (Paid)
              </span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-emerald-700">
              ₦{totalRegistrationsPaid.toLocaleString()}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <span className="text-emerald-700 font-bold flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> 100% Reconciled
              </span>
              <span>via Paystack gateway</span>
            </div>
          </div>

          {/* Card 2: Pending Balances Upon Visa/Admission Approval */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pipeline Success Balances
              </span>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-amber-600">
              ₦{totalPendingBalances.toLocaleString()}
            </h2>
            <p className="text-xs text-slate-500 pt-1">
              Payable strictly upon final visa stamps & admission issuances.
            </p>
          </div>

          {/* Card 3: Projected Gross Portfolio Value */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Portfolio Value
              </span>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              ₦{estimatedGrossRevenue.toLocaleString()}
            </h2>
            <p className="text-xs text-slate-500 pt-1">
              Combined intake revenue and projected milestone balances.
            </p>
          </div>

        </div>

        {/* 5 FOLDER SHORTCUT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link
            href="/admin/medical-cases"
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition group block"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition">
              Medical Cases
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">Apollo & Medipol hospital clinical reviews.</p>
          </Link>

          <Link
            href="/admin/job-applicants"
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition group block"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">
              Job Applicants
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">Gulf & European work permit candidate vetting.</p>
          </Link>

          <Link
            href="/admin/scholarships"
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-500 transition group block"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-purple-700 transition">
              Scholarships
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">Tuition grants, WAEC slips & university seats.</p>
          </Link>

          <Link
            href="/admin/visa-requests"
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition group block"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition">
              Visa Requests
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">VIP Umrah suites & tourist embassy dossiers.</p>
          </Link>

          <Link
            href="/admin/flight-bookings"
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-500 transition group block"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-sky-700 transition">
              Flight Bookings
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">GDS PNR reservations & ticketing manifests.</p>
          </Link>
        </div>

        

        {/* MASTER AUDIT TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Registered Dossiers Across All Sectors ({filtered.length})
              </h3>
              <p className="text-xs text-slate-500">Cross-department applications actively under process.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dossiers..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
                <tr>
                  <th className="p-4">Tracking Ref</th>
                  <th className="p-4">Candidate Name</th>
                  <th className="p-4">Service Domain</th>
                  <th className="p-4">Program Details</th>
                  <th className="p-4">Paid (Intake)</th>
                  <th className="p-4">Success Balance</th>
                  <th className="p-4">Current Stage</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-mono font-bold text-amber-700">{item.refId}</td>
                    <td className="p-4 font-bold text-slate-900">
                      {item.name}
                      <span className="block text-[10px] font-normal text-slate-400">{item.passportNo}</span>
                    </td>
                    <td className="p-4">
                      <Link href={item.folderLink} className="font-bold text-blue-600 hover:underline">
                        {item.type}
                      </Link>
                    </td>
                    <td className="p-4 text-slate-600">{item.details}</td>
                    <td className="p-4 font-bold text-emerald-700">₦{item.registrationFee.toLocaleString()}</td>
                    <td className="p-4 font-bold text-slate-700">₦{item.balanceFee.toLocaleString()}</td>
                    <td className="p-4">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        {item.stage}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedRecord(item);
                          setOverrideStage(item.stage);
                        }}
                        className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1"
                        style={{ backgroundColor: "#031B4E" }}
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {activeTab === "manpower" && (
  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
      <div>
        <h2 className="text-lg font-black text-slate-900">Corporate Employer Manpower Requests</h2>
        <p className="text-xs text-slate-500">Live recruitment orders submitted by foreign & local companies.</p>
      </div>
      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
        Active Pipeline: {manpowerRequests.length} Orders
      </span>
    </div>

    <div className="space-y-4">
      {manpowerRequests.map((req) => (
        <div key={req.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 mr-2">
                {req.country}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">{req.id}</span>
              <h3 className="text-base font-black text-slate-900 mt-1">{req.companyName}</h3>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              Needs {req.headcount} Workers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-white p-3 rounded-xl border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Role Requested</span>
              <span className="font-bold text-slate-800">{req.jobCategory}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Salary & Package</span>
              <span className="font-bold text-emerald-700">{req.salaryOffered}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Contact Representative</span>
              <span className="font-bold text-slate-800">{req.contactPerson} ({req.phone})</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-slate-400">Date Received: {req.date}</span>
            <a
              href={`https://wa.me/${req.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#031B4E] text-white hover:opacity-90 flex items-center gap-1.5"
            >
              <span>Contact Employer Directly</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      {/* INSPECTION MODAL */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                  Dossier Inspection
                </span>
                <h3 className="text-xl font-black text-slate-900">{selectedRecord.name}</h3>
                <span className="text-xs text-slate-500 font-mono">Ref: {selectedRecord.refId} | Pass: {selectedRecord.passportNo}</span>
              </div>
              <button onClick={() => setSelectedRecord(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Registration Paid</span>
                <span className="font-bold text-emerald-700 text-sm">₦{selectedRecord.registrationFee.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Success Balance Due</span>
                <span className="font-bold text-slate-900 text-sm">₦{selectedRecord.balanceFee.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-2">
              <span className="text-xs font-bold uppercase text-amber-900 block">Override Workflow Stage</span>
              <div className="flex gap-2">
                <select
                  value={overrideStage}
                  onChange={(e) => setOverrideStage(e.target.value)}
                  className="flex-1 border border-slate-300 rounded-xl p-2.5 text-xs font-bold outline-none bg-white"
                >
                  <option>Intake Review</option>
                  <option>Under Assessment</option>
                  <option>Approved / Ready</option>
                  <option>Action Required</option>
                </select>
                <button
                  onClick={() => {
                    alert(`Stage updated to: ${overrideStage}`);
                    setSelectedRecord(null);
                  }}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-white shadow"
                  style={{ backgroundColor: "#031B4E" }}
                >
                  Save Stage
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-slate-700 block">Dispatch Direct Candidate Notice</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messagePayload}
                  onChange={(e) => setMessagePayload(e.target.value)}
                  placeholder="e.g. Your verification is complete. Check documents tab."
                  className="flex-1 border border-slate-300 rounded-xl p-2.5 text-xs outline-none bg-slate-50"
                />
                <button
                  onClick={() => {
                    if (!messagePayload) return;
                    alert(`Notice sent to ${selectedRecord.name}: "${messagePayload}"`);
                    setMessagePayload("");
                  }}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs shadow text-slate-900"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  Send Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}