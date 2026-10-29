"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  CheckCircle2, 
  Clock, 
  FileText, 
  X, 
  ArrowLeft,
  BookOpen,
  Award,
  MapPin
} from "lucide-react";

export default function ScholarshipAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeScholarship, setActiveScholarship] = useState<any | null>(null);

  const [scholarshipList, setScholarshipList] = useState([
    {
      id: "sch-1",
      name: "Fatima Abubakar",
      refId: "AYX-SCH-90214",
      passportNo: "A30182744",
      university: "Near East University",
      country: "North Cyprus",
      degreeLevel: "Postgraduate (MSc)",
      course: "Cybersecurity & Data Networks",
      waiver: "75% Partial Tuition Waiver",
      feeStatus: "Paid (₦50,000 via Paystack)",
      stage: "Under Assessment",
      submittedDate: "Oct 18, 2026",
      documents: [
        { name: "Fatima_Abubakar_Academic_CV.pdf", size: "780 KB" },
        { name: "BSc_Computer_Science_Transcript.pdf", size: "2.4 MB" },
        { name: "WAEC_Certificate_Verified.pdf", size: "640 KB" },
        { name: "Passport_Biodata_Page.jpg", size: "510 KB" }
      ]
    },
    {
      id: "sch-2",
      name: "Ibrahim Kabir",
      refId: "AYX-SCH-44102",
      passportNo: "B99201944",
      university: "Istanbul Aydin University",
      country: "Turkey",
      degreeLevel: "Undergraduate (BSc)",
      course: "Software Engineering",
      waiver: "100% Full Tuition Waiver",
      feeStatus: "Paid (₦50,000 via Paystack)",
      stage: "Approved / Ready",
      submittedDate: "Oct 21, 2026",
      documents: [
        { name: "Ibrahim_Kabir_CV.pdf", size: "620 KB" },
        { name: "WAEC_Direct_Result_Slip.pdf", size: "890 KB" },
        { name: "Recommendation_Letter_Dean.pdf", size: "450 KB" }
      ]
    }
  ]);

  const filtered = scholarshipList.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.course.toLowerCase().includes(searchQuery.toLowerCase())
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
            <span className="text-xs font-bold text-slate-500">Scholarships & Academic Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Scholarship Applications Registry
          </h1>
          <p className="text-xs text-slate-500">
            Overseas university admission quotas, tuition grant waiver letters, and academic credential screening under RC: 9345377.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidate, course, university..."
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

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Scholarship Dossiers ({filtered.length})
          </h3>
          <span className="text-xs text-slate-400">Academic Board Registry</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
              <tr>
                <th className="p-4">App Ref</th>
                <th className="p-4">Applicant Name</th>
                <th className="p-4">University & Country</th>
                <th className="p-4">Degree & Course</th>
                <th className="p-4">Waiver / Grant</th>
                <th className="p-4">Fee Status</th>
                <th className="p-4">Current Stage</th>
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
                    {item.university}
                    <span className="block text-[10px] text-slate-400">{item.country}</span>
                  </td>
                  <td className="p-4 text-slate-700 font-medium">
                    {item.course}
                    <span className="block text-[10px] text-slate-400">{item.degreeLevel}</span>
                  </td>
                  <td className="p-4 font-bold text-emerald-700">{item.waiver}</td>
                  <td className="p-4 font-bold text-emerald-800">{item.feeStatus}</td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {item.stage}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setActiveScholarship(item)}
                      className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                      style={{ backgroundColor: "#031B4E" }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Review Dossier</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INSPECTION MODAL */}
      {activeScholarship && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Scholarship Credentials</span>
                <h3 className="text-xl font-black text-slate-900">{activeScholarship.name}</h3>
                <span className="text-xs text-slate-500 font-mono">Ref: {activeScholarship.refId} | Course: {activeScholarship.course}</span>
              </div>
              <button onClick={() => setActiveScholarship(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="font-bold text-slate-900">{activeScholarship.university} ({activeScholarship.country})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Degree & Course:</span>
                <span className="font-bold text-slate-900">{activeScholarship.degreeLevel} - {activeScholarship.course}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tuition Grant:</span>
                <span className="font-bold text-emerald-700">{activeScholarship.waiver}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-800">Academic Records & Transcripts</h4>
              <div className="space-y-2">
                {activeScholarship.documents.map((doc: any, idx: number) => (
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