"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Plane, 
  Send, 
  Sparkles, 
  Clock, 
  HeartHandshake,
  Check,
  CreditCard,
  FileText
} from "lucide-react";

export interface UmrahPackage {
  id: string;
  name: string;
  tier: "VIP Executive 5-Star" | "Premium Comfort 4-Star" | "Deluxe Economy";
  makkahHotel: string;
  makkahDistance: string;
  madinahHotel: string;
  madinahDistance: string;
  duration: string;
  transportation: string;
  meals: string;
  estimatedPriceNgn: string;
  features: string[];
  badge: string;
}

const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: "umrah-vip-5star",
    name: "Royal Haram VIP Package",
    tier: "VIP Executive 5-Star",
    makkahHotel: "Fairmont Clock Royal Tower / Swissotel Makkah",
    makkahDistance: "Direct Haram-Facing (0 Metres)",
    madinahHotel: "Dar Al Taqwa / Pullman Zamzam Madinah",
    madinahDistance: "Direct Steps to Gate 316 (0 Metres)",
    duration: "14 Days (7 Days Makkah + 7 Days Madinah)",
    transportation: "Haramain High-Speed Bullet Train (Business Class) + Private GMC Yukon",
    meals: "Daily Open Buffet Breakfast & Dinner",
    estimatedPriceNgn: "₦4,850,000",
    features: [
      "Direct Saudi Umrah e-Visa processing (Instant Issue)",
      "VIP Fast-Track Airport Arrival & Departure Concierge",
      "Historical Ziyarat in Makkah & Madinah with English & Hausa Mutawwif",
      "Complimentary 5-Litre Zamzam Water canister",
      "Dedicated 24/7 Ayax Travel Guide & Porter service"
    ],
    badge: "Most Popular VIP"
  },
  {
    id: "umrah-premium-4star",
    name: "Al-Haram Comfort Package",
    tier: "Premium Comfort 4-Star",
    makkahHotel: "Elaf Kinda / Millennium Makkah",
    makkahDistance: "Under 150 Metres from Haram Courtyard",
    madinahHotel: "Saja Al Madinah / Al Aqeeq Hotel",
    madinahDistance: "Under 100 Metres to Markaziyya Gate",
    duration: "14 Days (7 Days Makkah + 7 Days Madinah)",
    transportation: "Air-Conditioned VIP Luxury Coaster Bus & Bullet Train Option",
    meals: "Daily Continental Breakfast Included",
    estimatedPriceNgn: "₦3,650,000",
    features: [
      "Saudi Tourism/Umrah e-Visa issuance",
      "Group airport transfers directly from Jeddah / Madinah International Airport",
      "Comprehensive Ziyarat (Cave of Hira, Mount Uhud, Quba Mosque)",
      "Dedicated Group Amir & Guidance Coordination",
      "Official Zamzam Water allocation"
    ],
    badge: "Best Value"
  },
  {
    id: "umrah-economy-deluxe",
    name: "Barakah Deluxe Economy Package",
    tier: "Deluxe Economy",
    makkahHotel: "Al Kiswah Towers / Retaj Al Safwa",
    makkahDistance: "350 Metres (Free 24/7 Shuttle Bus directly to Haram)",
    madinahHotel: "Rawda Al Aqeeq / Al Mukhtara International",
    madinahDistance: "200 Metres Walk to Prophet's Mosque",
    duration: "10 Days (5 Days Makkah + 5 Days Madinah)",
    transportation: "Modern Air-Conditioned Inter-City Luxury Coaches",
    meals: "Bed & Breakfast / Room Only options",
    estimatedPriceNgn: "₦2,850,000",
    features: [
      "Standard Saudi Umrah Tourist Visa Processing",
      "Scheduled Airport Transport Service",
      "Group Ziyarat Tour in Makkah & Madinah",
      "Official Ayax Umrah Luggage Tag & Guide Book",
      "5L Zamzam Water Package"
    ],
    badge: "Budget Friendly"
  }
];

export default function UmrahPortalPage() {
  const [selectedPackageId, setSelectedPackageId] = useState("umrah-vip-5star");
  const [applicantType, setApplicantType] = useState<"individual" | "family">("individual");
  const [travelMonth, setTravelMonth] = useState("Rajab / Sha'ban 1448H");

  // Waitlist simulation
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfPilgrims, setNumberOfPilgrims] = useState("1");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const activePackage = UMRAH_PACKAGES.find(p => p.id === selectedPackageId) || UMRAH_PACKAGES[0];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert("Please fill in your name, contact phone, and email.");
      return;
    }
    setWaitlistSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO SECTION */}
        <section 
          className="relative text-white py-16 px-4 sm:px-6 lg:px-8 shadow-2xl overflow-hidden"
          style={{ backgroundColor: "#021235" }}
        >
          {/* Subtle Islamic Geometry / Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md"
              style={{ 
                backgroundColor: "rgba(245, 158, 11, 0.2)", 
                color: "#FBBF24", 
                borderColor: "rgba(245, 158, 11, 0.5)" 
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Direct Saudi Umrah GDS & Nusuk Platform Integration
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Spiritual Umrah Packages & <br />
              <span style={{ color: "#F59E0B" }}>Direct Saudi e-Visa Portal</span>
            </h1>

            <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              Book full-board Umrah packages featuring 5-Star Haram-view hotels, direct bullet train transport, and Saudi e-Visa processing according to official Ministry of Hajj & Umrah guidelines.
            </p>

            {/* COMING SOON BADGE STRIP */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-lg">
                <Clock className="w-4 h-4 text-slate-950" />
                Live Online Booking & API Gateway Launching Soon
              </span>
            </div>
          </div>
        </section>

        {/* NOTICE BANNER ABOUT API INTEGRATION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#031B4E" }}
              >
                <ShieldCheck className="w-6 h-6" style={{ color: "#F59E0B" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">
                  Saudi Ministry of Hajj & Umrah Direct GDS Connect
                </h4>
                <p className="text-xs text-slate-500">
                  We are currently integrating live B2C APIs with certified Saudi Umrah operators (Maqam & Nusuk platform) for instant visa approvals and live hotel room inventory lock.
                </p>
              </div>
            </div>

            <a
              href="#priority-reservation"
              className="px-5 py-2.5 rounded-xl font-bold text-xs shadow transition whitespace-nowrap hover:opacity-90"
              style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
            >
              Pre-Register for Next Season
            </a>
          </div>
        </section>

        {/* PACKAGE SELECTION DIRECTORY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                Tailored Pilgrim Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Curated Umrah Packages (Makkah & Madinah)
              </h2>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
              Season 1448H Packages
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {UMRAH_PACKAGES.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`bg-white rounded-3xl border-2 transition duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-md hover:shadow-xl ${
                    isSelected ? "border-amber-500 ring-2 ring-amber-400" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-100 text-slate-800">
                        {pkg.tier}
                      </span>
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 leading-snug">
                      {pkg.name}
                    </h3>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting From</span>
                      <span className="text-2xl font-black text-emerald-700">{pkg.estimatedPriceNgn}</span>
                      <span className="text-[10px] text-slate-400 block">per pilgrim (All-Inclusive)</span>
                    </div>
                  </div>

                  {/* Logistics Breakdown */}
                  <div className="p-6 space-y-3.5 text-xs text-slate-600 bg-slate-50/50 flex-1">
                    
                    {/* Makkah Hotel */}
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block text-[11px]">Makkah Accommodation:</span>
                        <span className="text-slate-800 font-semibold">{pkg.makkahHotel}</span>
                        <span className="text-[10px] text-emerald-700 block font-medium">{pkg.makkahDistance}</span>
                      </div>
                    </div>

                    {/* Madinah Hotel */}
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block text-[11px]">Madinah Accommodation:</span>
                        <span className="text-slate-800 font-semibold">{pkg.madinahHotel}</span>
                        <span className="text-[10px] text-emerald-700 block font-medium">{pkg.madinahDistance}</span>
                      </div>
                    </div>

                    {/* Duration & Transportation */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px]">
                      <div>
                        <span className="font-bold text-slate-900 block">Duration:</span>
                        <span>{pkg.duration}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Catering:</span>
                        <span>{pkg.meals}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-slate-900 block text-[11px] mb-1.5">Package Benefits:</span>
                      <ul className="space-y-1">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Selection Button */}
                  <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {isSelected ? "Selected Package" : "Click to Select"}
                    </span>
                    <a
                      href="#priority-reservation"
                      className="px-4 py-2 rounded-xl font-bold text-xs shadow transition"
                      style={{ 
                        backgroundColor: isSelected ? "#031B4E" : "#F1F5F9", 
                        color: isSelected ? "#F59E0B" : "#334155" 
                      }}
                    >
                      {isSelected ? "Book This Package" : "Select"}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* HOW TO APPLY & GDS ARCHITECTURE SECTION */}
        <section className="py-14 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Official Saudi Regulations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Umrah e-Visa & Package Booking Operates
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                According to the Saudi Ministry of Hajj & Umrah, individual pilgrims cannot issue an Umrah visa without verified BRN numbers (Booking Reference Numbers) for flights and hotels:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h4 className="font-bold text-sm text-slate-900">Package Selection</h4>
                <p className="text-xs text-slate-600">Choose your preferred tier (5-Star Haram-view, 4-Star or Economy) and travel dates.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h4 className="font-bold text-sm text-slate-900">BRN & Hotel Confirmation</h4>
                <p className="text-xs text-slate-600">Our system generates verified Saudi Ministry hotel BRNs in Makkah & Madinah.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h4 className="font-bold text-sm text-slate-900">Instant Umrah e-Visa</h4>
                <p className="text-xs text-slate-600">e-Visa is generated directly from the Ministry database and sent via email/WhatsApp.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h4 className="font-bold text-sm text-slate-900">Airport & Mutawwif Care</h4>
                <p className="text-xs text-slate-600">Meet & assist at Jeddah/Madinah airport, bullet train logistics, and religious guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRIORITY RESERVATION & WAITLIST FORM (COMING SOON GATEWAY) */}
        <section id="priority-reservation" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Form Container (2 Columns) */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 space-y-6">
              
              <div className="border-b pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1" style={{ color: "#F59E0B" }}>
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#031B4E" }}>
                      Direct Umrah Reservation Gateway
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Pre-Register Your Umrah Package
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  Selected: {activePackage.name}
                </span>
              </div>

              {waitlistSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-950">
                    Registration Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Jazakumullahu Khayran, <strong>{fullName}</strong>. Your priority reservation for <strong>{activePackage.name} ({numberOfPilgrims} Pilgrim/s)</strong> has been logged in our Umrah Desk.
                  </p>
                  <p className="text-xs text-slate-500">
                    Our Umrah Pilgrim Operations Team will contact you on WhatsApp (<strong>{phone}</strong>) with the complete flight schedules and payment proforma as soon as the live API opens.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Applicant Type</label>
                      <select
                        value={applicantType}
                        onChange={(e) => setApplicantType(e.target.value as "individual" | "family")}
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                      >
                        <option value="individual">Solo Pilgrim / Individual</option>
                        <option value="family">Family / Group Pilgrimage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Travel Month</label>
                      <select
                        value={travelMonth}
                        onChange={(e) => setTravelMonth(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                      >
                        <option>Rajab / Sha&apos;ban 1448H</option>
                        <option>Ramadan 1448H (Full Month / Last 10 Days)</option>
                        <option>Shawwal & Post-Ramadan Umrah</option>
                        <option>Year-Round Individual Custom Dates</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name</label>
                      <input
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="As shown in Passport"
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Pilgrims</label>
                      <input
                        required
                        type="number"
                        min="1"
                        value={numberOfPilgrims}
                        onChange={(e) => setNumberOfPilgrims(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="pilgrim@example.com"
                      className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1">
                    <span className="font-bold text-slate-800 block">Automatic API Booking Activation:</span>
                    <p>
                      Submitting this form places you on our direct whitelist. Once the live Saudi GDS payment gateway connects, your slot will be allocated at the locked promotional rate without seasonal price increases.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-bold py-3.5 rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2 hover:opacity-95"
                    style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
                  >
                    <Send className="w-4 h-4" /> Pre-Register & Lock Package
                  </button>

                </form>
              )}

            </div>

            {/* Sidebar Guidelines */}
            <div className="space-y-4">
              
              <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-sm text-slate-900">
                    Why Travel with Ayax Umrah?
                  </h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Official registered entity under Ayax Global Ventures Ltd (RC: 9345377).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct Haram-facing hotels without fraudulent long walking distances.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Experienced Hausa & English-speaking Islamic scholars for full religious rites.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Guaranteed official Zamzam water packaging & direct airport delivery.</span>
                  </li>
                </ul>
              </div>

              <div 
                className="p-5 rounded-3xl text-white shadow-md text-center space-y-2"
                style={{ backgroundColor: "#031B4E" }}
              >
                <HeartHandshake className="w-6 h-6 mx-auto text-amber-400" />
                <h5 className="font-bold text-xs uppercase tracking-wider">Corporate & VIP Group Umrah?</h5>
                <p className="text-[11px] text-slate-200">
                  Need customized private jet, VIP family suites, or dedicated transport for special groups?
                </p>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-1 px-4 py-2 rounded-xl text-xs font-bold transition hover:opacity-95"
                  style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
                >
                  Chat with Umrah Director
                </a>
              </div>

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}