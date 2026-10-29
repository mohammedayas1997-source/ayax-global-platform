"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Plane, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  Compass, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Send, 
  Building, 
  Lock, 
  Moon,
  Award,
  HeartPulse,
  Users
} from "lucide-react";

export default function Home() {
  const handleComingSoon = (featureName: string) => {
    alert(`COMING SOON: The ${featureName} is currently undergoing direct Saudi/GDS API integration and will launch shortly.`);
  };

  const heroBackgrounds = [
    {
      title: "Holy Kaaba & Madinah Al-Munawwarah VIP Umrah",
      subtitle: "Luxury 5-Star Haram-view suites, Haramain bullet train logistics, and direct Saudi e-Visa assistance.",
      badge: "Spiritual Umrah & Pilgrimage",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&auto=format&fit=crop&q=80"
    },
    {
      title: "Premier Medical Tourism & Super-Specialty Healthcare",
      subtitle: "Direct partnership with Apollo, Fortis & Max Hospitals in India and Turkey.",
      badge: "India & Turkey Hospital Escorts",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&auto=format&fit=crop&q=80"
    },
    {
      title: "Legitimate International Work Visa Sponsorships",
      subtitle: "Verified employment contracts across Dubai, Qatar, Saudi Arabia, Poland & Lithuania.",
      badge: "Gulf & European Work Pathways",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&auto=format&fit=crop&q=80"
    },
    {
      title: "Global University Scholarships & Admissions",
      subtitle: "Tuition waiver grants and student admissions in Turkey, Cyprus, Malaysia, and the UK.",
      badge: "Study Abroad & 100% Tuition Waivers",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroBackgrounds.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroBackgrounds.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
  };

  const saudiUmrahPackages = [
    {
      title: "Abraj Al-Bait & Kaaba Front Suites",
      location: "Makkah Al-Mukarramah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&auto=format&fit=crop&q=80",
      features: "Direct Haram-facing views from the Makkah Clock Tower, Fairmont luxury floor & private lift to the Mataf.",
      badge: "5-Star Clock Tower VIP"
    },
    {
      title: "Al-Masjid An-Nabawi & Rawdah Stays",
      location: "Madinah Al-Munawwarah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop&q=80",
      features: "Steps away from the Green Dome and King Fahd Courtyard. Oberoi & Dar Al Taqwa premium accommodation.",
      badge: "Central Haram Front"
    },
    {
      title: "Haramain High-Speed Bullet Train",
      location: "Makkah ⇄ Madinah Rail Link",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
      features: "300 km/h first-class intercity transit between King Abdulaziz Int'l, Makkah, and Madinah terminals.",
      badge: "Express Intercity Logistics"
    },
    {
      title: "Masjid Quba & Historic Ziyarat Sites",
      location: "Historic Madinah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop&q=80",
      features: "Guided private transport to Masjid Quba, Mount Uhud, Seven Mosques & Date Gardens of Al-Madinah.",
      badge: "Prophetic Heritage Ziyarat"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO SECTION WITH PERMANENT STANDBY BUTTONS */}
        <section className="relative text-white min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden shadow-2xl">
          {heroBackgrounds.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div 
                className="absolute inset-0"
                style={{ 
                  background: "linear-gradient(to right, rgba(2, 18, 53, 0.96) 0%, rgba(2, 18, 53, 0.88) 55%, rgba(3, 27, 78, 0.70) 100%)" 
                }}
              />
            </div>
          ))}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 w-full">
            <div className="max-w-3xl space-y-6">
              
              <div 
                className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md" 
                style={{ backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#FBBF24", borderColor: "rgba(245, 158, 11, 0.5)" }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                AYAX GLOBAL VENTURES LTD (RC: 9345377)
              </div>

              <div className="space-y-2">
                <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400">
                  {heroBackgrounds[currentSlide].badge}
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                  Premier Global Travel &amp; <br />
                  <span style={{ color: "#F59E0B" }}>
                    International Opportunities
                  </span>
                </h1>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl pt-1">
                  Specialized medical tourism to premier Indian hospitals, verified work visa sponsorships, overseas university scholarships, luxury holidays, and VIP Umrah packages.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Select Action Portal (Direct Access):
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/portals/medical-tourism/apply"
                    className="font-extrabold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 hover:opacity-95 text-xs sm:text-sm"
                    style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
                  >
                    <Stethoscope className="w-4 h-4" /> Medical Tourism
                  </Link>

                  {/* MANPOWER HIRE ACTION */}
                  <Link
                    href="/portals/manpower-request"
                    className="font-extrabold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 hover:opacity-95 text-xs sm:text-sm bg-white text-slate-950"
                  >
                    <Users className="w-4 h-4 text-blue-700" /> Hire Manpower
                  </Link>

                  <Link
                    href="/portals/work-abroad/apply"
                    className="border text-white font-bold px-5 py-3 rounded-xl transition flex items-center gap-2 hover:bg-white/10 backdrop-blur text-xs sm:text-sm"
                    style={{ borderColor: "rgba(255, 255, 255, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <Briefcase className="w-4 h-4 text-amber-400" /> Work Abroad
                  </Link>

                  <Link
                    href="/portals/study-abroad/apply"
                    className="border text-white font-bold px-5 py-3 rounded-xl transition flex items-center gap-2 hover:bg-white/10 backdrop-blur text-xs sm:text-sm"
                    style={{ borderColor: "rgba(255, 255, 255, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <GraduationCap className="w-4 h-4 text-amber-400" /> Scholarships
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleComingSoon("Umrah e-Visa & Package Booking Portal")}
                    className="border text-slate-200 font-bold px-4 py-3 rounded-xl transition flex items-center gap-1.5 backdrop-blur text-xs cursor-not-allowed opacity-90 hover:bg-white/5"
                    style={{ borderColor: "rgba(255, 255, 255, 0.25)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <Moon className="w-3.5 h-3.5 text-amber-400" /> Umrah (Coming Soon)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleComingSoon("Tourism Visa Application Desk")}
                    className="border text-slate-200 font-bold px-4 py-3 rounded-xl transition flex items-center gap-1.5 backdrop-blur text-xs cursor-not-allowed opacity-90 hover:bg-white/5"
                    style={{ borderColor: "rgba(255, 255, 255, 0.25)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-400" /> Tourist Visa (Coming Soon)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleComingSoon("Online Flight Ticket Booking Engine")}
                    className="border text-slate-200 font-bold px-4 py-3 rounded-xl transition flex items-center gap-1.5 backdrop-blur text-xs cursor-not-allowed opacity-90 hover:bg-white/5"
                    style={{ borderColor: "rgba(255, 255, 255, 0.25)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <Plane className="w-3.5 h-3.5 text-amber-400" /> Flights (Coming Soon)
                  </button>
                </div>
              </div>

            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white transition border border-white/20"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white transition border border-white/20"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {heroBackgrounds.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </section>

       {/* 6 CORE PILLARS SECTION (INCLUDING MANPOWER RECRUITMENT) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            
            {/* 1. Medical Tourism - LIVE */}
            <Link 
              href="/portals/medical-tourism/apply" 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-500 hover:shadow-2xl transition duration-300 group flex flex-col justify-between"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/90 backdrop-blur text-white flex items-center justify-center shadow">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Medical Tourism
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Apollo, Fortis &amp; Max Hospitals with medical visa assistance.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-blue-700 block pt-2">
                  Apply for Intake →
                </span>
              </div>
            </Link>

            {/* 2. Work Abroad - LIVE */}
            <Link 
              href="/portals/work-abroad/apply" 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-500 hover:shadow-2xl transition duration-300 group flex flex-col justify-between"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/90 backdrop-blur text-white flex items-center justify-center shadow">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Work Abroad
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Verified work permits for the Gulf (Dubai, Qatar) &amp; Europe.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 block pt-2">
                  View Job Openings →
                </span>
              </div>
            </Link>

            {/* 3. Manpower Supply - LIVE (SABO) */}
            <Link 
              href="/portals/manpower-request" 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-500 hover:shadow-2xl transition duration-300 group flex flex-col justify-between"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/90 backdrop-blur text-slate-950 flex items-center justify-center shadow">
                    <Users className="w-4 h-4 text-slate-950" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Manpower Supply
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Corporate recruitment &amp; deployment for GCC &amp; European employers.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-amber-700 block pt-2">
                  Request Quota →
                </span>
              </div>
            </Link>

            {/* 4. Scholarships - LIVE */}
            <Link 
              href="/portals/study-abroad/apply" 
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-500 hover:shadow-2xl transition duration-300 group flex flex-col justify-between"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-600/90 backdrop-blur text-white flex items-center justify-center shadow">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Scholarships
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Direct admissions and tuition grants in Turkey, Cyprus &amp; UK.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-purple-700 block pt-2">
                  Apply for Grants →
                </span>
              </div>
            </Link>

            {/* 5. Tourism Visas - LOCKED (COMING SOON) */}
            <div 
              onClick={() => handleComingSoon("Tourism Visa Portal")}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-400 transition duration-300 group flex flex-col justify-between cursor-not-allowed opacity-95"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-2.5 right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow">
                  COMING SOON
                </span>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/90 backdrop-blur text-slate-950 flex items-center justify-center shadow">
                    <Compass className="w-4 h-4 text-slate-950" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Tourism Visas
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Embassy appointments, hotel bookings &amp; visa packaging.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 block pt-2">
                  Saudi/GDS Setup
                </span>
              </div>
            </div>

            {/* 6. Flight Bookings - LOCKED (COMING SOON) */}
            <div 
              onClick={() => handleComingSoon("Flight Booking Engine")}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-amber-400 transition duration-300 group flex flex-col justify-between cursor-not-allowed opacity-95"
            >
              <div 
                className="h-32 w-full relative bg-slate-900 overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-2.5 right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow">
                  COMING SOON
                </span>
                <div className="absolute bottom-2.5 left-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-600/90 backdrop-blur text-white flex items-center justify-center shadow">
                    <Plane className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-amber-600 transition">
                    Flight Bookings
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    Direct flight ticketing engine across global airlines.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 block pt-2">
                  GDS Amadeus Sync
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SHASHIN ASALIN GINE-GINEN SAUDIYYA & UMRAH PACKAGES */}
        <section id="tourism-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-900">
                Direct Saudi Arabia Umrah Logistics &amp; Masauki
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                Makkah &amp; Madinah VIP Umrah Packages
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Luxury 5-Star Haram-view towers, Rawdah proximity suites, and Haramain express bullet train transfers.
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => handleComingSoon("Saudi Umrah Package Booking")}
              className="px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center gap-2 hover:opacity-90 cursor-not-allowed"
              style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
            >
              <Lock className="w-3.5 h-3.5" /> Book Umrah Package (Coming Soon)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saudiUmrahPackages.map((dest, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
              >
                <div 
                  className="h-56 relative bg-slate-900 overflow-hidden"
                  style={{
                    backgroundImage: `url('${dest.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-900 backdrop-blur shadow">
                    {dest.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {dest.location}
                    </span>
                    <h4 className="text-base font-bold leading-snug group-hover:text-amber-300 transition">
                      {dest.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dest.features}
                  </p>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500">Saudi Protocol</span>
                    <button
                      type="button"
                      onClick={() => handleComingSoon(dest.title)}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-not-allowed"
                    >
                      <Lock className="w-3 h-3" /> Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOURISM VISA APPLICATION (LOCKED COMING SOON SECTION) */}
        <section id="tourism-visa" className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="max-w-3xl space-y-5 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                  <Clock className="w-3.5 h-3.5" /> Coming Soon: Q4 Deployment
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Global Tourism Visa Application &amp; Embassy Assistance
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  For tourism visas, foreign embassies require physical biometric appointments and thorough document authentication. Ayax Travels and Tours handles your complete dossier: <strong>verified flight reservations, hotel bookings, official itinerary design, and embassy interview appointment booking</strong> (Schengen, UK, Dubai, Turkey, and USA)[cite: 9, 13].
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur">
                    <Building className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="font-bold text-white block">Embassy Appointments</span>
                    <span className="text-slate-300 text-[11px]">Priority biometric scheduling</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="font-bold text-white block">Document Verification</span>
                    <span className="text-slate-300 text-[11px]">Financial proof &amp; travel insurance</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur">
                    <Plane className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="font-bold text-white block">Flight &amp; Hotel Proof</span>
                    <span className="text-slate-300 text-[11px]">Confirmed verifiable reservations</span>
                  </div>
                </div>

                <div className="pt-4 max-w-lg">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Join the Priority Tourist Visa Waitlist (Get Notified First)
                  </label>
                  <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! You have been added to our VIP Tourist Visa priority list."); }} className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      className="px-4 py-3 rounded-xl text-xs bg-white text-slate-900 flex-1 outline-none font-medium focus:ring-2 focus:ring-amber-400"
                    />
                    <button 
                      type="submit"
                      className="px-6 py-3 rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-1.5 hover:opacity-90"
                      style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
                    >
                      <Send className="w-3.5 h-3.5" /> Join Waitlist
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLIGHT BOOKING ENGINE (LOCKED COMING SOON SECTION) */}
        <section id="flight-booking" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                  Online Flight Ticket Booking Engine
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Book Domestic &amp; International Flights
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Coming Soon
              </span>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 opacity-70 cursor-not-allowed">
              <div className="flex gap-4 text-xs font-bold text-slate-700">
                <span className="text-amber-600 border-b-2 border-amber-500 pb-1 cursor-not-allowed">Round Trip</span>
                <span className="text-slate-400 cursor-not-allowed">One Way</span>
                <span className="text-slate-400 cursor-not-allowed">Multi-City</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">From</span>
                  <span className="text-sm font-bold text-slate-800">Mallam Aminu Kano (KAN)</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">To</span>
                  <span className="text-sm font-bold text-slate-800">King Abdulaziz Int&apos;l (JED)</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Departure Date</span>
                  <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" /> Nov 15, 2026
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Return Date</span>
                  <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" /> Nov 30, 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500">
                * We are currently finalizing API integrations with Amadeus &amp; Sabre GDS for real-time live ticket issuances. Direct automated bookings will activate upon deployment.
              </p>
              <button
                type="button"
                onClick={() => handleComingSoon("Flight Ticket Reservation Engine")}
                className="px-6 py-3 rounded-xl font-bold text-xs shadow transition whitespace-nowrap cursor-not-allowed opacity-90"
                style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
              >
                Flight Booking (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        {/* PROVEN TRACK RECORD & STATS */}
        <section className="py-24 relative overflow-hidden bg-[#021235] text-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div 
                className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md" 
                style={{ 
                  backgroundColor: "rgba(245, 158, 11, 0.15)", 
                  color: "#FBBF24", 
                  borderColor: "rgba(245, 158, 11, 0.4)" 
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Milestones &amp; Verified Institutional Impact</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Verified Track Record of <span className="text-amber-400">Success</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Direct hospital accreditations, verified sovereign work permit quotas, and transparent institutional processing under RC: 9345377.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                    <HeartPulse className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      250+
                    </h3>
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mt-2">
                      Successful Medical Travels
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Advanced cardiac bypass, oncology, and kidney transplants facilitated across Apollo, Fortis &amp; Medipol hospitals.
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Clinical Clearance</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Escorted
                  </span>
                </div>
              </div>

              <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                    <Briefcase className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      600+
                    </h3>
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mt-2">
                      Work Visas Secured
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Legitimate employment quotas across Qatar, UAE, Saudi Arabia, Poland, and Lithuania with verified work contracts.
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Employer Vetting</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Quota
                  </span>
                </div>
              </div>

              <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                    <GraduationCap className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      350+
                    </h3>
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mt-2">
                      Scholarship Grants
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tuition waivers (50% to 100%) and direct university admissions across North Cyprus, Turkey, and Malaysia.
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Academic Grants</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Entry
                  </span>
                </div>
              </div>

              <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                    <Award className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                      98.5%
                    </h3>
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mt-2">
                      Client Satisfaction
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Strict legal verification, zero fake job promises, and direct institutional settlement without middleman markups.
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Statutory Compliance</span>
                  <span className="text-amber-400 font-mono">RC: 9345377</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div 
            className="text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl" 
            style={{ backgroundColor: "#031B4E" }}
          >
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F59E0B" }}>
                Why Choose Ayax Travels and Tours?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                Global Network, Direct Hospital Partnerships, and Verified Placement
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>Direct affiliation with top Indian multi-specialty hospitals without intermediaries.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>Legitimate employer sponsorships and transparent employment contract verifications.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>24/7 dedicated assistance for emergency visas, airport reception, and local support.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>Transparent milestone-based fee structures and secure payment processing.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}