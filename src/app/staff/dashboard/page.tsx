"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Clock, 
  UploadCloud, 
  FileCheck, 
  Send, 
  UserCheck, 
  Menu, 
  X, 
  LogOut, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export default function StaffWorkspacePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeApplicant, setActiveApplicant] = useState<any | null>(null);
  const [staffNote, setStaffNote] = useState("");
  const [formattedCvUpload, setFormattedCvUpload] = useState<File | null>(null);

  // Jerin masu neman aiki da takardunsu kadai
  const [jobApplicantsList, setJobApplicantsList] = useState([
    {
      id: "wrk-1",
      name: "Usman Jibril",
      refId: "AYX-WRK-51209",
      passportNo: "B20491823",
      role: "Heavy Truck Driver (Logistics)",
      destination: "Doha, Qatar",
      employer: "Al-Mansoor Logistics LLC",
      phone: "+2348021112233",
      email: "usman.j@example.com",
      status: "Document Verification Stage",
      submittedDate: "Oct 15, 2026",
      cvStatus: "Pending International Reformatting",
      documents: [
        { name: "Original_Candidate_Resume.pdf", type: "CV", size: "820 KB" },
        { name: "Heavy_Duty_Driving_License.pdf", type: "License", size: "1.2 MB" },
        { name: "Experience_Recommendation_Letter.pdf", type: "Certificate", size: "940 KB" },
        { name: "Passport_BioData_Page.jpg", type: "Bio-Data", size: "540 KB" }
      ]
    },
    {
      id: "wrk-2",
      name: "Sani Abdullahi",
      refId: "AYX-WRK-99214",
      passportNo: "A28192019",
      role: "Hospitality & Restaurant Captain",
      destination: "Dubai, United Arab Emirates",
      employer: "Emaar Hospitality Group",
      phone: "+2348034445566",
      email: "sani.a@example.com",
      status: "CV Vetted & Approved",
      submittedDate: "Oct 18, 2026",
      cvStatus: "Standardized CV Ready",
      documents: [
        { name: "Sani_Abdullahi_CV.pdf", type: "CV", size: "750 KB" },
        { name: "Catering_Trade_Test_Certificate.pdf", type: "Certificate", size: "1.1 MB" },
        { name: "Passport_Data_Page.jpg", type: "Bio-Data", size: "610 KB" }
      ]
    },
    {
      id: "wrk-3",
      name: "Bello Tukur",
      refId: "AYX-WRK-38102",
      passportNo: "B90182733",
      role: "Construction Site Electrician",
      destination: "Vilnius, Lithuania (Europe)",
      employer: "Baltic Infrastructure Construction",
      phone: "+2348091122334",
      email: "bello.t@example.com",
      status: "Awaiting Document Authentication",
      submittedDate: "Oct 22, 2026",
      cvStatus: "Pending International Reformatting",
      documents: [
        { name: "Bello_Tukur_Electrician_CV.pdf", type: "CV", size: "890 KB" },
        { name: "Technical_College_Diploma.pdf", type: "Diploma", size: "1.8 MB" }
      ]
    }
  ]);

  const filtered = jobApplicantsList.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUploadReformattedCV = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formattedCvUpload || !activeApplicant) return;

    alert(`Standardized International CV uploaded for candidate ${activeApplicant.name}. System tagged as "Standardized CV Ready".`);
    
    setJobApplicantsList(jobApplicantsList.map(item => {
      if (item.id === activeApplicant.id) {
        return { ...item, cvStatus: "Standardized CV Ready" };
      }
      return item;
    }));

    setActiveApplicant({ ...activeApplicant, cvStatus: "Standardized CV Ready" });
    setFormattedCvUpload(null);
  };

  const handleDownloadFile = (fileName: string) => {
    alert(`Downloading candidate document: ${fileName}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row text-slate-800">
      
      {/* MOBILE HEADER */}
      <header className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm"
            style={{ backgroundColor: "#031B4E", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.4)" }}
          >
            AG
          </div>
          <div>
            <span className="font-black text-sm block leading-tight">STAFF DESK</span>
            <span className="text-[9px] font-bold text-amber-400 block tracking-wider">RC: 9345377</span>
          </div>
        </div>

        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* STAFF SIDEBAR */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 text-white flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out border-r border-slate-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ backgroundColor: "#021235" }}
      >
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between">
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
                  Staff Workspace
                </span>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Authorized Staff Officer
            </span>
            <h4 className="text-xs font-bold text-white">CV & Document Specialist</h4>
            <span className="text-[11px] text-slate-400 block font-mono">
              Desk Clearance: Work Applicants
            </span>
          </div>

          <nav className="space-y-1.5">
            <div className="px-4 py-3 rounded-xl text-xs font-black bg-amber-500 text-slate-950 shadow flex items-center gap-3">
              <Briefcase className="w-4 h-4" />
              <span>Job Applicants & CVs</span>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
              >
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>Return to Main Website</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="p-6 border-t border-white/10 space-y-3">
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>Ayax Global Ventures Ltd</span>
            <span className="text-amber-400 font-bold">RC: 9345377</span>
          </div>
          <Link
            href="/staff/login"
            className="w-full py-2.5 px-4 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </Link>
        </div>
      </aside>

      {/* MAIN STAFF CONTENT */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl overflow-y-auto space-y-6">
        
        {/* TOP STATUS BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                Staff Review Desk
              </span>
              <span className="text-xs text-slate-400 font-bold">Employment Records Audit</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Job Applicants & Document Verification
            </h1>
            <p className="text-xs text-slate-500">
              Review candidate files, download original resumes and trade credentials, and upload standardized international CVs.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidate name, ref, role..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
            />
          </div>
        </div>

        {/* APPLICANTS TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Work Candidates Database ({filtered.length})
            </h3>
            <span className="text-xs text-slate-400">Strictly Employment Profiles</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
                <tr>
                  <th className="p-4">App Ref</th>
                  <th className="p-4">Candidate Name</th>
                  <th className="p-4">Trade / Profession</th>
                  <th className="p-4">Target Country</th>
                  <th className="p-4">Employer Sponsor</th>
                  <th className="p-4">CV Formatting</th>
                  <th className="p-4 text-right">Inspect & Verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-mono font-bold text-amber-700">{item.refId}</td>
                    <td className="p-4 font-bold text-slate-900">
                      {item.name}
                      <span className="block text-[10px] font-normal text-slate-400">Pass: {item.passportNo}</span>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">{item.role}</td>
                    <td className="p-4 text-slate-600">{item.destination}</td>
                    <td className="p-4 text-slate-600">{item.employer}</td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.cvStatus === "Standardized CV Ready"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-900 border border-amber-300"
                      }`}>
                        {item.cvStatus}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setActiveApplicant(item)}
                        className="px-3.5 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                        style={{ backgroundColor: "#031B4E" }}
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Inspect Files</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* INSPECTION & CV RE-FORMATTING MODAL */}
      {activeApplicant && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                  Candidate Credentials Audit
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{activeApplicant.name}</h3>
                <span className="text-xs text-slate-500 font-mono">
                  Ref: {activeApplicant.refId} | Role: {activeApplicant.role}
                </span>
              </div>
              <button onClick={() => setActiveApplicant(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Applicant Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Country</span>
                <span className="font-bold text-slate-800">{activeApplicant.destination}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Employer</span>
                <span className="font-bold text-slate-800">{activeApplicant.employer}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Phone Number</span>
                <span className="font-bold text-slate-800">{activeApplicant.phone}</span>
              </div>
            </div>

            {/* DOWNLOAD ORIGINAL DOCUMENTS */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Candidate Uploaded Documents (Originals)
              </h4>

              <div className="space-y-2">
                {activeApplicant.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-800 block truncate">{doc.name}</span>
                      <span className="text-[10px] text-slate-400">{doc.type} • {doc.size}</span>
                    </div>
                    <button
                      onClick={() => handleDownloadFile(doc.name)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold shadow-sm flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-600" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* UPLOAD RE-FORMATTED INTERNATIONAL CV */}
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 space-y-3">
              <div>
                <span className="text-xs font-bold uppercase text-amber-950 block">
                  Staff Action: Upload Standardized International CV
                </span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  After re-designing candidate&apos;s CV to international Gulf/European format, upload the new version here.
                </p>
              </div>

              <form onSubmit={handleUploadReformattedCV} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="file"
                  required
                  accept=".pdf"
                  onChange={(e) => setFormattedCvUpload(e.target.files ? e.target.files[0] : null)}
                  className="flex-1 border border-slate-300 rounded-xl p-2 text-xs bg-white outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow hover:opacity-95 flex items-center justify-center gap-1.5"
                  style={{ backgroundColor: "#031B4E" }}
                >
                  <UploadCloud className="w-4 h-4 text-amber-400" />
                  <span>Upload & Approve CV</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}