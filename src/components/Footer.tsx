import React from 'react';
import CkpcmcLogo from './CkpcmcLogo';
import { MapPin, Phone, Mail, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer id="footer" className="bg-[#ffffff] text-[#1E293B] pt-16 pb-12 relative overflow-hidden border-t-2 border-[#6F4E37]/20">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6F4E37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6F4E37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Institutional Identity Banner */}
        <div className="pb-12 border-b border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 select-none">
            <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-sm border border-slate-200 shrink-0 flex items-center justify-center">
              <CkpcmcLogo className="w-full h-full" showText={false} />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-xl sm:text-2xl text-[#1E293B] leading-tight">
                C.K. Pithawalla College
              </h3>
              <p className="font-mono text-[10.5px] text-[#6F4E37] uppercase tracking-[0.2em] font-bold mt-0.5">
                Engineering &amp; Technology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-700 shadow-2xs">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span className="font-semibold">GTU Affiliated</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-700 shadow-2xs">
              <Award size={16} className="text-[#6F4E37]" />
              <span className="font-semibold">Est. 1998</span>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-slate-200/80">
          
          {/* Column 1: Academic Programs */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6F4E37] font-bold">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-sans font-light">
              <li>
                <a href="/departments/computer-engineering" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Computer Engineering &amp; AIML
                </a>
              </li>
              <li>
                <a href="/departments/civil-engineering" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Civil Engineering
                </a>
              </li>
              <li>
                <a href="/departments/mechanical-engineering" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Mechanical Engineering (UG &amp; PG)
                </a>
              </li>
              <li>
                <a href="/departments/electrical-engineering" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Electrical &amp; ECE Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Institutional Overview */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6F4E37] font-bold">
              Institutional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-sans font-light">
              <li>
                <button onClick={() => scrollToId('about')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> About CKPCET
                </button>
              </li>
              <li>
                <a href="/about/vision-mission" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Vision &amp; Mission
                </a>
              </li>
              <li>
                <a href="/about/trustees" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Navyug Vidyabhavan Trust
                </a>
              </li>
              <li>
                <a href="/about/principals-message" className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#6F4E37] font-bold">›</span> Principal's Desk
                </a>
              </li>
              <li>
                <button onClick={() => scrollToId('faculty')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> Distinguished Faculty
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Hub & Portals */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6F4E37] font-bold">
              Student Hub
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-sans font-light">
              <li>
                <button onClick={() => scrollToId('university-gazette')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> Gazette &amp; Circulars
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('blogs-magazine')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> Blogs &amp; Magazine
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('campus-life')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> Campus Life &amp; Guilds
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('admissions')} className="hover:text-[#6F4E37] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#6F4E37] font-bold">›</span> Admissions FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="space-y-4 text-left">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6F4E37] font-bold">
              Campus Coordinates
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 font-sans font-light">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#6F4E37] shrink-0 mt-0.5" />
                <span>Near Malvan Mandir, Dumas Road, Via Magdalla Port, Surat, Gujarat 395007</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#6F4E37] shrink-0" />
                <span className="font-mono font-semibold text-[#1E293B]">+91 261 272 8282</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#6F4E37] shrink-0" />
                <a href="mailto:info@ckpcet.ac.in" className="font-mono font-semibold text-[#6F4E37] hover:underline">
                  info@ckpcet.ac.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans font-light">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} C. K. Pithawala College of Engineering and Technology. Managed by Navyug Vidyabhavan Trust.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1E293B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1E293B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1E293B] transition-colors">GTU Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
