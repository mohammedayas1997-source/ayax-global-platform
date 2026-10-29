import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MedicalApplyForm from "@/components/forms/MedicalApplyForm";
import { ShieldCheck, Award, HeartPulse } from "lucide-react";

export default function MedicalApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-ayax-gold/10 text-ayax-navy border border-ayax-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Ayax Medical Tourism Desk
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ayax-navy mt-3">
              World-Class Healthcare & Medical Travel
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Fast-track hospital consultations, medical visa invitations, and patient escort arrangements in India, Egypt, and Turkey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <MedicalApplyForm />
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <HeartPulse className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">Premier Partner Hospitals</h4>
                <p className="text-xs text-gray-600 mt-1">Direct tie-ups with Apollo Hospitals, Fortis, Max Super Speciality, and Medanta.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">End-to-End Visa & Attendant Support</h4>
                <p className="text-xs text-gray-600 mt-1">From hospital invitation letters to medical attendant visas, flight bookings, and local language translators.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <Award className="w-8 h-8 text-ayax-gold mb-2" />
                <h4 className="font-bold text-ayax-navy">Transparent Cost Estimates</h4>
                <p className="text-xs text-gray-600 mt-1">Receive upfront treatment plans and pricing comparisons across accredited hospitals before departure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}