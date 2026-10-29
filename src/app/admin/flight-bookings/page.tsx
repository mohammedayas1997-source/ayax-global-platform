"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  Search, 
  Download, 
  Printer, 
  Eye, 
  CheckCircle2, 
  Clock, 
  X, 
  ArrowLeft,
  Calendar,
  MapPin,
  Users
} from "lucide-react";

export default function FlightBookingsAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBooking, setActiveBooking] = useState<any | null>(null);

  const [flightList, setFlightList] = useState([
    {
      id: "flt-1",
      passengerName: "Dr. Farouk Umar & Family",
      refId: "AYX-FLT-88201",
      primaryPassport: "A90182741",
      tripType: "Round Trip",
      departureAirport: "Mallam Aminu Kano (KAN)",
      arrivalAirport: "Dubai International (DXB)",
      departureDate: "Nov 15, 2026",
      returnDate: "Nov 30, 2026",
      passengersCount: 4,
      preferredAirline: "Emirates / Qatar Airways",
      cabinClass: "Business Class",
      status: "Ticket Reservation Issued",
      submittedDate: "Oct 24, 2026",
      documents: [
        { name: "Family_Passports_Combined.pdf", size: "2.8 MB" },
        { name: "Flight_Itinerary_PNR_Reservation.pdf", size: "750 KB" }
      ]
    },
    {
      id: "flt-2",
      passengerName: "Alh. Mansur Bello & Escort",
      refId: "AYX-FLT-30114",
      primaryPassport: "A10984521",
      tripType: "Round Trip (Medical Flight)",
      departureAirport: "Nnamdi Azikiwe Abuja (ABV)",
      arrivalAirport: "Indira Gandhi New Delhi (DEL)",
      departureDate: "Nov 02, 2026",
      returnDate: "Nov 25, 2026",
      passengersCount: 2,
      preferredAirline: "Ethiopian Airlines (Medical Priority)",
      cabinClass: "Economy (Wheelchair Access)",
      status: "Waiting Visa Stamp",
      submittedDate: "Oct 25, 2026",
      documents: [
        { name: "Medical_Escort_Flight_Manifest.pdf", size: "1.1 MB" },
        { name: "Airline_Wheelchair_Clearance.pdf", size: "480 KB" }
      ]
    }
  ]);

  const filtered = flightList.filter(f => 
    f.passengerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.departureAirport.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.arrivalAirport.toLowerCase().includes(searchQuery.toLowerCase())
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
            <span className="text-xs font-bold text-slate-500">Commercial Aviation & Ticketing</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Flight Bookings & GDS PNR Registry
          </h1>
          <p className="text-xs text-slate-500">
            Amadeus & Sabre GDS airfare reservations, PNR ticket issuances, and medical escort flight manifests.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search passenger, route, PNR..."
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
            Active Flight PNR Reservations ({filtered.length})
          </h3>
          <span className="text-xs text-slate-400">RC: 9345377 Flight Operations</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black">
              <tr>
                <th className="p-4">PNR / Ref</th>
                <th className="p-4">Lead Passenger</th>
                <th className="p-4">Route & Trip</th>
                <th className="p-4">Travel Dates</th>
                <th className="p-4">Pax / Class</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Inspect PNR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-mono font-bold text-amber-700">{item.refId}</td>
                  <td className="p-4 font-bold text-slate-900">
                    {item.passengerName}
                    <span className="block text-[10px] font-normal text-slate-400">{item.primaryPassport}</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-800">
                    {item.departureAirport} → {item.arrivalAirport}
                    <span className="block text-[10px] text-amber-600">{item.tripType}</span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Dep: {item.departureDate}
                    <span className="block text-[10px] text-slate-400">Ret: {item.returnDate}</span>
                  </td>
                  <td className="p-4 font-bold text-slate-700">
                    {item.passengersCount} Pax
                    <span className="block text-[10px] font-normal text-slate-500">{item.cabinClass}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setActiveBooking(item)}
                      className="px-3 py-1.5 rounded-xl font-bold text-xs text-white shadow transition hover:opacity-90 ml-auto flex items-center gap-1.5"
                      style={{ backgroundColor: "#031B4E" }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Review PNR</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* INSPECTION MODAL */}
      {activeBooking && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Flight Reservation</span>
                <h3 className="text-xl font-black text-slate-900">{activeBooking.passengerName}</h3>
                <span className="text-xs text-slate-500 font-mono">PNR Ref: {activeBooking.refId} | Class: {activeBooking.cabinClass}</span>
              </div>
              <button onClick={() => setActiveBooking(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Route:</span>
                <span className="font-bold text-slate-900">{activeBooking.departureAirport} to {activeBooking.arrivalAirport}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Airlines:</span>
                <span className="font-bold text-slate-900">{activeBooking.preferredAirline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Schedule:</span>
                <span className="font-bold text-slate-900">{activeBooking.departureDate} (Return: {activeBooking.returnDate})</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-800">Flight Manifest & Passenger Files</h4>
              <div className="space-y-2">
                {activeBooking.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 truncate mr-2">{doc.name}</span>
                    <button
                      onClick={() => alert(`Downloading: ${doc.name}`)}
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