"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowRight, UserCheck } from "lucide-react";

export default function StaffLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation na tabbatar da ma'aikaci
    setTimeout(() => {
      setLoading(false);
      router.push("/staff/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Logo & Header */}
        <div className="text-center space-y-2">
          <div 
            className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-black text-xl shadow-lg"
            style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
          >
            AG
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block">
            Ayax Global Ventures Ltd (RC: 9345377)
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            Staff & Document Portal
          </h2>
          <p className="text-xs text-slate-500">
            Authorized recruitment officers and document verification specialists only.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Corporate Staff Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="officer@ayaxglobaltravels.com"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Access Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 hover:opacity-95 text-white cursor-pointer"
            style={{ backgroundColor: "#031B4E" }}
          >
            {loading ? (
              <span>Authenticating Session...</span>
            ) : (
              <>
                <span>Sign In to Staff Workspace</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 text-center border-t border-slate-100">
          <Link href="/" className="text-xs font-bold text-slate-500 hover:text-amber-600 transition">
            ← Return to Main Website
          </Link>
        </div>

      </div>
    </div>
  );
}