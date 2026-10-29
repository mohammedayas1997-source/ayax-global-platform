"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  Users, 
  MapPin, 
  DollarSign, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Send, 
  FileCheck, 
  Globe2,
  Edit3
} from "lucide-react";

export default function ManpowerRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [selectedCountry, setSelectedCountry] = useState("Qatar");
  const [customCountry, setCustomCountry] = useState("");
  
  const [selectedJobCategory, setSelectedJobCategory] = useState("Logistics & Heavy Truck Drivers (GCC/Trailer)");
  const [customJobCategory, setCustomJobCategory] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    headcount: "10",
    salaryOffered: "",
    benefits: "Accommodation + Medical + Transport",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const finalCountry = selectedCountry === "OTHER" ? customCountry.trim() : selectedCountry;
    const finalJobCategory = selectedJobCategory === "OTHER" ? customJobCategory.trim() : selectedJobCategory;

    const newRequest = {
      id: "REQ-" + Math.floor(100000 + Math.random() * 900000),
      ...formData,
      country: finalCountry || "Not Specified",
      jobCategory: finalJobCategory || "General Workforce",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "NEW_PENDING"
    };

    const existing = JSON.parse(localStorage.getItem("ayax_manpower_requests") || "[]");
    localStorage.setItem("ayax_manpower_requests", JSON.stringify([newRequest, ...existing]));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            Corporate Manpower Procurement
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Hire Verified Global Workforce
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Ayax Global Ventures Ltd (RC: 9345377) sources, vets, and deploys skilled tradesmen, drivers, healthcare, and engineering personnel.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-200 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Manpower Request Transmitted!</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Your recruitment quota request has been forwarded directly to our Corporate Desk. Our international recruitment officer will contact your company within 24 hours.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition cursor-pointer"
              >
                Submit Another Request
              </button>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl font-bold text-xs text-white shadow transition"
                style={{ backgroundColor: "#031B4E" }}
              >
                Return Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-6">
            
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                1. Corporate Identity &amp; Employer Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Company / Organization Name
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder="e.g. Al-Mansoor Contracting LLC"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Authorized Contact Representative
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  placeholder="e.g. Engr. Faisal Al-Kuwari (HR Director)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="recruitment@company.com"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp / Direct Phone Line
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+974 5500 0000"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-slate-100 pb-4 pt-2">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                2. Workforce Quota, Country &amp; Trade Scope
              </h3>
            </div>

            {/* Destination Country Selection with Categorized Groups & Custom Input */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Destination Deployment Country
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                >
                  <optgroup label="── 1. Arab Gulf Countries (GCC & Middle East) ──">
                    <option value="Qatar">Qatar</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United Arab Emirates (Dubai / Abu Dhabi)">United Arab Emirates (Dubai / Abu Dhabi)</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Oman">Oman</option>
                    <option value="Bahrain">Bahrain</option>
                  </optgroup>

                  <optgroup label="── 2. European Nations (EU & Schengen) ──">
                    <option value="Poland">Poland</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Romania">Romania</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Malta">Malta</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                  </optgroup>

                  <optgroup label="── 3. Asian & Pacific Economies ──">
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Japan">Japan</option>
                    <option value="Turkey">Turkey</option>
                  </optgroup>

                  <optgroup label="── 4. North America & Other Hubs ──">
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Nigeria (Local Corporate Quota)">Nigeria (Local Corporate Quota)</option>
                  </optgroup>

                  <optgroup label="── 5. Specify Manually ──">
                    <option value="OTHER">Other Country (Type Manually)</option>
                  </optgroup>
                </select>

                {selectedCountry === "OTHER" && (
                  <div className="relative">
                    <Edit3 className="w-4 h-4 text-amber-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={customCountry}
                      onChange={(e) => setCustomCountry(e.target.value)}
                      placeholder="Type country name here..."
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-amber-400 bg-amber-50/50 outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-900"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Trade / Job Category with Categorized Groups & Custom Input */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Trade / Skill Specialization
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={selectedJobCategory}
                  onChange={(e) => setSelectedJobCategory(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                >
                  <optgroup label="── Logistics, Transport & Heavy Machinery ──">
                    <option value="Logistics & Heavy Truck Drivers (GCC/Trailer)">Heavy Truck Drivers (GCC / Trailer / Trailer 40ft)</option>
                    <option value="Light Vehicle & Taxi Drivers">Light Vehicle &amp; Corporate Taxi Drivers</option>
                    <option value="Forklift & Crane Operators">Forklift &amp; Heavy Crane Operators</option>
                    <option value="Delivery Riders & Dispatch Staff">Delivery Riders &amp; Dispatch Personnel</option>
                  </optgroup>

                  <optgroup label="── Construction, Engineering & Technical Trades ──">
                    <option value="Civil Tradesmen (Masons, Carpenters, Plumbers, Steel Fixers)">Civil Tradesmen (Masons, Carpenters, Plumbers, Steel Fixers)</option>
                    <option value="Certified Welders & Fabricators (6G/TIG/MIG)">Certified Welders &amp; Fabricators (6G / TIG / MIG)</option>
                    <option value="Industrial Electricians & MEP Technicians">Industrial Electricians &amp; MEP Technicians</option>
                    <option value="HVAC & AC Technicians">HVAC &amp; Central AC Technicians</option>
                    <option value="Civil & Mechanical Site Engineers">Civil &amp; Mechanical Site Engineers</option>
                  </optgroup>

                  <optgroup label="── Security & Facility Protection ──">
                    <option value="Corporate Security Guards & Watchmen">Corporate Security Guards &amp; Watchmen</option>
                    <option value="CCTV & Electronic Surveillance Technicians">CCTV &amp; Surveillance Control Operators</option>
                  </optgroup>

                  <optgroup label="── Healthcare, Nursing & Medical Escort ──">
                    <option value="Registered General Nurses (RN)">Registered General Nurses (RN)</option>
                    <option value="Healthcare Assistants & Caregivers">Healthcare Assistants &amp; Geriatric Caregivers</option>
                    <option value="Laboratory Technicians & Pharmacists">Laboratory Technicians &amp; Pharmacists</option>
                  </optgroup>

                  <optgroup label="── Hospitality, Culinary & Facility Management ──">
                    <option value="Hotel Waiters, Chefs & Catering Crew">Hotel Waiters, Chefs &amp; Catering Crew</option>
                    <option value="Commercial Housekeeping & Cleaners">Commercial Housekeeping &amp; Industrial Cleaners</option>
                    <option value="Facility Maintenance Technicians">Facility Maintenance Technicians</option>
                  </optgroup>

                  <optgroup label="── Factory, Manufacturing & Warehousing ──">
                    <option value="Factory Assembly Line Workers">Factory Assembly Line Workers</option>
                    <option value="Warehouse Packers & Loading Staff">Warehouse Packers &amp; Material Handlers</option>
                    <option value="Agricultural, Farm & Greenhouse Operators">Agricultural, Farm &amp; Greenhouse Workers</option>
                  </optgroup>

                  <optgroup label="── Corporate, IT & Administration ──">
                    <option value="Office Clerks, Accountants & Data Entry">Office Clerks, Accountants &amp; Data Entry</option>
                    <option value="IT Support Specialists & Developers">IT Support Specialists &amp; Developers</option>
                  </optgroup>

                  <optgroup label="── Custom Specialization ──">
                    <option value="OTHER">Other Role / Trade (Type Manually)</option>
                  </optgroup>
                </select>

                {selectedJobCategory === "OTHER" && (
                  <div className="relative">
                    <Edit3 className="w-4 h-4 text-amber-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={customJobCategory}
                      onChange={(e) => setCustomJobCategory(e.target.value)}
                      placeholder="Type custom job title here..."
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-amber-400 bg-amber-50/50 outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-900"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Numbers, Salary and Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Required Headcount (Workers)
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.headcount}
                  onChange={(e) => setFormData({...formData, headcount: e.target.value})}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Proposed Monthly Salary
                </label>
                <input
                  type="text"
                  required
                  value={formData.salaryOffered}
                  onChange={(e) => setFormData({...formData, salaryOffered: e.target.value})}
                  placeholder="e.g. 2,200 QAR or €950/mo"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Provided Employer Benefits
                </label>
                <input
                  type="text"
                  required
                  value={formData.benefits}
                  onChange={(e) => setFormData({...formData, benefits: e.target.value})}
                  placeholder="e.g. Free Visa + Accommodation + Flight"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Additional Requirements or Job Specification Notes
              </label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                placeholder="Specify required experience, trade licenses (e.g., GCC driver license, Nursing board certificate), preferred age bracket, or urgency level..."
                className="w-full p-3 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 text-white hover:opacity-95 cursor-pointer"
              style={{ backgroundColor: "#031B4E" }}
            >
              {loading ? (
                <span>Transmitting Order to Ayax Manpower Desk...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Corporate Manpower Demand</span>
                </>
              )}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}