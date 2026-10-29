"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Stethoscope, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  X, 
  ArrowLeft,
  Building2,
  HeartPulse
} from "lucide-react";

export default function MedicalCasesAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCase, setActiveCase] = useState<any | null>(null);

  const [medicalList, setMedicalList] = useState([
    {
      id: "med-1",
      name: "Alh. Mansur Bello",
      refId: "AYX-MED-84920",
      passportNo: "A10984521",
      hospital: "Indraprastha Apollo Hospital",
      city: "New Delhi, India",
      condition: "Cardiology & Coronary Bypass Surgery",
      attendantName: "Kabiru Mansur",
      attendantPassport: "A11294822",
      feeStatus: "Paid (₦50,000)",
      stage: "Approved / Ready",
      submittedDate: "Oct 12, 2026",
      documents: [
        { name: "Apollo_Hospital_Acceptance_Letter.pdf", size: "1.2 MB" },
        { name: "Cardiology_Echocardiogram_Scans.pdf", size: "3.4 MB" },
        { name: "Patient_Passport_Biodata.jpg", size: "640 KB" }
      ]
    },
    {
      id: "med-2",
      name: "Hajiya Amina Garba",
      refId: "AYX-MED-30192",
      passportNo: "B21938210",
      hospital: "Medipol Mega University Hospital",
      city: "Istanbul, Turkey",
      condition: "Nephrology & Renal Transplant Evaluation",
      attendantName: "Dr. Salisu Garba",
      attendantPassport: "B21938211",
      feeStatus: "Paid (₦50,000)",
      stage: "Under Assessment",
      submittedDate: "Oct 18, 2026",
      documents: [
        { name: "Medipol_Doctor_Assessment_Proforma.pdf", size: "980 KB" },
        { name: "Renal_Biopsy_Diagnostic_Report.pdf", size: "2.1 MB" }
      ]
    }
  ]);

  const filtered = medicalList.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.condition.toLowerCase().includes(searchQuery.toLowerCase())
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
            <span className="text-xs font-bold text-slate-500">Medical Tourism Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Medical Tourism Cases Registry
          </h1>
          <p className="text-xs text-slate-500">
            Overseas hospital clinical evaluations, surgeon reviews, and Indian/Turkish consular invitation letters.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient, hospital, or condition..."
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

      {/* CASES TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Active Patients Dossiers ({filtered.length})
          </h3>
          <span className="text-xs text-slate-400">RC: 9345377 Healthcare Audit</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
              <tr>
                <th className="p-4">Case Ref</th>
                <th className="p-4">Patient Name</th>
                <th className="p-4">Hospital & City</th>
                <th className="p-4">Clinical Specialty</th>
                <th className="p-4">Attendant</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Audit Dossier</th>
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
                  <td className="p-4 font-semibold text-slate-800">
                    {item.hospital}
                    <span className="block text-[10px] text-slate-400">{item.city}</span>
                  </td>
                  <td className="p-4 text-slate-600">{item.condition}</td>
                  <td className="p-4 text-slate-600">
                    {item.attendantName}
                    <span className="block text-[10px] text-slate-400">{item.attendantPassport}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {item.stage}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setActiveCase(item)}
                      className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                      style={{ backgroundColor: "#031B4E" }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Examine Case</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CASE INSPECTION MODAL */}
      {activeCase && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Hospital Dossier</span>
                <h3 className="text-xl font-black text-slate-900">{activeCase.name}</h3>
                <span className="text-xs text-slate-500 font-mono">Ref: {activeCase.refId} | Pass: {activeCase.passportNo}</span>
              </div>
              <button onClick={() => setActiveCase(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Hospital:</span>
                <span className="font-bold text-slate-900">{activeCase.hospital}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Diagnosis:</span>
                <span className="font-bold text-slate-900">{activeCase.condition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Attendant / Escort:</span>
                <span className="font-bold text-slate-900">{activeCase.attendantName} ({activeCase.attendantPassport})</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-800">Verified Medical Records & Letters</h4>
              <div className="space-y-2">
                {activeCase.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 truncate mr-2">{doc.name}</span>
                    <button
                      onClick={() => alert(`Downloading: ${doc.name}`)}
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