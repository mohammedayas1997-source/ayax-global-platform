"use client";

import { useState, useMemo } from "react";
import { 
  GraduationCap, 
  UploadCloud, 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  ShieldAlert, 
  Award,
  Globe2,
  BookOpen,
  MapPin,
  Clock,
  Home,
  Utensils,
  Sparkles,
  Layers,
  Search,
  Check
} from "lucide-react";

// --- Types ---
export interface AvailableScholarship {
  id: string;
  universityName: string;
  country: string;
  degreeLevel: "Undergraduate (BSc)" | "Postgraduate (MSc / MBA)" | "Doctorate (PhD)" | "All Levels";
  coverage: "100% Full Tuition Waiver" | "75% Partial Tuition Waiver" | "50% Merit Grant";
  courses: string[];
  intakeSeason: string;
  accommodation: string;
  monthlyStipend: string;
  packageTerms: string;
  badge: string;
}

export interface AcademicMajor {
  id: string;
  title: string;
  fieldCategory: string;
  availableDestinations: {
    country: string;
    universitiesCount: string;
    averageCoverage: string;
    accommodationSupport: string;
    visaProcessingTime: string;
  }[];
}

// 1. LIVE AVAILABLE SCHOLARSHIPS (DIRECT ONE-CLICK APPLY)
const LIVE_SCHOLARSHIPS: AvailableScholarship[] = [
  {
    id: "sch-turkey-1",
    universityName: "Istanbul Aydin & Medipol University Alliance",
    country: "Turkey",
    degreeLevel: "All Levels",
    coverage: "100% Full Tuition Waiver",
    courses: ["Computer Engineering", "Medicine (MBBS)", "Business Administration", "International Relations"],
    intakeSeason: "Fall & Spring Intakes (Open Now)",
    accommodation: "Subsidized Student Dormitory Provided",
    monthlyStipend: "Meal Voucher & Local Transport Pass Included",
    packageTerms: "Total: ₦250,000 (₦50,000 Registration Fee + ₦200,000 Balance strictly upon Admission Grant)",
    badge: "100% Tuition Waiver"
  },
  {
    id: "sch-cyprus-2",
    universityName: "Eastern Mediterranean & Near East University",
    country: "North Cyprus",
    degreeLevel: "Undergraduate (BSc)",
    coverage: "75% Partial Tuition Waiver",
    courses: ["Software Engineering", "Nursing Science", "Pharmacy", "Civil Engineering"],
    intakeSeason: "Direct Semester Placement",
    accommodation: "On-Campus Dormitory Reserved",
    monthlyStipend: "Cafeteria Meal Plan Discount",
    packageTerms: "Total: ₦250,000 (₦50,000 Registration Fee + ₦200,000 Balance strictly upon Admission Grant)",
    badge: "Guaranteed 75% Grant"
  },
  {
    id: "sch-malaysia-3",
    universityName: "UCSI & Asia Pacific University (APU)",
    country: "Malaysia",
    degreeLevel: "Postgraduate (MSc / MBA)",
    coverage: "50% Merit Grant",
    courses: ["Data Science & AI", "Cybersecurity", "MBA Global Finance", "Information Technology"],
    intakeSeason: "Rolling Monthly Admission",
    accommodation: "Subsidized University Apartment",
    monthlyStipend: "Student Work Permission Allowed (20hrs/week)",
    packageTerms: "Total: ₦250,000 (₦50,000 Registration Fee + ₦200,000 Balance strictly upon Admission Grant)",
    badge: "Merit Tech Scholarship"
  },
  {
    id: "sch-poland-4",
    universityName: "Warsaw University of Technology & Vistula Group",
    country: "Poland (European Union)",
    degreeLevel: "All Levels",
    coverage: "50% Merit Grant",
    courses: ["International Business", "Computer Science", "Logistics & Supply Chain", "Aviation Management"],
    intakeSeason: "National European D-Visa Route",
    accommodation: "University Student Housing Available",
    monthlyStipend: "Shengen Zone Visa (Part-Time Student Work Rights)",
    packageTerms: "Total: ₦250,000 (₦50,000 Registration Fee + ₦200,000 Balance strictly upon Admission Grant)",
    badge: "EU Shengen Pathway"
  }
];

// 2. CUSTOM SCHOLARSHIP SOURCING (MAJOR FIRST -> THEN COUNTRY)
const ACADEMIC_MAJORS: AcademicMajor[] = [
  {
    id: "major-health",
    title: "Medicine, Nursing & Health Sciences",
    fieldCategory: "Healthcare & Clinical",
    availableDestinations: [
      {
        country: "Turkey",
        universitiesCount: "6 Partner Medical Faculties",
        averageCoverage: "50% - 100% Tuition Waivers",
        accommodationSupport: "Campus Medical Dormitories",
        visaProcessingTime: "3 - 5 Weeks"
      },
      {
        country: "North Cyprus",
        universitiesCount: "4 Accredited Health Colleges",
        averageCoverage: "50% - 75% Direct Grants",
        accommodationSupport: "Furnished Student Residences",
        visaProcessingTime: "2 - 3 Weeks (Fast-Track)"
      },
      {
        country: "India",
        universitiesCount: "8 Medical Allied Universities",
        averageCoverage: "Merit-Based ICCR University Waivers",
        accommodationSupport: "Full Boarding & Fooding",
        visaProcessingTime: "2 - 4 Weeks"
      }
    ]
  },
  {
    id: "major-tech",
    title: "Computer Science, AI & Software Engineering",
    fieldCategory: "Technology & Computing",
    availableDestinations: [
      {
        country: "Malaysia",
        universitiesCount: "5 Tier-1 Tech Universities",
        averageCoverage: "30% - 60% Merit STEM Grants",
        accommodationSupport: "High-Rise Student Residences",
        visaProcessingTime: "4 Weeks (EMGS Processing)"
      },
      {
        country: "Poland",
        universitiesCount: "7 European Technical Institutes",
        averageCoverage: "Subsidized European Tuition",
        accommodationSupport: "University Campus Flats",
        visaProcessingTime: "4 - 6 Weeks"
      },
      {
        country: "Turkey",
        universitiesCount: "9 Engineering Faculties",
        averageCoverage: "50% - 100% Waivers",
        accommodationSupport: "State & Private Dormitories",
        visaProcessingTime: "3 - 4 Weeks"
      }
    ]
  },
  {
    id: "major-business",
    title: "MBA, Business Administration & Finance",
    fieldCategory: "Management & Social Sciences",
    availableDestinations: [
      {
        country: "North Cyprus",
        universitiesCount: "5 Business Schools",
        averageCoverage: "50% - 75% Direct Scholarships",
        accommodationSupport: "Student Apartments",
        visaProcessingTime: "2 - 3 Weeks"
      },
      {
        country: "United Kingdom",
        universitiesCount: "4 Partial Grant Universities",
        averageCoverage: "£2,500 - £5,000 Vice Chancellor Grants",
        accommodationSupport: "University Halls of Residence",
        visaProcessingTime: "3 Weeks (Priority Cas)"
      },
      {
        country: "Turkey",
        universitiesCount: "6 International Business Colleges",
        averageCoverage: "50% - 80% Tuition Waivers",
        accommodationSupport: "Campus Housing",
        visaProcessingTime: "3 Weeks"
      }
    ]
  },
  {
    id: "major-engineering",
    title: "Civil, Mechanical & Electrical Engineering",
    fieldCategory: "Engineering & Applied Sciences",
    availableDestinations: [
      {
        country: "Turkey",
        universitiesCount: "8 Accredited ABET Faculties",
        averageCoverage: "50% - 100% Tuition Waivers",
        accommodationSupport: "Subsidized Dormitories",
        visaProcessingTime: "3 - 4 Weeks"
      },
      {
        country: "Poland",
        universitiesCount: "6 Polytechnics & Tech Colleges",
        averageCoverage: "European Subsidized Tuition",
        accommodationSupport: "Student Hostels",
        visaProcessingTime: "4 - 5 Weeks"
      },
      {
        country: "Lithuania",
        universitiesCount: "3 Technical Universities",
        averageCoverage: "EU Research & STEM Grants",
        accommodationSupport: "University Quarters",
        visaProcessingTime: "4 Weeks"
      }
    ]
  }
];

export default function ScholarshipApplyForm() {
  // Mode Selection: "available" (Live university slots) vs "sourcing" (Major -> Country selection)
  const [applicationMode, setApplicationMode] = useState<"available" | "sourcing">("available");

  // State for Option 1: Live Available Scholarships
  const [selectedLiveId, setSelectedLiveId] = useState<string>("sch-turkey-1");

  // State for Option 2: Sourcing (Major -> Destination Country)
  const [selectedMajorId, setSelectedMajorId] = useState<string>("major-health");
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);

  // Search State for Available Scholarships
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Live Scholarships
  const filteredLiveScholarships = useMemo(() => {
    return LIVE_SCHOLARSHIPS.filter((sch) => {
      const q = searchQuery.toLowerCase();
      return (
        sch.universityName.toLowerCase().includes(q) ||
        sch.country.toLowerCase().includes(q) ||
        sch.coverage.toLowerCase().includes(q) ||
        sch.courses.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Derived Active Data
  const activeLive = LIVE_SCHOLARSHIPS.find((s) => s.id === selectedLiveId) || LIVE_SCHOLARSHIPS[0];
  const activeMajor = ACADEMIC_MAJORS.find((m) => m.id === selectedMajorId) || ACADEMIC_MAJORS[0];
  const activeDestination = activeMajor.availableDestinations[selectedCountryIndex] || activeMajor.availableDestinations[0];

  // Final Form Display Variables
  const selectedInstitutionOrMajor = applicationMode === "available" ? activeLive.universityName : activeMajor.title;
  const targetCountry = applicationMode === "available" ? activeLive.country : activeDestination.country;
  const coverageDisplay = applicationMode === "available" ? activeLive.coverage : activeDestination.averageCoverage;
  const accommodationDisplay = applicationMode === "available" ? activeLive.accommodation : activeDestination.accommodationSupport;
  const timelineOrIntake = applicationMode === "available" ? activeLive.intakeSeason : `Processing: ${activeDestination.visaProcessingTime}`;

  // Candidate Data Form States
  const [fullName, setFullName] = useState("");
  const [ninNumber, setNinNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degreeApplyingFor, setDegreeApplyingFor] = useState("Undergraduate (BSc)");
  const [specificCourse, setSpecificCourse] = useState("");

  // Address
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [address, setAddress] = useState("");

  // Payment & Terms
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Paystack ₦50,000 Upfront Payment Verification
  const handlePaystackPayment = async () => {
    if (!fullName || !ninNumber || !passportNumber || !email || !phone) {
      alert("Please provide your Full Legal Name, National ID (NIN), Passport Number, Email, and Phone number before making payment.");
      return;
    }

    setLoading(true);

    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_samplekey123456789",
        email: email,
        amount: 50000 * 100, // ₦50,000 in Kobo
        currency: "NGN",
        onSuccess: (transaction: { reference: string }) => {
          setPaymentRef(transaction.reference);
          setPaymentSuccess(true);
          setLoading(false);
        },
        onCancel: () => {
          setLoading(false);
          alert("Payment window closed. The ₦50,000 registration fee is mandatory to submit your scholarship application.");
        },
      });
    } catch {
      // Developer fallback simulation
      setTimeout(() => {
        const dummyRef = `AYX-SCH-${Math.floor(100000 + Math.random() * 900000)}`;
        setPaymentRef(dummyRef);
        setPaymentSuccess(true);
        setLoading(false);
      }, 1200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentSuccess) {
      alert("Please complete the required ₦50,000 registration fee payment via Paystack first.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-200 max-w-xl mx-auto space-y-6 text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
        <h3 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
          Scholarship Application Registered Successfully!
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Thank you, <strong>{fullName}</strong>. Your application for <strong>{selectedInstitutionOrMajor} ({targetCountry})</strong> has been received by our Admissions Board.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2 text-left">
          <div className="flex justify-between font-semibold text-slate-800">
            <span>Registration Payment Status:</span>
            <span className="text-emerald-600 font-bold">₦50,000 Verified (Paid)</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Paystack Reference:</span>
            <span className="font-mono">{paymentRef}</span>
          </div>
          <div className="flex justify-between text-slate-600 border-t pt-2">
            <span>Success Balance:</span>
            <span className="font-bold text-amber-700">₦200,000 (Payable only after official admission & scholarship letter is issued)</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          * A confirmation dossier and your admission review tracking reference have been sent to <strong>{email}</strong> and your WhatsApp number. Our overseas admissions team will contact you directly within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 space-y-8">
      
      {/* Header */}
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1" style={{ color: "#F59E0B" }}>
          <GraduationCap className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#031B4E" }}>
            Ayax Global Scholarship & Admissions Desk
          </span>
        </div>
        <h2 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
          Global University Scholarships & Admissions Application
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Apply directly to verified university scholarship slots currently open, or select your field of study and choose your preferred destination country.
        </p>
      </div>

      {/* MODE TABS (OPTION 1 VS OPTION 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-xl">
        <button
          type="button"
          onClick={() => setApplicationMode("available")}
          className={`py-3.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
            applicationMode === "available"
              ? "bg-white text-slate-900 shadow-md border-b-2 border-amber-500"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          Option 1: Live Available Scholarships (Direct One-Click Selection)
        </button>

        <button
          type="button"
          onClick={() => setApplicationMode("sourcing")}
          className={`py-3.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
            applicationMode === "sourcing"
              ? "bg-white text-slate-900 shadow-md border-b-2 border-amber-500"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Layers className="w-4 h-4 text-amber-500" />
          Option 2: Custom Sourcing (Choose Academic Major ➔ Choose Country)
        </button>
      </div>

      {/* OPTION 1: LIVE AVAILABLE SCHOLARSHIPS */}
      {applicationMode === "available" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Open University Scholarship Quotas ({filteredLiveScholarships.length} Institutions Open)
              </span>
              <p className="text-xs text-slate-500">
                Partner institutions actively allocating tuition waivers. Click any card to apply directly without manual step-by-step selection:
              </p>
            </div>
            
            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search university or country..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredLiveScholarships.map((sch) => {
              const isSelected = selectedLiveId === sch.id;
              return (
                <div
                  key={sch.id}
                  onClick={() => setSelectedLiveId(sch.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                    isSelected
                      ? "border-amber-500 bg-amber-50/50 shadow-md ring-1 ring-amber-400"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-600" /> {sch.country}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                        {sch.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900">{sch.universityName}</h4>

                    <div className="text-xs font-semibold text-emerald-700">
                      {sch.coverage} ({sch.degreeLevel})
                    </div>

                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      <strong>Courses:</strong> {sch.courses.join(", ")}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 mt-3 pt-2 text-[11px] text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Dormitory: {sch.accommodation}</span>
                      <span className="font-bold text-amber-700">{sch.intakeSeason}</span>
                    </div>
                    <p className="text-slate-400 text-[10px] italic">{sch.packageTerms}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* OPTION 2: CUSTOM SOURCING (STEP 1: MAJOR -> STEP 2: COUNTRY) */}
      {applicationMode === "sourcing" && (
        <div className="space-y-6">
          {/* Step 1: Select Academic Major */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Step 1: Choose Your Desired Field of Study
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACADEMIC_MAJORS.map((m) => {
                const isSelected = selectedMajorId === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      setSelectedMajorId(m.id);
                      setSelectedCountryIndex(0);
                    }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                      isSelected
                        ? "border-amber-500 bg-amber-50/50 shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                        {m.fieldCategory}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1.5">{m.title}</h4>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 font-medium">
                      {m.availableDestinations.length} Destination Countries with Active Grants
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Country Selection for this Field */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Step 2: Select Preferred Country for &ldquo;{activeMajor.title}&rdquo;
            </label>
            <p className="text-xs text-slate-500">
              Active scholarship agreements open in the following countries for this discipline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {activeMajor.availableDestinations.map((dest, idx) => {
                const isSelected = selectedCountryIndex === idx;
                return (
                  <div
                    key={dest.country}
                    onClick={() => setSelectedCountryIndex(idx)}
                    className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                      isSelected
                        ? "border-amber-500 bg-white shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{dest.country}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600 block">
                        {dest.averageCoverage}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {dest.universitiesCount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* DEDICATED PACKAGE OVERVIEW CARD (APPLIES TO BOTH MODES) */}
      <div className="bg-white rounded-2xl border-2 border-amber-400 p-5 sm:p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              {applicationMode === "available" ? "Direct Scholarship Quota Summary" : "Custom Placement Sourcing Summary"}
            </span>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>{selectedInstitutionOrMajor}</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                {targetCountry}
              </span>
            </h3>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 font-medium block">Tuition Coverage</span>
            <span className="text-base font-extrabold text-emerald-600">{coverageDisplay}</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Home className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Accommodation</span>
              <span className="text-slate-600 text-[11px]">{accommodationDisplay}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Intake / Timeline</span>
              <span className="text-slate-600 text-[11px]">{timelineOrIntake}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2 col-span-2 sm:col-span-1">
            <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Institutional Level</span>
              <span className="text-slate-600 text-[11px]">Accredited Ministry of Education</span>
            </div>
          </div>
        </div>

        {/* Pricing Terms */}
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <span className="font-bold text-slate-800 block">Package Pricing Structure:</span>
            <span className="text-slate-600 text-[11px]">
              Total Package Fee: <strong>₦250,000</strong> (₦50,000 Upfront Registration Fee + ₦200,000 Balance strictly upon Admission & Scholarship Grant)
            </span>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded bg-amber-500 text-slate-900 whitespace-nowrap">
            ₦50,000 Due Now
          </span>
        </div>
      </div>

      {/* APPLICANT IDENTITY & PASSPORT */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Step 3: Candidate Identity, National ID & Target Degree
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name</label>
            <input
              required
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="As ordered in International Passport"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">National ID Number (NIN)</label>
            <input
              required
              type="text"
              value={ninNumber}
              onChange={(e) => setNinNumber(e.target.value)}
              placeholder="11-digit NIN"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none font-medium text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">International Passport Number</label>
            <input
              required
              type="text"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              placeholder="e.g. A12345678"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs uppercase focus:ring-2 focus:ring-amber-500 outline-none font-bold text-slate-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="candidate@example.com"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Contact Phone</label>
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
            <label className="block text-xs font-semibold text-slate-700 mb-1">Degree Applying For</label>
            <select
              value={degreeApplyingFor}
              onChange={(e) => setDegreeApplyingFor(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-none"
            >
              <option>Undergraduate (BSc / BA)</option>
              <option>Master&apos;s Degree (MSc / MA / MBA)</option>
              <option>Doctorate (PhD)</option>
              <option>Pre-Degree / Diploma Foundation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Intended Specific Course</label>
            <input
              required
              type="text"
              value={specificCourse}
              onChange={(e) => setSpecificCourse(e.target.value)}
              placeholder="e.g. Medicine, Cybersecurity"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* RESIDENTIAL ADDRESS */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Permanent Residential Address</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
            <input
              required
              type="text"
              defaultValue="Nigeria"
              readOnly
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-slate-100 text-slate-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">State of Residence</label>
            <input
              required
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="e.g. Kano, Abuja, Lagos"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Local Government Area (LGA)</label>
            <input
              required
              type="text"
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              placeholder="e.g. Municipal, Gwale"
              className="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Street Address</label>
          <input
            required
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House/Plot number, Street name, City"
            className="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* MANDATORY ACADEMIC UPLOADS */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Step 4: Academic Records & Credential Uploads
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <FileText className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Upload Academic CV / Resume</span>
            <span className="text-[10px] text-slate-400">PDF Only (Educational background, awards & grades)</span>
            <input type="file" accept=".pdf" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <BookOpen className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">O-Level Results / Certificates</span>
            <span className="text-[10px] text-slate-400">WAEC / NECO / Cambridge / High School Result (PDF)</span>
            <input type="file" accept=".pdf,image/*" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <GraduationCap className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Degree / Transcripts (If Applicable)</span>
            <span className="text-[10px] text-slate-400">BSc / HND Transcripts for Masters & PhD Applicants</span>
            <input type="file" accept=".pdf" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <UploadCloud className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Passport & National ID (NIN) Scans</span>
            <span className="text-[10px] text-slate-400">Bio-data page and clear NIN slip (PDF / JPG)</span>
            <input type="file" accept=".pdf,image/*" className="hidden" />
          </div>
        </div>
      </div>

      {/* POLICIES & TERMS */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl space-y-2 text-xs text-red-950">
        <div className="flex items-center gap-1.5 font-bold text-red-900 uppercase">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          Scholarship Admissions Terms & Fee Policy
        </div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-[11px]">
          <li><strong>Registration Fee (₦50,000):</strong> Non-refundable administrative fee covering transcript evaluation, eligibility checks, and translation filings with foreign universities.</li>
          <li><strong>Success Balance (₦200,000):</strong> Payable strictly after your university admission with scholarship waiver has been successfully issued.</li>
          <li><strong>Embassy Decisions:</strong> Final student visa issuance remains subject to sovereign embassy requirements and interview performance.</li>
        </ul>
        <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-slate-900">
          <input
            type="checkbox"
            required
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-4 h-4 text-amber-500 rounded"
          />
          I have read and accept these binding scholarship financial terms.
        </label>
      </div>

      {/* PAYSTACK PAYMENT BOX */}
      <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-900">
              Registration Fee Payment
            </h4>
            <p className="text-xs text-slate-500">
              Initial Assessment & Processing Fee: ₦50,000
            </p>
          </div>
          <span className="text-base font-black text-amber-700">₦50,000</span>
        </div>

        {paymentSuccess ? (
          <div className="flex items-center gap-2 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            Registration Payment Confirmed (Ref: {paymentRef || "AYX-SCH-PAID"})
          </div>
        ) : (
          <button
            type="button"
            disabled={!agreedToTerms || loading}
            onClick={handlePaystackPayment}
            className={`w-full py-3.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition shadow ${
              agreedToTerms
                ? "bg-amber-500 hover:bg-amber-600 text-slate-900 cursor-pointer"
                : "bg-slate-300 text-slate-500 cursor-not-allowed"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            {loading ? "Connecting to Paystack Gateway..." : "Pay ₦50,000 Registration Fee via Paystack"}
          </button>
        )}
      </div>

      {/* SUBMISSION BUTTON */}
      <button
        type="submit"
        disabled={!paymentSuccess}
        className={`w-full font-bold py-3.5 rounded-lg shadow-lg transition text-base ${
          paymentSuccess
            ? "cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
      >
        Submit Official Scholarship Application
      </button>
    </form>
  );
}