import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#021235", color: "#FFFFFF" }} className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info with Logo & RC */}
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="relative flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Ayax Travels and Tours Logo"
                  width={52}
                  height={52}
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block leading-tight">
                  AYAX TRAVELS AND TOURS
                </span>
                <span className="text-[11px] font-bold text-amber-400 block tracking-wider">
                  RC: 9345377
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Duly registered with the Corporate Affairs Commission under <strong>Ayax Global Ventures Ltd (RC: 9345377)</strong>. Medical Tourism, Verified International Work Visas, Scholarships &amp; Global Flight Reservations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#F59E0B" }}>
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/portals/medical-tourism/apply" className="hover:text-amber-400 transition">
                  Medical Tourism (India &amp; Beyond)
                </Link>
              </li>
              <li>
                <Link href="/portals/work-abroad/apply" className="hover:text-amber-400 transition">
                  Work Abroad &amp; Visa Sponsorships
                </Link>
              </li>
              <li>
                <Link href="/portals/study-abroad/apply" className="hover:text-amber-400 transition">
                  Study Abroad &amp; Scholarships
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Flight &amp; Hotel Reservations</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#F59E0B" }}>
              Quick Links
            </h4>

            <li>
  <Link href="/about" className="hover:text-amber-400 transition">
    About Ayax Global
  </Link>
</li>
<li>
  <Link href="/legal/terms" className="hover:text-amber-400 transition">
    Terms &amp; Conditions
  </Link>
</li>
<li>
  <Link href="/legal/privacy" className="hover:text-amber-400 transition">
    Privacy Policy
  </Link>
</li>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/dashboard" className="hover:text-amber-400 transition">
                  Application Status Tracker
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-amber-400 transition">
                  Portal Login (Staff &amp; Admin)
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-amber-400 transition">
                  Terms &amp; Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#F59E0B" }}>
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+234 704 749 7491</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>info@ayaxtravelsandtours.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Head Office, Black C 13/14 Yam Musa Plaza, Hotoro Ring Road, Kano state, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Ayax Travels and Tours (Ayax Global Ventures Ltd — RC: 9345377). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}