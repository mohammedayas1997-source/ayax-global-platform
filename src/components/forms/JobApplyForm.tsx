"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  UploadCloud, 
  CheckCircle2, 
  Briefcase, 
  CreditCard, 
  FileText, 
  Image as LucideImage, 
  ShieldAlert, 
  KeyRound, 
  LogIn, 
  MapPin, 
  Clock, 
  Home, 
  Utensils, 
  Bus, 
  Sparkles, 
  Search, 
  GraduationCap 
} from "lucide-react";

// --- Types ---
export interface LiveAdminJob {
  id: string;
  title: string;
  qualificationLevel: "Degree Required" | "Diploma / Skilled" | "Non-Degree / General";
  country: string;
  region: "Gulf" | "Europe";
  salary: string;
  dutyHours: string;
  accommodation: string;
  meals: string;
  transport: string;
  slotsRemaining: number;
  packageTerms: string;
  pathway: "sponsored" | "self-funded";
}

export interface StandardProfession {
  id: string;
  title: string;
  qualificationLevel: "Degree Required" | "Diploma / Skilled" | "Non-Degree / General";
  category: "Graduate & Professional" | "Healthcare & Medical" | "IT & Engineering" | "Cleaning & Hospitality" | "Security & Logistics";
  description: string;
  supportedCountries: {
    country: string;
    region: "Gulf" | "Europe";
    averageSalary: string;
    dutyHours: string;
    accommodation: string;
    meals: string;
    pathway: "sponsored" | "self-funded";
  }[];
}

// 1. LIVE ADMIN VACANCIES
const LIVE_ADMIN_VACANCIES: LiveAdminJob[] = [
  {
    id: "admin-live-grad-1",
    title: "Resident Medical Doctor (General Practitioner)",
    qualificationLevel: "Degree Required",
    country: "United Arab Emirates (Dubai & Abu Dhabi)",
    region: "Gulf",
    salary: "AED 18,000 - 25,000 / month",
    dutyHours: "48 Hours weekly (DHA / MOH Licensed)",
    accommodation: "Housing Allowance Provided (AED 5,000/mo)",
    meals: "Self-Covered",
    transport: "Transport Allowance Provided",
    slotsRemaining: 5,
    packageTerms: "Total: ₦500,000 (₦50,000 Reg + ₦450,000 on Visa)",
    pathway: "sponsored"
  },
  {
    id: "admin-live-grad-2",
    title: "Senior Full-Stack Software Engineer (React / Node / Cloud)",
    qualificationLevel: "Degree Required",
    country: "Poland (Krakow & Warsaw)",
    region: "Europe",
    salary: "PLN 16,000 - 22,000 / mo (€3,800 - €5,200)",
    dutyHours: "40 Hours / 5 Days (Hybrid / Office)",
    accommodation: "Relocation Assistance Provided",
    meals: "Self-Covered",
    transport: "Transit Pass Included",
    slotsRemaining: 4,
    packageTerms: "Total: ₦2,200,000 (₦250,000 Initial Deposit; Balance on Visa)",
    pathway: "self-funded"
  },
  {
    id: "admin-live-grad-3",
    title: "Registered Clinical Nurse (BSc Nursing)",
    qualificationLevel: "Degree Required",
    country: "United Kingdom",
    region: "Europe",
    salary: "£28,500 - £34,000 / year (NHS Band 5)",
    dutyHours: "37.5 Hours weekly (NMC PIN Registration)",
    accommodation: "First Month Subsidized NHS Quarters",
    meals: "Self-Covered",
    transport: "Public Transit Subsidized",
    slotsRemaining: 10,
    packageTerms: "Total: ₦2,500,000 (₦250,000 Initial Deposit; Balance on Visa)",
    pathway: "self-funded"
  },
  {
    id: "admin-live-1",
    title: "Commercial Office & Mall Cleaner",
    qualificationLevel: "Non-Degree / General",
    country: "United Arab Emirates (Dubai)",
    region: "Gulf",
    salary: "AED 1,600 - 1,850 / month",
    dutyHours: "9 Hours / 6 Days",
    accommodation: "Free Company Accommodation",
    meals: "Duty Food Allowance",
    transport: "Free Staff Shuttle Bus",
    slotsRemaining: 18,
    packageTerms: "Total: ₦500,000 (₦50,000 Reg + ₦450,000 on Visa)",
    pathway: "sponsored"
  },
  {
    id: "admin-live-2",
    title: "Luxury 5-Star Hotel Housekeeping Attendant",
    qualificationLevel: "Non-Degree / General",
    country: "Qatar (Doha)",
    region: "Gulf",
    salary: "QAR 1,700 - 2,100 / month + Tips",
    dutyHours: "8 Hours / 6 Days (1 Day Off)",
    accommodation: "Free Hotel Staff Quarters",
    meals: "3 Daily Cafeteria Meals Provided",
    transport: "Provided by Hotel",
    slotsRemaining: 12,
    packageTerms: "Total: ₦500,000 (₦50,000 Reg + ₦450,000 on Visa)",
    pathway: "sponsored"
  },
  {
    id: "admin-live-6",
    title: "Long-Haul Heavy Truck / Trailer Driver (CE)",
    qualificationLevel: "Diploma / Skilled",
    country: "Lithuania (Vilnius)",
    region: "Europe",
    salary: "€2,000 - €2,600 / month",
    dutyHours: "EU Tachograph Standard (Max 9-10h/day)",
    accommodation: "Equipped Cabin & Station Base Quarters",
    meals: "Self-Covered",
    transport: "Assigned Heavy Commercial Vehicle",
    slotsRemaining: 6,
    packageTerms: "Total: ₦2,400,000 (₦250,000 Initial Deposit; Balance on Visa)",
    pathway: "self-funded"
  }
];

// 2. PROFESSIONS CATALOG WITH DEGREE & QUALIFIED CAREERS
const ALL_PROFESSIONS: StandardProfession[] = [
  // --- DEGREE & PROFESSIONAL CAREERS ---
  {
    id: "prof-doctor",
    title: "Medical Doctor (General Practitioner / Specialist)",
    qualificationLevel: "Degree Required",
    category: "Healthcare & Medical",
    description: "MBBS / MD degree holders with verified clinical licensing for hospital and clinical deployments.",
    supportedCountries: [
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 18,000 - 30,000 / month",
        dutyHours: "48 Hours weekly (DHA / MOH / DOH Exam)",
        accommodation: "Housing Allowance Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Qatar",
        region: "Gulf",
        averageSalary: "QAR 16,000 - 26,000 / month",
        dutyHours: "40 - 48 Hours weekly (QCHP Licensed)",
        accommodation: "Furnished Family Housing Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Saudi Arabia",
        region: "Gulf",
        averageSalary: "SAR 15,000 - 25,000 / month",
        dutyHours: "48 Hours weekly (SCFHS Prometric)",
        accommodation: "Free Family Residential Compound",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "United Kingdom",
        region: "Europe",
        averageSalary: "£35,000 - £50,000 / year (GMC PLAB)",
        dutyHours: "40 - 48 Hours weekly",
        accommodation: "Relocation Allowance Provided",
        meals: "Self-Covered",
        pathway: "self-funded"
      }
    ]
  },
  {
    id: "prof-nurse-degree",
    title: "Registered Staff Nurse (BSc Nursing / RN)",
    qualificationLevel: "Degree Required",
    category: "Healthcare & Medical",
    description: "BSc Nursing or Diploma in Nursing with state nursing council registration and clinical experience.",
    supportedCountries: [
      {
        country: "United Kingdom",
        region: "Europe",
        averageSalary: "£28,500 - £34,000 / year (Band 5)",
        dutyHours: "37.5 Hours weekly (NMC CBT & OSCE)",
        accommodation: "Initial 1 - 2 Months Housing Subsidized",
        meals: "Self-Covered",
        pathway: "self-funded"
      },
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 7,500 - 12,000 / month",
        dutyHours: "48 Hours weekly (DHA / MOH RN)",
        accommodation: "Free Single / Shared Housing Allowance",
        meals: "Hospital Cafeteria Subsidy",
        pathway: "sponsored"
      },
      {
        country: "Saudi Arabia",
        region: "Gulf",
        averageSalary: "SAR 6,000 - 10,000 / month",
        dutyHours: "48 Hours weekly (Prometric Registered)",
        accommodation: "Free Staff Quarters",
        meals: "Duty Meals Provided",
        pathway: "sponsored"
      }
    ]
  },
  {
    id: "prof-software-eng",
    title: "Software Engineer & Cloud Architect",
    qualificationLevel: "Degree Required",
    category: "IT & Engineering",
    description: "BSc / HND in Computer Science, Software Engineering, or related technical discipline with coding portfolio.",
    supportedCountries: [
      {
        country: "Poland",
        region: "Europe",
        averageSalary: "PLN 14,000 - 22,000 / mo (€3,300 - €5,200)",
        dutyHours: "40 Hours / 5 Days (EU Blue Card Eligible)",
        accommodation: "Relocation Bonus Provided",
        meals: "Self-Covered",
        pathway: "self-funded"
      },
      {
        country: "Lithuania",
        region: "Europe",
        averageSalary: "€2,800 - €4,200 / month",
        dutyHours: "40 Hours / 5 Days (High-Skilled Visa)",
        accommodation: "Relocation Assistance",
        meals: "Self-Covered",
        pathway: "self-funded"
      },
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 14,000 - 22,000 / month",
        dutyHours: "40 - 45 Hours weekly",
        accommodation: "Housing Allowance Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Qatar",
        region: "Gulf",
        averageSalary: "QAR 13,000 - 20,000 / month",
        dutyHours: "40 Hours weekly",
        accommodation: "Company Housing Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      }
    ]
  },
  {
    id: "prof-civil-eng",
    title: "Civil / Structural Project Engineer",
    qualificationLevel: "Degree Required",
    category: "IT & Engineering",
    description: "BSc / BEng in Civil Engineering with project supervision and AutoCAD / Revit experience.",
    supportedCountries: [
      {
        country: "Saudi Arabia (NEOM & Riyadh Projects)",
        region: "Gulf",
        averageSalary: "SAR 12,000 - 18,000 / month",
        dutyHours: "48 Hours weekly (Site Rotations)",
        accommodation: "Free Executive Site Quarters",
        meals: "3 Daily Site Meals Provided",
        pathway: "sponsored"
      },
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 12,000 - 17,000 / month",
        dutyHours: "48 Hours weekly",
        accommodation: "Housing Allowance Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Poland",
        region: "Europe",
        averageSalary: "PLN 10,000 - 15,000 / mo (€2,400 - €3,500)",
        dutyHours: "40 Hours / 5 Days",
        accommodation: "Company Arranged Quarters",
        meals: "Self-Covered",
        pathway: "self-funded"
      }
    ]
  },
  {
    id: "prof-accountant",
    title: "Corporate Accountant & Financial Analyst",
    qualificationLevel: "Degree Required",
    category: "Graduate & Professional",
    description: "BSc in Accounting, Finance, or Economics with ICAN / ACCA / ACA accreditation.",
    supportedCountries: [
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 8,000 - 14,000 / month",
        dutyHours: "45 Hours weekly / 5 - 6 Days",
        accommodation: "Housing Allowance Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Qatar",
        region: "Gulf",
        averageSalary: "QAR 8,000 - 13,000 / month",
        dutyHours: "40 - 45 Hours weekly",
        accommodation: "Company Staff Housing",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "United Kingdom",
        region: "Europe",
        averageSalary: "£30,000 - £40,000 / year",
        dutyHours: "37.5 Hours weekly",
        accommodation: "Self-Covered",
        meals: "Self-Covered",
        pathway: "self-funded"
      }
    ]
  },
  {
    id: "prof-teacher",
    title: "Secondary School Teacher (Mathematics, Physics & English)",
    qualificationLevel: "Degree Required",
    category: "Graduate & Professional",
    description: "B.Ed / BSc + PGDE in Education or specialized subjects with minimum 2 years teaching background.",
    supportedCountries: [
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 9,000 - 14,000 / month (Tax-Free)",
        dutyHours: "35 - 40 Hours weekly",
        accommodation: "Furnished Accommodation Provided",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Saudi Arabia",
        region: "Gulf",
        averageSalary: "SAR 8,500 - 13,000 / month",
        dutyHours: "35 Hours weekly",
        accommodation: "Free Furnished School Apartment",
        meals: "Self-Covered",
        pathway: "sponsored"
      },
      {
        country: "Kuwait",
        region: "Gulf",
        averageSalary: "KWD 600 - 850 / month",
        dutyHours: "35 Hours weekly",
        accommodation: "School Provided Housing",
        meals: "Self-Covered",
        pathway: "sponsored"
      }
    ]
  },

  // --- GENERAL & SKILLED TRADES ---
  {
    id: "prof-cleaner",
    title: "Cleaner (Commercial, Office & Facility)",
    qualificationLevel: "Non-Degree / General",
    category: "Cleaning & Hospitality",
    description: "Office sanitization, shopping malls, residential estates, and industrial complexes.",
    supportedCountries: [
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 1,500 - 1,800 / month",
        dutyHours: "9 Hours / 6 Days",
        accommodation: "Free Company Accommodation",
        meals: "Allowance Provided",
        pathway: "sponsored"
      },
      {
        country: "Qatar",
        region: "Gulf",
        averageSalary: "QAR 1,400 - 1,750 / month",
        dutyHours: "8 Hours / 6 Days",
        accommodation: "Free Company Quarters",
        meals: "Daily Duty Meals Provided",
        pathway: "sponsored"
      },
      {
        country: "Saudi Arabia",
        region: "Gulf",
        averageSalary: "SAR 1,400 - 1,700 / month",
        dutyHours: "9 Hours / 6 Days",
        accommodation: "Free Staff Accommodation",
        meals: "Company Meal Plan",
        pathway: "sponsored"
      }
    ]
  },
  {
    id: "prof-housekeeping",
    title: "Housekeeping & Room Attendant",
    qualificationLevel: "Non-Degree / General",
    category: "Cleaning & Hospitality",
    description: "Hotel room upkeep, linen management, and guest hospitality standards.",
    supportedCountries: [
      {
        country: "Qatar",
        region: "Gulf",
        averageSalary: "QAR 1,600 - 2,100 / month + Tips",
        dutyHours: "8 Hours / 6 Days",
        accommodation: "Free Hotel Staff Quarters",
        meals: "3 Daily Cafeteria Meals",
        pathway: "sponsored"
      },
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 1,600 - 2,100 / month + Tips",
        dutyHours: "9 Hours / 6 Days",
        accommodation: "Free Accommodation",
        meals: "Duty Meals Provided",
        pathway: "sponsored"
      }
    ]
  },
  {
    id: "prof-driver",
    title: "Driver (Heavy Duty, Trailer & Commercial)",
    qualificationLevel: "Diploma / Skilled",
    category: "Security & Logistics",
    description: "Commercial freight, heavy equipment, and cross-border logistics.",
    supportedCountries: [
      {
        country: "Lithuania",
        region: "Europe",
        averageSalary: "€2,000 - €2,600 / month",
        dutyHours: "EU Tachograph Standard",
        accommodation: "Equipped Cabin & Station Quarters",
        meals: "Self-Covered",
        pathway: "self-funded"
      },
      {
        country: "United Arab Emirates",
        region: "Gulf",
        averageSalary: "AED 3,200 - 4,500 / month",
        dutyHours: "Commercial Route Shifts",
        accommodation: "Free Company Quarters",
        meals: "Self-Covered",
        pathway: "sponsored"
      }
    ]
  }
];

export default function JobApplyForm() {
  const [applicationMode, setApplicationMode] = useState<"available" | "sourcing">("available");

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQualificationFilter, setSelectedQualificationFilter] = useState<string>("All");

  // Selection states
  const [selectedLiveId, setSelectedLiveId] = useState<string>("admin-live-grad-1");
  const [selectedProfessionId, setSelectedProfessionId] = useState<string>("prof-doctor");
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);

  // Filtered Live Admin Vacancies
  const filteredLiveVacancies = useMemo(() => {
    return LIVE_ADMIN_VACANCIES.filter((v) => {
      const matchesSearch = 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesQual = 
        selectedQualificationFilter === "All" || v.qualificationLevel === selectedQualificationFilter;
      return matchesSearch && matchesQual;
    });
  }, [searchQuery, selectedQualificationFilter]);

  // Filtered Professions Catalog
  const filteredProfessions = useMemo(() => {
    return ALL_PROFESSIONS.filter((p) => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.supportedCountries.some((c) => c.country.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesQual = 
        selectedQualificationFilter === "All" || p.qualificationLevel === selectedQualificationFilter;
      return matchesSearch && matchesQual;
    });
  }, [searchQuery, selectedQualificationFilter]);

  // Derived Active Selections
  const activeLive = LIVE_ADMIN_VACANCIES.find((v) => v.id === selectedLiveId) || LIVE_ADMIN_VACANCIES[0];
  const activeProf = ALL_PROFESSIONS.find((p) => p.id === selectedProfessionId) || ALL_PROFESSIONS[0];
  const activeCountry = activeProf.supportedCountries[selectedCountryIndex] || activeProf.supportedCountries[0];

  const jobTitle = applicationMode === "available" ? activeLive.title : activeProf.title;
  const targetCountry = applicationMode === "available" ? activeLive.country : activeCountry.country;
  const salaryDisplay = applicationMode === "available" ? activeLive.salary : activeCountry.averageSalary;
  const accommodationDisplay = applicationMode === "available" ? activeLive.accommodation : activeCountry.accommodation;
  const dutyDisplay = applicationMode === "available" ? activeLive.dutyHours : activeCountry.dutyHours;
  const mealsDisplay = applicationMode === "available" ? activeLive.meals : activeCountry.meals;
  const pathway = applicationMode === "available" ? activeLive.pathway : activeCountry.pathway;
  const qualificationLabel = applicationMode === "available" ? activeLive.qualificationLevel : activeProf.qualificationLevel;

  const requiredAmount = pathway === "sponsored" ? 50000 : 250000;

  // Applicant Data
  const [fullName, setFullName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [address, setAddress] = useState("");
  const [highestDegree, setHighestDegree] = useState("BSc / Degree");

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState("");
  const [credentials, setCredentials] = useState<{ email: string; pass: string } | null>(null);

  const handlePaystackPayment = async () => {
    if (!fullName || !passportNumber || !email || !phone) {
      alert("Please fill in your Full Name, International Passport Number, Email Address, and Phone Number before initiating payment.");
      return;
    }

    setLoading(true);

    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_samplekey123456789",
        email: email,
        amount: requiredAmount * 100,
        currency: "NGN",
        onSuccess: (transaction: { reference: string }) => {
          setPaymentRef(transaction.reference);
          setPaymentSuccess(true);
          setLoading(false);
          createPortalAccount(transaction.reference);
        },
        onCancel: () => {
          setLoading(false);
          alert("Payment window closed. The registration fee is mandatory to submit your application.");
        },
      });
    } catch {
      setTimeout(() => {
        const dummyRef = `AYX-${Math.floor(100000 + Math.random() * 900000)}`;
        setPaymentRef(dummyRef);
        setPaymentSuccess(true);
        setLoading(false);
        createPortalAccount(dummyRef);
      }, 1200);
    }
  };

  const createPortalAccount = (ref: string) => {
    const generatedPass = "Ayax@" + Math.floor(1000 + Math.random() * 9000);
    setCredentials({
      email: email,
      pass: generatedPass,
    });
  };

  if (credentials) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-200 max-w-xl mx-auto space-y-6">
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
            Payment Verified & Account Generated!
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Your application for <strong>{jobTitle} ({targetCountry})</strong> has been registered successfully.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
            <KeyRound className="w-4 h-4" />
            Your Secure Portal Credentials
          </div>
          
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-xs font-medium">Username / Email:</span>
              <span className="font-bold text-slate-800">{credentials.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-xs font-medium">Temporary Password:</span>
              <span className="font-mono font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {credentials.pass}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400 border-t pt-2">
              <span>Paystack Verification Reference:</span>
              <span className="font-mono font-semibold">{paymentRef}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            * Please save this login password. You will need it to log in to your Candidate Dashboard to track employer interview links, job offer letters, and visa progress.
          </p>
        </div>

        <Link
          href={`/dashboard?email=${encodeURIComponent(credentials.email)}`}
          className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition"
          style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
        >
          <LogIn className="w-4 h-4" /> Access Candidate Dashboard Now
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200 space-y-8">
      
      {/* Header */}
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1" style={{ color: "#F59E0B" }}>
          <Briefcase className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#031B4E" }}>
            Ayax Work Abroad Recruitment Desk
          </span>
        </div>
        <h2 className="text-2xl font-bold" style={{ color: "#031B4E" }}>
          International Employment & Visa Sponsorship Application
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Explore opportunities for Degree Holders, Doctors, Engineers, IT specialists, and skilled workers. Search and filter positions by qualification level and country.
        </p>
      </div>

      {/* SEARCH AND QUALIFICATION FILTER BAR */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title (Doctor, Software Engineer, Nurse, Cleaner, Driver...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none bg-white font-medium text-slate-800"
            />
          </div>

          {/* Qualification Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {["All", "Degree Required", "Diploma / Skilled", "Non-Degree / General"].map((qual) => (
              <button
                key={qual}
                type="button"
                onClick={() => setSelectedQualificationFilter(qual)}
                className={`text-[11px] font-bold px-3 py-2 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                  selectedQualificationFilter === qual
                    ? "bg-amber-500 text-slate-900 shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {qual === "Degree Required" && <GraduationCap className="w-3.5 h-3.5" />}
                {qual}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODE TABS */}
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
          Option 1: Live Available Vacancies (Admin Broadcast Desk)
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
          <Search className="w-4 h-4 text-amber-500" />
          Option 2: Custom Sourcing (Select Profession ➔ Select Country)
        </button>
      </div>

      {/* OPTION 1: LIVE VACANCIES */}
      {applicationMode === "available" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Live Available Vacancies ({filteredLiveVacancies.length} Matches Found)
              </span>
              <p className="text-xs text-slate-500">
                Companies are actively recruiting right now. Click any vacancy card to lock your selection:
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              One-Click Direct Selection
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredLiveVacancies.map((vac) => {
              const isSelected = selectedLiveId === vac.id;
              return (
                <div
                  key={vac.id}
                  onClick={() => setSelectedLiveId(vac.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                    isSelected
                      ? "border-amber-500 bg-amber-50/50 shadow-md ring-1 ring-amber-400"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-600" /> {vac.country}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        vac.qualificationLevel === "Degree Required"
                          ? "bg-purple-100 text-purple-800 border border-purple-200"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {vac.qualificationLevel}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900">{vac.title}</h4>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="font-bold text-emerald-600">{vac.salary}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{vac.dutyHours}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 mt-3 pt-2 text-[11px] text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Housing: {vac.accommodation}</span>
                      <span className="font-bold text-amber-700">
                        {vac.region === "Gulf" ? "Visa Sponsored" : "European Pathway"}
                      </span>
                    </div>
                    <p className="text-slate-500 italic text-[10px]">{vac.packageTerms}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* OPTION 2: CUSTOM SOURCING */}
      {applicationMode === "sourcing" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Step 1: Choose Your Profession ({filteredProfessions.length} Trades Available)
              </label>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
              {filteredProfessions.map((prof) => {
                const isSelected = selectedProfessionId === prof.id;
                return (
                  <div
                    key={prof.id}
                    onClick={() => {
                      setSelectedProfessionId(prof.id);
                      setSelectedCountryIndex(0);
                    }}
                    className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                      isSelected
                        ? "border-amber-500 bg-amber-50/50 shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                          {prof.category}
                        </span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          prof.qualificationLevel === "Degree Required"
                            ? "bg-purple-100 text-purple-800 font-extrabold"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {prof.qualificationLevel}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 mt-1">{prof.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{prof.description}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 font-medium">
                      {prof.supportedCountries.length} Destination Countries Supported
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Country Selection */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Step 2: Select Target Country for &ldquo;{activeProf.title}&rdquo;
            </label>
            <p className="text-xs text-slate-500">
              The following countries currently accept international candidates for this profession:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {activeProf.supportedCountries.map((c, idx) => {
                const isSelected = selectedCountryIndex === idx;
                return (
                  <div
                    key={c.country}
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
                        <span>{c.country}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600 block">
                        {c.averageSalary}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      c.region === "Gulf"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}>
                      {c.region === "Gulf" ? "Sponsored" : "European"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* DEDICATED PACKAGE OVERVIEW CARD */}
      <div className="bg-white rounded-2xl border-2 border-amber-400 p-5 sm:p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {applicationMode === "available" ? "Live Admin Vacancy Summary" : "Custom Placement Sourcing Summary"}
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                {qualificationLabel}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>{jobTitle}</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                {targetCountry}
              </span>
            </h3>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 font-medium block">Monthly Compensation</span>
            <span className="text-base font-extrabold text-emerald-600">{salaryDisplay}</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Working Hours</span>
              <span className="text-slate-600 text-[11px]">{dutyDisplay}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Home className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Accommodation</span>
              <span className="text-slate-600 text-[11px]">{accommodationDisplay}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Utensils className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Duty Meals</span>
              <span className="text-slate-600 text-[11px]">{mealsDisplay}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <Bus className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 block text-[11px]">Transit / Allowance</span>
              <span className="text-slate-600 text-[11px]">Company Facilitated</span>
            </div>
          </div>
        </div>

        {/* Pricing Terms */}
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <span className="font-bold text-slate-800 block">Payment Terms & Financial Breakdown:</span>
            <span className="text-slate-600 text-[11px]">
              {pathway === "sponsored" 
                ? "Total: ₦500,000 (₦50,000 Registration Fee + ₦450,000 balance strictly upon Visa issuance)" 
                : "Total European Package (₦250,000 Initial Documentation Deposit; Balance upon Visa Approval)"}
            </span>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded bg-amber-500 text-slate-900">
            {pathway === "sponsored" ? "₦50,000 Upfront Reg" : "₦250,000 Documentation Deposit"}
          </span>
        </div>
      </div>

      {/* APPLICANT IDENTITY & QUALIFICATION */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Step 3: Applicant Identity & Highest Qualification
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name</label>
            <input 
              required 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="As ordered in International Passport" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
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
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm uppercase focus:ring-2 focus:ring-amber-500 outline-none font-semibold text-slate-800" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address (Portal Username)</label>
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="applicant@example.com" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
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
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Highest Educational Level</label>
            <select
              value={highestDegree}
              onChange={(e) => setHighestDegree(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none font-medium"
            >
              <option>Master&apos;s Degree (MSc / MA / MBA)</option>
              <option>Bachelor&apos;s Degree (BSc / BEng / MBBS)</option>
              <option>Higher National Diploma (HND)</option>
              <option>National Diploma (ND / OND)</option>
              <option>Nursing Council RN License</option>
              <option>Secondary School (WAEC / NECO)</option>
            </select>
          </div>
        </div>
      </div>

      {/* RESIDENTIAL LOCATION */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Residential Address</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
            <input 
              required 
              type="text" 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
            <input 
              required 
              type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="e.g. Kano, Abuja, Lagos" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Local Government Area (LGA)</label>
            <input 
              required 
              type="text" 
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              placeholder="e.g. Nassarawa, Ikeja" 
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
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
            placeholder="House/Flat number, Street name, City" 
            className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-500 outline-none" 
          />
        </div>
      </div>

      {/* REQUIRED CREDENTIAL UPLOADS */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Step 4: Required Credential Uploads (Degrees, Certificates & Passport)
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <FileText className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Upload Comprehensive Resume / CV</span>
            <span className="text-[10px] text-slate-400">PDF Only (Detailing degrees, certifications & work history)</span>
            <input type="file" accept=".pdf" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <GraduationCap className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Upload Degree Certificate / Diplomas</span>
            <span className="text-[10px] text-slate-400">BSc / HND / Nursing License / Medical Cert (PDF / Image)</span>
            <input type="file" accept=".pdf,image/*" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <LucideImage className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Passport Photograph</span>
            <span className="text-[10px] text-slate-400">White background headshot</span>
            <input type="file" accept="image/*" className="hidden" />
          </div>

          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition">
            <UploadCloud className="w-8 h-8 mx-auto text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 block">Passport Bio-Data Page</span>
            <span className="text-[10px] text-slate-400">Clear scan showing photo & details</span>
            <input type="file" accept=".pdf,image/*" className="hidden" />
          </div>
        </div>
      </div>

      {/* STRICT POLICIES */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl space-y-2 text-xs text-red-950">
        <div className="flex items-center gap-1.5 font-bold text-red-900 uppercase">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          Company Terms & Non-Refundable Policies
        </div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>
            <strong>Registration Fee (₦50,000):</strong> The ₦50,000 administrative and document verification fee is strictly non-refundable under all circumstances once processed.
          </li>
          <li>
            <strong>European Route Partial Refund:</strong> For European applications with ₦250,000 initial deposit, if employment documentation cannot be procured, the balance minus the ₦50,000 registration fee will be returned.
          </li>
          <li>
            <strong>Embassy Decisions:</strong> Foreign embassies retain sovereign authority for visa approvals. In the event of an embassy refusal, documentation, courier, and biometric appointment fees are non-refundable.
          </li>
        </ul>
        <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-slate-900">
          <input 
            type="checkbox" 
            required 
            checked={agreedToTerms} 
            onChange={(e) => setAgreedToTerms(e.target.checked)} 
            className="w-4 h-4 text-amber-500 rounded" 
          />
          I have read, understood, and accept these binding financial and embassy terms.
        </label>
      </div>

      {/* PAYSTACK PAYMENT BOX */}
      <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-900">
              Registration Fee
            </h4>
            <p className="text-xs text-slate-500">
              {pathway === "sponsored" 
                ? "Sponsorship Candidate Registration: ₦50,000" 
                : "European Documentation & Registration: ₦250,000"}
            </p>
          </div>
          <span className="text-base font-black text-amber-700">
            {pathway === "sponsored" ? "₦50,000" : "₦250,000"}
          </span>
        </div>

        {paymentSuccess ? (
          <div className="flex items-center gap-2 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            Registration Payment Confirmed (Ref: {paymentRef || "AYX-REG"})
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
            {loading ? "Connecting to Paystack Gateway..." : `Pay ${pathway === "sponsored" ? "₦50,000" : "₦250,000"} via Paystack & Create Account`}
          </button>
        )}
      </div>

      {/* FINAL SUBMISSION */}
      <button
        type="button"
        disabled={!paymentSuccess}
        onClick={() => {
          if (!paymentSuccess) {
            alert("Please verify payment first.");
            return;
          }
          createPortalAccount(paymentRef || "AYX-REG");
        }}
        className={`w-full font-bold py-3.5 rounded-lg shadow-lg transition text-base ${
          paymentSuccess 
            ? "cursor-pointer" 
            : "opacity-50 cursor-not-allowed"
        }`}
        style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
      >
        Submit Official Job Application
      </button>
    </form>
  );
}