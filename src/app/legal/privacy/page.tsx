"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lock, ShieldCheck, EyeOff, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-10">
        
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-200 text-slate-800">
            <Lock className="w-3.5 h-3.5 text-slate-700" />
            <span>NDPA Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Privacy &amp; Data Protection Policy</h1>
          <p className="text-xs text-slate-500">
            Data Controller: <strong>Ayax Global Ventures Ltd (RC: 9345377)</strong> | In compliance with NDPA 2023
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              1. Commitment to Data Privacy
            </h2>
            <p>
              At <strong>Ayax Travels and Tours</strong> (operated by <strong>Ayax Global Ventures Ltd</strong>), we respect your personal integrity and are committed to safeguarding your private data. This Privacy Policy details how we collect, process, store, and transmit personal identifying information in full compliance with the <strong>Nigeria Data Protection Act (NDPA 2023)</strong> and international cross-border data transfer standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              2. Information We Collect
            </h2>
            <p>To deliver legal travel, medical intake, and workforce recruitment services, we collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Identity Records:</strong> Full name, date of birth, nationality, international passport bio-data, and passport photographs.</li>
              <li><strong>Contact Coordinates:</strong> Email address, mobile telephone, residential address, and next-of-kin information.</li>
              <li><strong>Clinical Data (Medical Tourism):</strong> Medical diagnosis summaries, MRI scans, physician letters, and treatment histories submitted for hospital board review.</li>
              <li><strong>Professional Records (Manpower &amp; Work Permits):</strong> Curriculum Vitae, academic certificates, vocational licenses, and trade test certifications.</li>
              <li><strong>Corporate Employer Data:</strong> Company registration certificates, authorized representative credentials, and job specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              3. Purpose &amp; Legal Basis for Processing
            </h2>
            <p>
              We process personal data strictly under lawful consent and contractual necessity:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Hospital Clinical Reviews</span>
                <span className="text-xs text-slate-500">Transmitting patient diagnostic files to specialized partner hospitals in India &amp; Turkey for surgical acceptance.</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Embassy &amp; Visa Logistics</span>
                <span className="text-xs text-slate-500">Generating consular sponsorship files, biometric appointments, and e-Visa registrations.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              4. Data Disclosure to Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. Data is exclusively transferred to verified third parties strictly on a need-to-know basis:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Foreign partner hospitals (Apollo, Fortis, etc.) for clinical evaluation.</li>
              <li>Licensed recruitment employers and corporate sponsors in Qatar, UAE, Saudi Arabia, and Europe.</li>
              <li>Diplomatic missions, consular visa processing centers, and airlines for ticketing.</li>
              <li>Statutory law enforcement agencies when mandated by Nigerian judicial warrants.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              5. Storage, Encryption &amp; Security
            </h2>
            <p>
              All applicant files, tracking sessions, and digital records are stored within secure database environments protected by industry-grade TLS/SSL encryption and role-based staff authentication protocols. Access to clinical or personal dossier files is restricted solely to authorized intake officers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              6. Your Statutory Rights
            </h2>
            <p>
              Under NDPA guidelines, you reserve the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Request a copy of personal information held in your case file.</li>
              <li>Request rectification of incorrect biographical or educational records.</li>
              <li>Request deletion of data after the expiration of statutory consular audit periods.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              7. Privacy Officer Contact
            </h2>
            <p>
              For data protection questions, requests, or corrections, contact our legal officer:
            </p>
            <div className="p-4 rounded-2xl bg-slate-100 font-mono text-xs space-y-1 text-slate-800">
              <p>Data Privacy Officer | Ayax Global Ventures Ltd</p>
              <p>Email: ayaxglobalv@gmail.com / info@ayaxtravelsandtours.com</p>
              <p>Desk Lines: +234 704 749 7491</p>
              <p>Office: Suite C13 &amp; C14, Yam Musa Plaza, Kano State, Nigeria</p>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}