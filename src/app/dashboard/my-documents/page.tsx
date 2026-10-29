"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FolderCheck, 
  FileText, 
  Download, 
  UploadCloud, 
  Trash2, 
  Eye, 
  ShieldCheck, 
  Clock, 
  Menu, 
  X, 
  LayoutDashboard, 
  CreditCard, 
  MessageSquare, 
  LogOut, 
  ExternalLink,
  CheckCircle2,
  FileCheck
} from "lucide-react";

export default function MyDocumentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "official" | "uploaded">("all");

  const [documentsList, setDocumentsList] = useState([
    {
      id: "doc-1",
      title: "Apollo_Hospital_Formal_Acceptance_Letter.pdf",
      category: "official",
      tag: "Hospital Approval",
      issueDate: "Oct 15, 2026",
      fileSize: "1.2 MB",
      status: "Verified & Stamped"
    },
    {
      id: "doc-2",
      title: "Indian_High_Commission_Medical_Visa_Support.pdf",
      category: "official",
      tag: "Consular Filing",
      issueDate: "Oct 20, 2026",
      fileSize: "820 KB",
      status: "Embassy Ready"
    },
    {
      id: "doc-3",
      title: "Patient_International_Passport_DataPage.pdf",
      category: "uploaded",
      tag: "Identity Proof",
      issueDate: "Oct 12, 2026",
      fileSize: "640 KB",
      status: "Underwriter Cleared"
    },
    {
      id: "doc-4",
      title: "Cardiac_Echocardiogram_&_MRI_Scans.pdf",
      category: "uploaded",
      tag: "Clinical Scans",
      issueDate: "Oct 12, 2026",
      fileSize: "3.8 MB",
      status: "Reviewed by Cardiologist"
    },
    {
      id: "doc-5",
      title: "Paystack_Statutory_Receipt_50k.pdf",
      category: "official",
      tag: "Financial Record",
      issueDate: "Oct 12, 2026",
      fileSize: "310 KB",
      status: "Reconciled"
    }
  ]);

  const filteredDocs = documentsList.filter(doc => {
    if (activeFilter === "all") return true;
    return doc.category === activeFilter;
  });

  const handleSimulatedDownload = (fileName: string) => {
    alert(`Starting secure download for: ${fileName}`);
  };

  const handleSimulatedUpload = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Document uploaded successfully! Our compliance desk will authenticate it within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      
      {/* MOBILE HEADER */}
      <header className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm"
            style={{ backgroundColor: "#031B4E", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.4)" }}
          >
            AT
          </div>
          <div>
            <span className="font-black text-sm block leading-tight">MY DOCUMENTS</span>
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

      {/* SIDEBAR */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 text-white flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out border-r border-slate-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ backgroundColor: "#021235" }}
      >
        <div className="p-6 space-y-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shadow"
                style={{ backgroundColor: "#031B4E", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.4)" }}
              >
                AT
              </div>
              <div>
                <span className="font-extrabold text-sm block tracking-tight">AYAX TRAVELS</span>
                <span className="text-[10px] font-bold text-amber-400 block tracking-widest uppercase">
                  Client Portal
                </span>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Verified Candidate
            </span>
            <h4 className="text-xs font-bold text-white truncate">Alh. Mansur Bello</h4>
            <span className="text-[11px] text-slate-400 block font-mono">Ref: AYX-MED-84920</span>
          </div>

          <nav className="space-y-1.5">
            <Link
              href="/dashboard"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dossier Overview</span>
            </Link>

            <Link
              href="/dashboard/documents"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black bg-amber-500 text-slate-950 shadow-md transition"
            >
              <FolderCheck className="w-4 h-4" />
              <span>My Documents</span>
            </Link>

            <Link
              href="/dashboard/messages"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Messages & Alerts</span>
            </Link>

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

        <div className="p-6 border-t border-white/10 space-y-3">
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>Ayax Global Ventures Ltd</span>
            <span className="text-amber-400 font-bold">RC: 9345377</span>
          </div>
          <Link
            href="/dashboard"
            className="w-full py-2.5 px-4 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-6xl overflow-y-auto">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600">
              Secure Document Depository
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Document Vault & Approvals
            </h1>
            <p className="text-xs text-slate-500">
              Access verified hospital letters, embassy visa filings, and clinical files authenticated under RC: 9345377.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 256-Bit SSL Encrypted
            </span>
          </div>
        </div>

        {/* UPLOAD NEW DOCUMENT ACCORDION BOX */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Upload Additional Document / Report</h3>
              <p className="text-xs text-slate-500">Submit updated diagnostic results, new passport renewals, or financial statements.</p>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              PDF / JPG Only
            </span>
          </div>

          <form onSubmit={handleSimulatedUpload} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Document Category</label>
              <select className="w-full border border-slate-300 rounded-xl p-2.5 text-xs font-medium outline-none focus:ring-2 focus:ring-amber-500 bg-white">
                <option>Updated Medical Report / Lab Test</option>
                <option>Passport Renewal Bio-Data</option>
                <option>Yellow Fever Vaccination Card</option>
                <option>Bank Proof of Funds</option>
                <option>Other Supporting Records</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Select File (.PDF or .JPG)</label>
              <input 
                type="file" 
                required
                className="w-full border border-slate-300 rounded-xl p-2 text-xs bg-slate-50 outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-xs shadow transition flex items-center justify-center gap-1.5 text-white hover:opacity-95"
                style={{ backgroundColor: "#031B4E" }}
              >
                <UploadCloud className="w-4 h-4 text-amber-400" />
                <span>Upload to File Officer</span>
              </button>
            </div>
          </form>
        </div>

        {/* DOCUMENTS DIRECTORY & FILTER TABS */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeFilter === "all" ? "bg-amber-500 text-slate-950 shadow" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                All Documents ({documentsList.length})
              </button>
              <button
                onClick={() => setActiveFilter("official")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeFilter === "official" ? "bg-amber-500 text-slate-950 shadow" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Official Dossiers & Approvals
              </button>
              <button
                onClick={() => setActiveFilter("uploaded")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeFilter === "uploaded" ? "bg-amber-500 text-slate-950 shadow" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                My Uploads
              </button>
            </div>

            <span className="text-[11px] text-slate-400 font-medium">
              Showing {filteredDocs.length} files
            </span>
          </div>

          {/* Files List */}
          <div className="space-y-3">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-4 rounded-2xl border border-slate-200 hover:border-amber-400 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition">
                        {doc.title}
                      </h4>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                        {doc.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span>Issued: {doc.issueDate}</span>
                      <span>•</span>
                      <span>{doc.fileSize}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {doc.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0">
                  <button
                    onClick={() => handleSimulatedDownload(doc.title)}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-bold shadow-sm transition flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-600" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>

    </div>
  );
}