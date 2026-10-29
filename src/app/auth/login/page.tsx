"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  Eye, 
  EyeOff 
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Tsarin gano Role kai tsaye ta hanyar bayanan shiga (Auto-detect role):
    setTimeout(() => {
      setLoading(false);
      const input = identifier.trim().toLowerCase();

      // Misali: Idan email na admin ne ko ya kunshi admin
      if (input.includes("admin")) {
        router.push("/admin");
      } 
      // Idan email na staff ne
      else if (input.includes("staff") || input.includes("officer")) {
        router.push("/staff/dashboard");
      } 
      // Sauran masu nema (Applicants / Clients)
      else {
        router.push("/dashboard");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Logo & Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block">
            <div className="relative w-16 h-16 rounded-2xl mx-auto overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-200 shadow-md">
              <Image
                src="/logo.png"
                alt="Ayax Global Logo"
                width={64}
                height={64}
                className="object-contain p-1.5"
                priority
              />
            </div>
          </Link>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block">
            Ayax Global Ventures Ltd (RC: 9345377)
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            Sign In to Portal
          </h2>
          <p className="text-xs text-slate-500">
            Enter your credentials to access your secure workspace.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Email Address or Tracking Ref
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. name@example.com or AYX-WRK-51209"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Password
              </label>
              <a href="#" className="text-[10px] text-amber-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 text-white hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: "#031B4E" }}
          >
            {loading ? (
              <span>Authenticating Session...</span>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-500 space-y-2 border-t border-slate-100">
          <p>
            Don&apos;t have an account yet?{" "}
            <Link href="/auth/register" className="font-bold text-amber-600 hover:underline">
              Create Candidate Account
            </Link>
          </p>
          <Link href="/" className="block text-[11px] text-slate-400 hover:text-slate-600">
            ← Return to Ayax Travels Main Page
          </Link>
        </div>

      </div>
    </div>
  );
}