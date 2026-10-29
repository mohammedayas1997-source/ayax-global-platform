"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  Plane, 
  Moon, 
  X, 
  ArrowLeft,
  Calendar,
  Users
} from "lucide-react";

export default function VisaRequestsAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVisa, setActiveVisa] = useState<any | null>(null);

  const [visaRequestsList, setVisaRequestsList] = useState([
    {
      id: "vis-1",
      name: "Mukhtar Idris",
      refId: "AYX-VIS-77291",
      passportNo: "B19284722",
      packageType: "VIP Umrah & Bullet Train Suite",
      destination: "Makkah & Madinah, Saudi Arabia",
      pilgrimsCount: 2,
      travelSeason: "Rajab / Sha'ban 1448H",
      status: "BRN Confirmation Pending",
      documents: [
        { name: "Pilgrim_Passport_Copies.pdf", size: "1.2 MB" },
        { name: "Hotel_Fairmont_Reservation_PreBooking.pdf", size: "780 KB" }
      ]
    },
    {
      id: "vis-2",
      name: "Dr. Farouk Umar",
      refId: "AYX-VIS-10294",
      passportNo: "A90182741",
      packageType: "Dubai Desert Safari & Tourism Visa",
      destination: "Dubai, United Arab Emirates",
      pilgrimsCount: 4,
      travelSeason: "December Holiday Period",
      status: "Approved / Ready",
      documents: [
        { name: "Family_Passports_Combined.pdf", size: "2.8 MB" },
        { name: "Confirmed_Flight_Ticket_Reservation.pdf", size: "640 KB" }
      ]
    }
  ]);

  const filtered = visaRequestsList.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.packageType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 lg:p-10 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/admin" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Master Admin
            </Link>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-slate-500">Tourism & Umrah Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Visa & Pilgrimage Requests
          </h1>
          <p className="text-xs text-slate-500">
            Saudi Nusuk/Maqam e-Visa processing, embassy appointments, and verified flight reservations.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search applicant, package, destination..."
            className="px-4 py-2.5 text-xs rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 flex-1 sm:w-64"
          />
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-4 h-4 text-amber-500" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Visa Requests Database ({filtered.length})
          </h3>
          <span className="text-xs text-slate-400">RC: 9345377 Visa Registry</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
              <tr>
                <th className="p-4">Dossier Ref</th>
                <th className="p-4">Applicant Name</th>
                <th className="p-4">Package / Category</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Pilgrims</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-mono font-bold text-amber-700">{item.refId}</td>
                  <td className="p-4 font-bold text-slate-900">
                    {item.name}
                    <span className="block text-[10px] font-normal text-slate-400">{item.passportNo}</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-800">{item.packageType}</td>
                  <td className="p-4 text-slate-600">{item.destination}</td>
                  <td className="p-4 font-bold text-slate-700">{item.pilgrimsCount} Pax</td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setActiveVisa(item)}
                      className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                      style={{ backgroundColor: "#031B4E" }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Examine Request</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INSPECTION MODAL */}
      {activeVisa && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Visa Application</span>
                <h3 className="text-xl font-black text-slate-900">{activeVisa.name}</h3>
                <span className="text-xs text-slate-500 font-mono">Ref: {activeVisa.refId} | Package: {activeVisa.packageType}</span>
              </div>
              <button onClick={() => setActiveVisa(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-800">Download Passenger Documents</h4>
              <div className="space-y-2">
                {activeVisa.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 truncate mr-2">{doc.name}</span>
                    <button
                      onClick={() => alert(`Downloading verified document: ${doc.name}`)}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold shadow-sm flex items-center gap-1 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-600" /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}