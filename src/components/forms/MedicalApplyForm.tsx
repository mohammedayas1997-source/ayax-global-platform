"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle2, Stethoscope } from "lucide-react";

export default function MedicalApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-lg mx-auto border border-green-100">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
          Inquiry Submitted Successfully!
        </h3>
        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
          Our international medical coordinators at <strong>Ayax Global Travels</strong> and our overseas hospital partners will evaluate your diagnostic records. We will contact you via email and WhatsApp within 24 hours to review hospital options and medical visa requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 space-y-5">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1" style={{ color: "#F59E0B" }}>
          <Stethoscope className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#031B4E" }}>
            Medical Tourism Assistance Desk
          </span>
        </div>
        <h2 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
          Overseas Medical Treatment Application
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Complete the patient details and residential location to obtain official hospital invitations and medical visa documentation.
        </p>
      </div>

      {/* Patient Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Full Name</label>
          <input 
            required 
            type="text" 
            placeholder="As shown on International Passport" 
            className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number</label>
          <input 
            required 
            type="tel" 
            placeholder="+234 800 000 0000" 
            className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
      </div>

      {/* Email, Age & Gender */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
          <input 
            required 
            type="email" 
            placeholder="patient@example.com" 
            className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Age</label>
          <input 
            required 
            type="number" 
            placeholder="e.g. 48" 
            className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
          <select className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>

      {/* Target Destination Country */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Target Treatment Destination</label>
        <select className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none font-semibold text-slate-800">
          <option value="India">India (Apollo, Fortis, Max Healthcare, Medanta)</option>
          <option value="Thailand">Thailand (Bangkok & Specialist Centers)</option>
          <option value="Turkey">Turkey (Istanbul Specialist Centers)</option>
          <option value="UAE">United Arab Emirates (Dubai & Abu Dhabi Hospitals)</option>
        </select>
      </div>

      {/* Residential Location Details */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
          Patient Residential & Contact Information
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Country of Residence</label>
            <input 
              required 
              type="text" 
              defaultValue="Nigeria"
              placeholder="e.g. Nigeria" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">State / Province</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Kano, Abuja, Lagos" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Local Government Area (LGA) / City</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Nassarawa, Ikeja, Municipal" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Street Address / House Description</label>
          <input 
            required 
            type="text" 
            placeholder="Plot or House number, Street name, District" 
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
      </div>

      {/* Condition & Escort Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">Medical Condition / Specialty</label>
          <input 
            required 
            type="text" 
            placeholder="e.g. Cardiology, Oncology, Spine Surgery, Kidney Transplant" 
            className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Medical Escorts / Attendants</label>
          <select className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none">
            <option>1 Attendant</option>
            <option>2 Attendants</option>
            <option>3 or More Attendants</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Medical History & Physician Notes</label>
        <textarea 
          rows={3} 
          placeholder="Summarize the patient's symptoms, prior treatments, or local physician recommendations..." 
          className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
          required
        ></textarea>
      </div>

      {/* Document Upload */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Upload Diagnostic Reports (PDF or Images)</label>
        <div 
          className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-50 hover:bg-slate-100 transition" 
          style={{ borderColor: "#F59E0B" }}
        >
          <UploadCloud className="w-10 h-10 mb-2" style={{ color: "#F59E0B" }} />
          <p className="text-sm font-semibold text-slate-700">Click or drag & drop reports here</p>
          <p className="text-xs text-slate-400 mt-1">MRI, CT Scans, Biopsies, or Lab Results (Max: 15MB)</p>
          <input type="file" className="hidden" id="report-file" />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full font-bold py-3.5 rounded-lg shadow-lg transition text-base"
        style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
      >
        {loading ? "Submitting Inquiry..." : "Submit Medical Inquiry"}
      </button>
    </form>
  );
}