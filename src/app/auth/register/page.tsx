"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  Stethoscope, 
  GraduationCap, 
  Compass,
  CheckCircle2
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  
  // Registration Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ninNumber, setNinNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [primaryInterest, setPrimaryInterest] = useState("work-abroad");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please re-enter.");
      return;
    }

    if (!agreedToTerms) {
      setErrorMsg("Please accept the Ayax Global statutory terms and conditions.");
      return;
    }

    setLoading(true);

    // Simulation na kirkirar asusu da tura mai nema zuwa dashboard
    setTimeout(() => {
      setLoading(false);
      alert(`Account created successfully for ${fullName}! Your tracking profile has been initialized.`);
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block">
            <div 
              className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-black text-xl shadow-lg"
              style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
            >
              AT
            </div>
          </Link>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block">
            Ayax Global Ventures Ltd (RC: 9345377)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Create Applicant Account
          </h2>
          <p className="text-xs text-slate-500">
            Register to manage your overseas work permits, medical evaluations, and scholarships.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        {/* REGISTRATION FORM */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="As in International Passport"
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                WhatsApp / Phone Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 800 000 0000"
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Active Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="candidate@example.com"
                className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>
          </div>

          {/* NIN & Passport */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                National ID (NIN)
              </label>
              <input
                type="text"
                required
                value={ninNumber}
                onChange={(e) => setNinNumber(e.target.value)}
                placeholder="11-digit National Identity"
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                International Passport No.
              </label>
              <input
                type="text"
                required
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                placeholder="e.g. A12345678"
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 uppercase font-bold"
              />
            </div>
          </div>

          {/* Primary Program of Interest */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Primary Program Domain
            </label>
            <select
              value={primaryInterest}
              onChange={(e) => setPrimaryInterest(e.target.value)}
              className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
            >
              <option value="work-abroad">Work Abroad & Employment Visas (Gulf & Europe)</option>
              <option value="medical-tourism">Medical Tourism (India & Turkey Hospitals)</option>
              <option value="scholarships">Study Abroad & University Scholarships</option>
              <option value="umrah-tourism">VIP Umrah Pilgrimage & International Tourism</option>
            </select>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
                />
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 rounded text-amber-500 focus:ring-amber-400"
              />
              <span>
                I certify that all uploaded credentials are valid and agree to the milestone terms under Ayax Global Ventures Ltd (RC: 9345377).
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 text-white hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: "#031B4E" }}
          >
            {loading ? (
              <span>Initializing Candidate Profile...</span>
            ) : (
              <>
                <span>Register & Open Candidate Profile</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="pt-2 text-center text-xs text-slate-500 space-y-2 border-t border-slate-100">
          <p>
            Already have an active account?{" "}
            <Link href="/auth/login" className="font-bold text-amber-600 hover:underline">
              Sign In Here
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