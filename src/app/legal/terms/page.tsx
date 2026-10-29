"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Scale, FileText, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-10">
        
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-200 text-slate-800">
            <Scale className="w-3.5 h-3.5 text-slate-700" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Terms and Conditions of Service</h1>
          <p className="text-xs text-slate-500">
            Governing entity: <strong>Ayax Global Ventures Ltd (RC: 9345377)</strong> | Last updated: October 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              1. Acceptance of Terms &amp; Corporate Status
            </h2>
            <p>
              By accessing, browsing, submitting documents, or registering for any service provided by <strong>Ayax Travels and Tours</strong> (operated by <strong>Ayax Global Ventures Ltd</strong>, RC: 9345377, TIN: 2620247919304), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions. If you do not accept these terms, you must discontinue the use of this platform immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              2. Scope of Services &amp; Agency Representation
            </h2>
            <p>
              Ayax Global Ventures Ltd operates as an accredited facilitator, travel concierge, and workforce procurement agency for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Facilitating clinical referrals, medical evaluation reviews, and hospital appointment bookings in India and Turkey.</li>
              <li>Pre-screening, testing, packaging, and submitting candidate dossiers to verified employers and recruitment vendors across the GCC and Europe.</li>
              <li>Academic counseling, university admissions processing, and institutional scholarship applications.</li>
              <li>Saudi Umrah e-Visa logistics, hotel accommodation bookings, and Haramain express rail transfers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              3. Consular &amp; Sovereign Immigration Disclaimers
            </h2>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Statutory Sovereign Discretion</span>
              </div>
              <p className="text-xs leading-relaxed">
                Ayax Travels and Tours is an independent consultancy and does not possess diplomatic authority to grant visas. The power to approve or reject any visa, work permit, resident permit, or entry clearance belongs exclusively to foreign embassies, consulates, and host governments (e.g., Kingdom of Saudi Arabia, Qatar, UAE, Poland, India). Ayax Global Ventures Ltd cannot guarantee visa issuance and is not liable for sovereign sovereign visa refusals.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              4. Anti-Fraud Hospital Direct Billing Policy
            </h2>
            <p>
              In accordance with our strict anti-fraud charter, medical tourism treatment costs and surgical bills must be settled directly by the patient or their immediate family at the official hospital billing desk upon hospital check-in abroad. Ayax Global Ventures Ltd does not solicit nor accept surgical fee custody into local third-party accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              5. Candidate Responsibilities &amp; Document Authenticity
            </h2>
            <p>
              Applicants and corporate clients warrant that all data, certificates, international passport records, Police Character Clearances (PCC), and medical history submitted are authentic, unaltered, and valid. Any submission of counterfeit or altered credentials will lead to immediate dossier termination, forfeiture of administrative fees, and reporting to legal law enforcement authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              6. Administrative Fees &amp; Refund Policy
            </h2>
            <p>
              All administrative screening fees, medical file transmission charges, and intake registration fees cover professional vetting, CV standardization, consular file packaging, and international document couriers. Administrative costs incurred during file processing are non-refundable once background investigations or official filings have commenced.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wide">
              7. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be interpreted, governed, and construed in accordance with the laws of the Federal Republic of Nigeria, specifically under the provisions of the Companies and Allied Matters Act (CAMA 2020). Any dispute arising between parties shall first undergo amicable arbitration in Kano State or Adamawa State before seeking redress in a competent court of law.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}