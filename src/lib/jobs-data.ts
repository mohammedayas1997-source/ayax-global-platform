export interface AvailableJob {
  id: string;
  title: string;
  category: "Cleaning & Hospitality" | "Skilled & Technical" | "Healthcare" | "Logistics & Transport";
  country: string;
  region: "Gulf" | "Europe";
  salary: string;
  contractDuration: string;
  accommodation: string; // Misali: Free Accommodation & Transport
  dutyHours: string;     // Misali: 8 Hours / 6 Days
  ageLimit: string;      // Misali: 21 - 40 Years
  requirements: string[];
  totalPackageFee: string;
  paymentBreakdown: string;
  sponsorshipType: "Sponsored (₦50k Reg + ₦450k on Visa)" | "Self-Funded Europe (₦250k Deposit)";
  isFeatured?: boolean;
}

export const JOBS_LIST: AvailableJob[] = [
  {
    id: "cleaner-uae",
    title: "Commercial & Office Cleaner",
    category: "Cleaning & Hospitality",
    country: "United Arab Emirates (Dubai)",
    region: "Gulf",
    salary: "AED 1,500 - 1,800 / month",
    contractDuration: "2 Years (Renewable)",
    accommodation: "Free Accommodation, Transport & Medical Insurance",
    dutyHours: "8 - 9 Hours daily / 6 days a week",
    ageLimit: "20 - 38 Years",
    requirements: [
      "Valid International Passport (Minimum 6 months validity)",
      "Basic English communication skills",
      "Medically fit and clean criminal record",
      "No prior experience strictly required; basic training will be provided"
    ],
    totalPackageFee: "₦500,000",
    paymentBreakdown: "₦50,000 Registration Fee upfront, ₦450,000 balance when Visa is issued",
    sponsorshipType: "Sponsored (₦50k Reg + ₦450k on Visa)",
    isFeatured: true
  },
  {
    id: "housekeeping-qatar",
    title: "Hotel Housekeeping Attendant",
    category: "Cleaning & Hospitality",
    country: "Qatar (Doha)",
    region: "Gulf",
    salary: "QAR 1,600 - 2,000 / month + Tips",
    contractDuration: "2 Years (Renewable)",
    accommodation: "Free Company Accommodation, Uniform & Duty Meals",
    dutyHours: "8 Hours daily / 1 Day Off",
    ageLimit: "21 - 36 Years",
    requirements: [
      "Physical fitness and stamina for housekeeping duties",
      "Prior hotel or cleaning experience is an added advantage",
      "High school diploma (WAEC/NECO) or equivalent",
      "Clean police character certificate"
    ],
    totalPackageFee: "₦500,000",
    paymentBreakdown: "₦50,000 Registration Fee upfront, ₦450,000 balance when Visa is issued",
    sponsorshipType: "Sponsored (₦50k Reg + ₦450k on Visa)",
    isFeatured: true
  },
  {
    id: "kitchen-helper-saudi",
    title: "Kitchen Assistant / Dishwasher",
    category: "Cleaning & Hospitality",
    country: "Saudi Arabia (Riyadh & Jeddah)",
    region: "Gulf",
    salary: "SAR 1,500 - 1,800 / month",
    contractDuration: "2 Years (Renewable)",
    accommodation: "Free Accommodation, Duty Meals & Transport",
    dutyHours: "9 Hours daily / 6 Days a week",
    ageLimit: "21 - 40 Years",
    requirements: [
      "Ability to work in fast-paced restaurant or hotel kitchen",
      "Basic hygiene and food safety understanding",
      "Valid International Passport"
    ],
    totalPackageFee: "₦500,000",
    paymentBreakdown: "₦50,000 Registration Fee upfront, ₦450,000 balance when Visa is issued",
    sponsorshipType: "Sponsored (₦50k Reg + ₦450k on Visa)"
  },
  {
    id: "security-guard-uae",
    title: "Security Guard (SIRA Certified Trainee)",
    category: "Skilled & Technical",
    country: "United Arab Emirates",
    region: "Gulf",
    salary: "AED 2,200 - 2,700 / month",
    contractDuration: "2 Years (Renewable)",
    accommodation: "Free Accommodation, Transport & Uniform",
    dutyHours: "12 Hours daily / 6 Days a week",
    ageLimit: "22 - 39 Years",
    requirements: [
      "Minimum height: 5ft 8in (172 cm)",
      "Good command of English (Written and Spoken)",
      "Physically fit, no visible tattoos",
      "SIRA security training exam passed in Dubai upon arrival"
    ],
    totalPackageFee: "₦500,000",
    paymentBreakdown: "₦50,000 Registration Fee upfront, ₦450,000 balance when Visa is issued",
    sponsorshipType: "Sponsored (₦50k Reg + ₦450k on Visa)"
  },
  {
    id: "factory-worker-poland",
    title: "Food Packaging & Factory Worker",
    category: "Skilled & Technical",
    country: "Poland",
    region: "Europe",
    salary: "PLN 4,500 - 5,500 / month (approx. €1,100 - €1,300)",
    contractDuration: "1 Year Work Permit (Extendable to 3 Years TRC)",
    accommodation: "Subsidized Shared Housing (€100/mo deducted from salary)",
    dutyHours: "8 - 10 Hours daily / 5 - 6 Days a week",
    ageLimit: "21 - 45 Years",
    requirements: [
      "Valid International Passport with at least 18 months validity",
      "Apostilled educational and police clearance certificates",
      "Must undergo national Polish Work Permit D Type processing",
      "Self-funded flight ticket and embassy appointment fee"
    ],
    totalPackageFee: "₦2,200,000",
    paymentBreakdown: "₦250,000 Initial Deposit (₦50k Non-refundable Reg + ₦200k Work Permit documentation), Balance upon Visa Grant",
    sponsorshipType: "Self-Funded Europe (₦250k Deposit)"
  },
  {
    id: "trailer-driver-lithuania",
    title: "Long-Haul Heavy Truck / Trailer Driver (CE)",
    category: "Logistics & Transport",
    country: "Lithuania",
    region: "Europe",
    salary: "€2,000 - €2,600 / month",
    contractDuration: "2 Years Work Contract (Code 95 Support)",
    accommodation: "Living cabin equipped + Base station quarters",
    dutyHours: "European Union Tachograph Standards",
    ageLimit: "24 - 48 Years",
    requirements: [
      "Valid Commercial Truck Driver's License (Class G / E)",
      "Minimum 2 years verified driving experience",
      "Clean driving history & medical fitness certificate"
    ],
    totalPackageFee: "₦2,400,000",
    paymentBreakdown: "₦250,000 Initial Deposit, Balance upon European Work Visa issuance",
    sponsorshipType: "Self-Funded Europe (₦250k Deposit)"
  }
];