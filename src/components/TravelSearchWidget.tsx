"use client";

import React, { useState } from "react";
import { 
  Plane, 
  Building2, 
  Briefcase, 
  Compass, 
  FileText, 
  PlusCircle, 
  ArrowLeftRight, 
  Calendar, 
  Users, 
  MapPin, 
  Search,
  Upload,
  Plus,
  Trash2
} from "lucide-react";

export default function TravelSearchWidget() {
  const [activeTab, setActiveTab] = useState<"flights" | "hotels" | "packages" | "tours" | "visa" | "addons">("flights");
  const [tripType, setTripType] = useState<"round" | "oneway" | "multicity">("round");
  
  // State na Multi-city
  const [multiFlights, setMultiFlights] = useState([
    { id: 1, from: "", to: "", date: "", cabin: "Economy" },
    { id: 2, from: "", to: "", date: "", cabin: "Economy" }
  ]);

  const addMultiFlight = () => {
    if (multiFlights.length < 5) {
      setMultiFlights([...multiFlights, { id: Date.now(), from: "", to: "", date: "", cabin: "Economy" }]);
    }
  };

  const removeMultiFlight = (id: number) => {
    if (multiFlights.length > 2) {
      setMultiFlights(multiFlights.filter(f => f.id !== id));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Container na Babban Widget */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Navigation Tabs na Sama */}
        <div className="flex items-center gap-2 overflow-x-auto p-3 bg-slate-50/80 border-b border-slate-100 no-scrollbar">
          <button 
            onClick={() => setActiveTab("flights")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shrink-0 ${
              activeTab === "flights" 
                ? "bg-white text-blue-600 shadow-md shadow-blue-500/10 scale-102 border border-slate-100" 
                : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Flights</span>
          </button>

          <button 
            onClick={() => setActiveTab("hotels")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shrink-0 ${
              activeTab === "hotels" 
                ? "bg-white text-blue-600 shadow-md shadow-blue-500/10 scale-102 border border-slate-100" 
                : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Hotels</span>
          </button>

          <button 
            onClick={() => setActiveTab("packages")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shrink-0 ${
              activeTab === "packages" 
                ? "bg-white text-blue-600 shadow-md shadow-blue-500/10 scale-102 border border-slate-100" 
                : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Packages</span>
          </button>

          <button 
            onClick={() => setActiveTab("tours")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shrink-0 ${
              activeTab === "tours" 
                ? "bg-white text-blue-600 shadow-md shadow-blue-500/10 scale-102 border border-slate-100" 
                : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Tours</span>
          </button>

          <button 
            onClick={() => setActiveTab("visa")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shrink-0 ${
              activeTab === "visa" 
                ? "bg-white text-blue-600 shadow-md shadow-blue-500/10 scale-102 border border-slate-100" 
                : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Visa</span>
          </button>

          <button 
            onClick={() => setActiveTab("addons")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm border border-slate-200/80 transition-all duration-200 shrink-0 ${
              activeTab === "addons" 
                ? "bg-blue-50 border-blue-200 text-blue-700" 
                : "text-slate-700 hover:bg-white hover:border-slate-300"
            }`}
          >
            <PlusCircle className="w-4 h-4 text-blue-600" />
            <span>Travel Add-ons</span>
          </button>
        </div>

        {/* Cikin Shafin (Widget Body) */}
        <div className="p-6 md:p-8">
          
          {/* TAB 1: FLIGHTS */}
          {activeTab === "flights" && (
            <div className="space-y-6">
              {/* Trip Types: Round / One-way / Multi-city */}
              <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl w-fit">
                <button
                  type="button"
                  onClick={() => setTripType("round")}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    tripType === "round" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Round trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    tripType === "oneway" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  One way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("multicity")}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    tripType === "multicity" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Multi-city
                </button>
              </div>

              {/* Standard Flights (Round / One Way) */}
              {tripType !== "multicity" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    {/* FROM */}
                    <div className="md:col-span-5 relative bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">From</label>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="City or airport (e.g. Abuja, ABV)" 
                          className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Swap Button */}
                    <div className="md:col-span-1 flex justify-center -my-2 md:my-0 z-10">
                      <button type="button" className="p-2.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all">
                        <ArrowLeftRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* TO */}
                    <div className="md:col-span-6 relative bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">To</label>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="Destination city or airport (e.g. Dubai, DXB)" 
                          className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    {/* DEPARTURE */}
                    <div className={`${tripType === "round" ? "md:col-span-3" : "md:col-span-5"} bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 transition-all`}>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Departure</label>
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <input type="date" className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none" />
                      </div>
                    </div>

                    {/* RETURN (Idan Round-Trip ne) */}
                    {tripType === "round" && (
                      <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 transition-all">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Return</label>
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <input type="date" className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none" />
                        </div>
                      </div>
                    )}

                    {/* TRAVELLERS */}
                    <div className={`${tripType === "round" ? "md:col-span-3" : "md:col-span-4"} bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 transition-all`}>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Travellers</label>
                      <div className="flex items-center gap-2.5">
                        <Users className="w-4 h-4 text-slate-400" />
                        <select className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer">
                          <option>1 Adult</option>
                          <option>2 Adults</option>
                          <option>3 Adults</option>
                          <option>Family (2 Adults, 2 Children)</option>
                        </select>
                      </div>
                    </div>

                    {/* CABIN CLASS */}
                    <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500 transition-all">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Cabin Class</label>
                      <select className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer">
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business Class</option>
                        <option>First Class</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Multi-city Layout */}
              {tripType === "multicity" && (
                <div className="space-y-4">
                  {multiFlights.map((flight, index) => (
                    <div key={flight.id} className="relative p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        {multiFlights.length > 2 && (
                          <button onClick={() => removeMultiFlight(flight.id)} className="text-rose-500 hover:text-rose-700">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5">
                          <label className="text-[9px] uppercase font-bold text-slate-400 block">From</label>
                          <input type="text" placeholder="City or airport" className="w-full bg-transparent text-xs font-semibold focus:outline-none" />
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5">
                          <label className="text-[9px] uppercase font-bold text-slate-400 block">To</label>
                          <input type="text" placeholder="City or airport" className="w-full bg-transparent text-xs font-semibold focus:outline-none" />
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5">
                          <label className="text-[9px] uppercase font-bold text-slate-400 block">Depart</label>
                          <input type="date" className="w-full bg-transparent text-xs font-semibold focus:outline-none" />
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5">
                          <label className="text-[9px] uppercase font-bold text-slate-400 block">Class</label>
                          <select className="w-full bg-transparent text-xs font-semibold focus:outline-none">
                            <option>Economy</option>
                            <option>Business</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button 
                    type="button" 
                    onClick={addMultiFlight}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-blue-400 text-blue-600 text-xs font-semibold hover:bg-blue-50/50 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add another flight</span>
                  </button>
                </div>
              )}

              {/* Search Button */}
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25 transition-all transform hover:-translate-y-0.5">
                  <Search className="w-4 h-4" />
                  <span>Search Flights</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HOTELS */}
          {activeTab === "hotels" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-3 focus-within:border-blue-500">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Destination</label>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="e.g. SAU - Madinah, Dubai, Istanbul" className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Check-in</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Check-out</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none" />
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Guests & Rooms</label>
                  <select className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-none">
                    <option>1 Adult, 1 Room</option>
                    <option>2 Adults, 1 Room</option>
                    <option>2 Adults, 2 Rooms</option>
                    <option>Family (2 Adults, 2 Kids)</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25">
                  <Search className="w-4 h-4" />
                  <span>Search Hotels</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: PACKAGES */}
          {activeTab === "packages" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">From</label>
                  <input type="text" placeholder="City or airport" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Destination City</label>
                  <input type="text" placeholder="City" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Departure</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Return</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Travelers</label>
                  <select className="w-full bg-transparent text-sm font-semibold focus:outline-none">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25">
                  <Briefcase className="w-4 h-4" />
                  <span>Build a Package</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: TOURS */}
          {activeTab === "tours" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Country</label>
                  <input type="text" placeholder="Select a country" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Destination</label>
                  <input type="text" placeholder="Select a destination" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Start Date</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">End Date</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Travelers</label>
                  <select className="w-full bg-transparent text-sm font-semibold focus:outline-none">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25">
                  <Compass className="w-4 h-4" />
                  <span>Search Tours</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: VISA (Check Requirements + Auto-Fill) */}
          {activeTab === "visa" && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-900">Upload Passport to Auto-Fill</h4>
                    <p className="text-[11px] text-blue-700">Scan or upload passport photo to extract your details automatically</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white text-blue-700 text-xs font-bold rounded-xl border border-blue-200 shadow-sm hover:bg-blue-50">
                  Select File
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Full Name</label>
                  <input type="text" placeholder="As shown on passport" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Passport Country</label>
                  <input type="text" placeholder="Select your passport country" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Destination</label>
                  <input type="text" placeholder="Where are you travelling to?" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25">
                  <FileText className="w-4 h-4" />
                  <span>Check Requirements</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: TRAVEL ADD-ONS */}
          {activeTab === "addons" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">From</label>
                  <input type="text" placeholder="City or airport" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Departure</label>
                  <input type="date" className="w-full bg-transparent text-sm font-semibold focus:outline-none" />
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Passenger</label>
                  <select className="w-full bg-transparent text-sm font-semibold focus:outline-none">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-xl shadow-blue-600/25">
                  <PlusCircle className="w-4 h-4" />
                  <span>Search Extras</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}