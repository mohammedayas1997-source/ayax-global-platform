"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  CheckCircle2, 
  FileText, 
  X, 
  ArrowLeft,
  UserCheck
} from "lucide-react";

export default function JobApplicantsAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeJobApp, setActiveJobApp] = useState<any | null>(null);

  const [applicantsList, setApplicantsList] = useState([
    {
      id: "wrk-1",
      name: "Usman Jibril",
      refId: "AYX-WRK-51209",
      passportNo: "B20491823",
      role: "Heavy Truck Driver (Logistics)",
      destination: "Doha, Qatar",
      employer: "Al-Mansoor Logistics & Transport LLC",
      phone: "+2348021112233",
      email: "usman.j@example.com",
      status: "Under Assessment",
      documents: [
        { name: "Usman_Jibril_Original_CV.pdf", size: "820 KB" },
        { name: "Driver_License_&_Experience_Letter.pdf", size: "1.4 MB" },
        { name: "Passport_Biodata.jpg", size: "540 KB" }
      ]
    },
    {
      id: "wrk-2",
      name: "Sani Abdullahi",
      refId: "AYX-WRK-99214",
      passportNo: "A28192019",
      role: "Hospitality & Food Services Staff",
      destination: "Dubai, United Arab Emirates",
      employer: "Emaar Hospitality Group",
      phone: "+2348034445566",
      email: "sani.a@example.com",
      status: "Approved / Ready",
      documents: [
        { name: "Sani_Abdullahi_CV.pdf", size: "750 KB" },
        { name: "Trade_Test_Certificate.pdf", size: "1.1 MB" }
      ]
    }
  ]);

  const filtered = applicantsList.filter(j => 
    j.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 lg:p-10 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/admin" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Master Admin
            </Link>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-slate-500">Recruitment Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Work Abroad Applicants Registry
          </h1>
          <p className="text-xs text-slate-500">
            Employer contract vetting, CV international standardization, and foreign work permit allocations.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidate, trade, country..."
            className="px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 flex-1 sm:w-64"
          />
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-4 h-4 text-amber-500" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* APPLICANTS TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Candidates Database ({filtered.length})
          </h3>
          <span className="text-xs text-slate-400">RC: 9345377 Employment Audit</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
              <tr>
                <th className="p-4">App Ref</th>
                <th className="p-4">Candidate Name</th>
                <th className="p-4">Profession / Trade</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Employer Sponsor</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Inspect Profile</th>
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
                  <td className="p-4 font-semibold text-slate-800">{item.role}</td>
                  <td className="p-4 text-slate-600">{item.destination}</td>
                  <td className="p-4 text-slate-600">{item.employer}</td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setActiveJobApp(item)}
                      className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                      style={{ backgroundColor: "#031B4E" }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Review CV & Files</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CV & DOSSIER MODAL */}
      {activeJobApp && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Candidate Dossier</span>
                <h3 className="text-xl font-black text-slate-900">{activeJobApp.name}</h3>
                <span className="text-xs text-slate-500 font-mono">Ref: {activeJobApp.refId} | Role: {activeJobApp.role}</span>
              </div>
              <button onClick={() => setActiveJobApp(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-800">Download Candidate Credentials</h4>
              <div className="space-y-2">
                {activeJobApp.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 truncate mr-2">{doc.name}</span>
                    <button
                      onClick={() => alert(`Downloading verified document: ${doc.name}`)}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold shadow-sm flex items-center gap-1 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-600" /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}