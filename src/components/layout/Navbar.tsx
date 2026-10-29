"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  LogIn, 
  Compass, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  ChevronDown,
  LayoutDashboard,
  Users
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#021235]/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Ayax Travels & Tours Logo"
                width={54}
                height={54}
                className="object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] group-hover:drop-shadow-[0_0_18px_rgba(245,158,11,0.6)]"
                priority
              />
            </div>
            <div>
              <span className="font-black text-lg sm:text-xl tracking-tight block text-white leading-tight drop-shadow-sm">
                AYAX TRAVELS
              </span>
              <span className="text-[10.5px] font-extrabold text-amber-400 block tracking-widest uppercase">
                &amp; TOURS (RC: 9345377)
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wide">
            <Link 
              href="/" 
              className="text-slate-200 hover:text-amber-400 transition"
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition cursor-pointer"
              >
                <span>Services &amp; Portals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
              </button>

              {servicesDropdown && (
                <div 
                  onMouseLeave={() => setServicesDropdown(false)}
                  className="absolute top-full left-0 mt-3 w-64 bg-[#031B4E] border border-white/15 rounded-2xl shadow-2xl p-2.5 space-y-1 z-50"
                >
                  <Link
                    href="/portals/medical-tourism/apply"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-amber-400 transition"
                  >
                    <Stethoscope className="w-4 h-4 text-blue-400" />
                    <span>Medical Tourism</span>
                  </Link>

                  <Link
                    href="/portals/manpower-request"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-amber-400 transition"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Employer Manpower Request</span>
                  </Link>

                  <Link
                    href="/portals/work-abroad/apply"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-amber-400 transition"
                  >
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span>Work Abroad Permits</span>
                  </Link>

                  <Link
                    href="/portals/study-abroad/apply"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-amber-400 transition"
                  >
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <span>University Scholarships</span>
                  </Link>

                  <Link
                    href="/portals/umrah"
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-amber-400 transition"
                  >
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>VIP Umrah &amp; Tourism</span>
                  </Link>
                </div>
              )}
            </div>

            {/* TRACK APPLICATION -> AUTH LOGIN */}
            <Link 
              href="/auth/login"
              className="text-slate-200 hover:text-amber-400 transition flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
              <span>Track Application</span>
            </Link>
          </nav>

          {/* RIGHT ACTION: LOGIN PORTAL BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="px-5 py-2.5 rounded-xl font-black text-xs shadow-md transition flex items-center gap-2 hover:opacity-95"
              style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
            >
              <LogIn className="w-4 h-4 text-[#031B4E]" />
              <span>Portal Login</span>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/auth/login"
              className="px-3.5 py-2 rounded-xl font-bold text-xs shadow flex items-center gap-1.5"
              style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#021235] border-t border-white/10 px-4 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              Home
            </Link>

            <Link
              href="/portals/medical-tourism/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span>Medical Tourism</span>
            </Link>

            <Link
              href="/portals/manpower-request"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Employer Manpower Request</span>
            </Link>

            <Link
              href="/portals/work-abroad/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Work Abroad</span>
            </Link>

            <Link
              href="/portals/study-abroad/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Scholarships</span>
            </Link>

            <Link
              href="/portals/umrah"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-200"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>VIP Umrah Packages</span>
            </Link>

            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/10 text-amber-400"
            >
              <LayoutDashboard className="w-4 h-4 text-amber-400" />
              <span>Track Application Status</span>
            </Link>

            <div className="pt-3 border-t border-white/10">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow"
                style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
              >
                <LogIn className="w-4 h-4" />
                <span>Portal Login</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}