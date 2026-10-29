"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  Send, 
  Bell, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X, 
  LayoutDashboard, 
  FolderCheck, 
  LogOut, 
  ExternalLink,
  PhoneCall,
  UserCheck
} from "lucide-react";

export default function MessagesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const [notificationsList, setNotificationsList] = useState([
    {
      id: "msg-1",
      sender: "Chief Medical Logistics Officer (New Delhi Desk)",
      subject: "Formal Hospital Visa Invitation Letter Transmitted",
      timestamp: "Today at 09:45 AM",
      body: "Good day, Alh. Mansur Bello. We have confirmed the official Medical Visa Invitation Letter from Apollo Hospital's International Patient Department. The consular barcode has been endorsed and uploaded to your Documents tab. Please print and attach to your visa file.",
      unread: true
    },
    {
      id: "msg-2",
      sender: "Ayax Compliance & Admissions Desk",
      subject: "Registration & Document Verification Cleared",
      timestamp: "Oct 15, 2026, 02:10 PM",
      body: "Your ₦50,000 upfront administrative fee has been reconciled via Paystack. Your medical diagnostics have been evaluated and approved by our partner surgeons without query.",
      unread: false
    },
    {
      id: "msg-3",
      sender: "System Automated Notification",
      subject: "Case Tracking Dossier AYX-MED-84920 Created",
      timestamp: "Oct 12, 2026, 11:20 AM",
      body: "Your file is active. Tracking reference AYX-MED-84920 has been registered under Ayax Global Ventures Ltd (RC: 9345377).",
      unread: false
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    alert("Message sent directly to your assigned Case Officer! A response will be returned within 2 hours.");
    setMessageInput("");
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
            <span className="font-black text-sm block leading-tight">MESSAGES</span>
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
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition"
            >
              <FolderCheck className="w-4 h-4" />
              <span>My Documents</span>
            </Link>

            <Link
              href="/dashboard/messages"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black bg-amber-500 text-slate-950 shadow-md transition"
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
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600">
              Direct Officer Communication
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Case Messages & Directives
            </h1>
            <p className="text-xs text-slate-500">
              Official updates from your dedicated case coordinator and overseas institutional desks.
            </p>
          </div>

          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white shadow transition flex items-center gap-2 hover:opacity-90"
            style={{ backgroundColor: "#031B4E" }}
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Emergency WhatsApp</span>
          </a>
        </div>

        {/* MESSAGES & NOTIFICATIONS STREAM */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
              Case Feed & Official Dispatch
            </h3>

            <div className="space-y-4">
              {notificationsList.map((item) => (
                <div 
                  key={item.id}
                  className={`p-5 rounded-2xl border transition space-y-2 ${
                    item.unread 
                      ? "border-amber-400 bg-amber-50/40 shadow-sm" 
                      : "border-slate-200 bg-slate-50/70"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{item.sender}</span>
                      {item.unread && (
                        <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase">
                          New Notice
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.timestamp}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800">{item.subject}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEND INQUIRY MESSAGE BOX */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Send Direct Message to Assigned Case Officer
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Have questions regarding visa timelines, medical consultations, or flight confirmations?
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3">
              <textarea
                rows={4}
                required
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message, query, or emergency request here..."
                className="w-full border border-slate-300 rounded-2xl p-4 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none bg-slate-50"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-xs shadow transition flex items-center gap-2 text-white hover:opacity-95"
                  style={{ backgroundColor: "#031B4E" }}
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Transmit Message to Officer</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </main>

    </div>
  );
}