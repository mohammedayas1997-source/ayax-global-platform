import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Home, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Sparkles 
} from "lucide-react";

export interface ScholarshipDirectoryItem {
  id: string;
  universityName: string;
  country: string;
  city: string;
  coverage: "100% Full Tuition Waiver" | "75% Partial Tuition Waiver" | "50% Merit Grant";
  degreeLevels: string[];
  popularCourses: string[];
  intakeSeason: string;
  accommodationType: string;
  workPermission: string;
  totalPackageFee: string;
  paymentBreakdown: string;
  badge: string;
}

const SCHOLARSHIPS_DIRECTORY: ScholarshipDirectoryItem[] = [
  {
    id: "turkey-aydin",
    universityName: "Istanbul Aydin & Medipol University Alliance",
    country: "Turkey",
    city: "Istanbul & Ankara",
    coverage: "100% Full Tuition Waiver",
    degreeLevels: ["Undergraduate (BSc)", "Masters (MSc / MBA)", "Doctorate (PhD)"],
    popularCourses: ["Medicine (MBBS)", "Computer Engineering", "International Business", "Biomedical Sciences"],
    intakeSeason: "Fall & Spring Intakes (Active)",
    accommodationType: "Subsidized Student Dormitory Available",
    workPermission: "Student Internship Support Provided",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "100% Tuition Waiver"
  },
  {
    id: "cyprus-near-east",
    universityName: "Eastern Mediterranean & Near East University",
    country: "North Cyprus",
    city: "Lefkosa & Famagusta",
    coverage: "75% Partial Tuition Waiver",
    degreeLevels: ["Undergraduate (BSc)", "Masters (MSc)", "Pharmacy (PharmD)"],
    popularCourses: ["Nursing Science", "Pharmacy", "Software Engineering", "Civil Engineering"],
    intakeSeason: "Direct Semester Placement (Fast-Track)",
    accommodationType: "Campus Furnished Dormitories Reserved",
    workPermission: "Campus Part-Time Work Rights",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "Guaranteed 75% Grant"
  },
  {
    id: "malaysia-apu",
    universityName: "Asia Pacific University of Technology (APU) & UCSI",
    country: "Malaysia",
    city: "Kuala Lumpur",
    coverage: "50% Merit Grant",
    degreeLevels: ["Undergraduate (BSc)", "Postgraduate (MSc / MBA)"],
    popularCourses: ["Artificial Intelligence", "Cybersecurity", "Fintech & Data Science", "MBA International"],
    intakeSeason: "Monthly Rolling Admissions",
    accommodationType: "High-Rise University Apartments",
    workPermission: "Legal Student Work Permitted (20hrs/week)",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "Top STEM Scholarships"
  },
  {
    id: "poland-vistula",
    universityName: "Warsaw University of Technology & Vistula Group",
    country: "Poland (European Union)",
    city: "Warsaw & Krakow",
    coverage: "50% Merit Grant",
    degreeLevels: ["BSc", "MSc", "European Union Blue Card Track"],
    popularCourses: ["Computer Science", "Logistics & Supply Chain", "Aviation & Piloting Management", "Economics"],
    intakeSeason: "October Winter & March Summer Intakes",
    accommodationType: "Student Residences & Private Flats",
    workPermission: "Full Schengen Student Work Authorization",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "EU Schengen Degree"
  },
  {
    id: "lithuania-vgtu",
    universityName: "Vilnius Gediminas Technical University (VILNIUS TECH)",
    country: "Lithuania (European Union)",
    city: "Vilnius",
    coverage: "50% Merit Grant",
    degreeLevels: ["Undergraduate (BSc)", "Masters (MSc)"],
    popularCourses: ["Robotics & Automation", "Mechanical Engineering", "Architecture", "Information Systems"],
    intakeSeason: "Annual European Admissions",
    accommodationType: "Subsidized Campus Dormitories",
    workPermission: "Part-Time European Student Work Allowed",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "European Technical Degree"
  },
  {
    id: "uk-partial-grants",
    universityName: "UK Partner Universities Consortium",
    country: "United Kingdom",
    city: "London, Birmingham & Manchester",
    coverage: "50% Merit Grant",
    degreeLevels: ["Postgraduate (MSc / MA / MBA)"],
    popularCourses: ["Public Health", "Data Analytics", "Project Management", "International Commercial Law"],
    intakeSeason: "January & September Intakes",
    accommodationType: "University Halls of Residence",
    workPermission: "20 Hours/Week + 2-Year Graduate Post-Study Visa",
    totalPackageFee: "₦250,000",
    paymentBreakdown: "₦50,000 Upfront Registration & Evaluation, ₦200,000 Balance strictly upon Admission Letter",
    badge: "Post-Study Work Route"
  }
];

export default function StudyAbroadDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* HERO SECTION */}
        <section 
          className="relative text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{ backgroundColor: "#021235" }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <span 
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              style={{ 
                backgroundColor: "rgba(245, 158, 11, 0.15)", 
                color: "#FBBF24", 
                borderColor: "rgba(245, 158, 11, 0.4)" 
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Verified Overseas University Quotas
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Available International University Scholarships
            </h1>

            <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore accredited universities offering 50% to 100% tuition waivers across Europe, Turkey, and Asia. Review courses, degree levels, and campus housing terms before initiating your admission.
            </p>

            <div className="pt-2">
              <Link
                href="/portals/study-abroad/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs shadow-lg transition hover:opacity-95"
                style={{ backgroundColor: "#F59E0B", color: "#031B4E" }}
              >
                <GraduationCap className="w-4 h-4" /> Start Direct Scholarship Application
              </Link>
            </div>
          </div>
        </section>

        {/* DIRECTORY CARDS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Active Scholarship Partnerships ({SCHOLARSHIPS_DIRECTORY.length} Institutions Open)
              </h2>
              <p className="text-xs text-slate-500">
                Official Ministry of Education accredited universities with verified admission seats.
              </p>
            </div>

            <div className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-300">
              Registration Fee: ₦50,000 | Balance: ₦200,000 upon Admission
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOLARSHIPS_DIRECTORY.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition flex flex-col justify-between overflow-hidden group"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-600" /> {item.city}, {item.country}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition">
                    {item.universityName}
                  </h3>

                  <div className="flex items-center gap-1.5 text-emerald-700 font-extrabold text-sm">
                    <Award className="w-4 h-4 text-emerald-600" />
                    {item.coverage}
                  </div>
                </div>

                {/* Key Academic & Logistics Details */}
                <div className="p-6 space-y-3.5 text-xs text-slate-600 bg-slate-50/50 flex-1">
                  
                  {/* Degree Levels */}
                  <div>
                    <span className="font-bold text-slate-800 block text-[11px] mb-1">Degree Levels:</span>
                    <div className="flex flex-wrap gap-1">
                      {item.degreeLevels.map((lvl, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-medium text-slate-700">
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Popular Courses */}
                  <div>
                    <span className="font-bold text-slate-800 block text-[11px] mb-1">Featured Disciplines:</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.popularCourses.join(", ")}
                    </p>
                  </div>

                  {/* Accommodation & Timeline */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px]">
                    <div className="flex items-start gap-1.5">
                      <Home className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Housing:</span>
                        <span>{item.accommodationType}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Intake:</span>
                        <span>{item.intakeSeason}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Terms */}
                  <div className="border-t border-slate-200 pt-2.5 space-y-0.5">
                    <div className="flex justify-between items-center text-slate-800 font-bold">
                      <span>Package Structure:</span>
                      <span className="text-amber-700 font-black">{item.totalPackageFee}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 italic">
                      {item.paymentBreakdown}
                    </p>
                  </div>

                </div>

                {/* Footer Apply CTA */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">Official Quota</span>
                  <Link
                    href={`/portals/study-abroad/apply`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs shadow hover:opacity-95 transition"
                    style={{ backgroundColor: "#031B4E", color: "#F59E0B" }}
                  >
                    Select & Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </section>

      </div>

      <Footer />
    </main>
  );
}