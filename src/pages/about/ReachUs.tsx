import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Bus, 
  Navigation, 
  Info, 
  ExternalLink, 
  Calendar, 
  ChevronRight, 
  Landmark, 
  ArrowRight,
  Route
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { CONTACT } from "../../data/institute";
import { cdn } from "../../utils/image";

export default function ReachUs() {
  const [activeTab, setActiveTab] = useState<"city" | "brts">("city");

  const openGoogleMapsDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/Surat+Airport/C.+K.+Pithawalla+College+of+Engineering+%26+Technology,+Surat",
      "_blank"
    );
  };

  const openGoogleMapsLocation = () => {
    window.open(
      "https://maps.google.com/?q=C.+K.+Pithawalla+College+of+Engineering+%26+Technology,+Surat",
      "_blank"
    );
  };

  return (
    <SubPageLayout
      title="Contact Us"
      subtitle="We're here to help! Reach out to us for any queries, assistance or more information."
      category="about"
      activeItemLabel="Reach Us"
    >
      <div className="space-y-10 text-slate-800 font-sans">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT COLUMN: Contact Cards & Promo Card (4 cols) ── */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xs">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin size={18} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0F1E36]">Address</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
                  Opposite Surat Airport, Behind DPS School, Near Malvan Mandir, Dumas Road, Surat - 395007, Gujarat, India
                </p>
              </div>

              <div className="border-t border-slate-200/80" />

              {/* Call Us */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone size={18} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0F1E36]">Call Us</h3>
                </div>
                <div className="pl-13 space-y-1 text-xs sm:text-sm font-medium text-slate-700">
                  <a href="tel:+916355055839" className="block hover:text-[#1D4ED8] transition-colors">
                    +91 63550 55839
                  </a>
                  <a href="tel:+916355062275" className="block hover:text-[#1D4ED8] transition-colors">
                    +91 63550 62275
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200/80" />

              {/* Send an Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail size={18} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0F1E36]">Send an Email</h3>
                </div>
                <div className="pl-13 space-y-1 text-xs sm:text-sm font-medium text-slate-700">
                  <a href="mailto:ckpcet@yahoo.co.in" className="block hover:text-[#1D4ED8] transition-colors">
                    ckpcet@yahoo.co.in
                  </a>
                  <a href="mailto:contact@ckpcet.ac.in" className="block hover:text-[#1D4ED8] transition-colors">
                    contact@ckpcet.ac.in
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200/80" />

              {/* Institute Timings */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Clock size={18} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0F1E36]">Institute Timings</h3>
                </div>
                <div className="pl-13 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  <p>9:30 AM to 5:10 PM</p>
                  <p className="text-slate-500">(Monday to Friday)</p>
                </div>
              </div>

            </div>

            {/* We are committed to your success Promo Card */}
            <div className="w-full bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#0F1E36] text-white rounded-2xl p-4 sm:p-6 lg:p-7 relative overflow-hidden shadow-md flex flex-col justify-between gap-4 sm:gap-6 h-auto">
              {/* Background decorative architectural lines */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M0 20 L100 20 M0 50 L100 50 M0 80 L100 80 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100" />
                </svg>
              </div>

              <div className="relative z-10 space-y-2 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1D4ED8] flex items-center justify-center shadow-md shrink-0">
                  <Landmark size={20} className="sm:hidden" />
                  <Landmark size={24} className="hidden sm:block" />
                </div>
                
                <h2 className="font-bold text-base sm:text-lg lg:text-2xl text-white leading-snug sm:leading-tight break-words">
                  We are committed to your success
                </h2>
                
                <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed break-words">
                  Have questions or need guidance? Our team is ready to assist you.
                </p>
              </div>

              <div className="relative z-10 pt-1 sm:pt-2">
                <a
                  href="mailto:contact@ckpcet.ac.in"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1D4ED8] hover:bg-blue-50 font-bold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 group cursor-pointer w-full sm:w-auto"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Maps & Transport (8 cols) ── */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Maps Row: Suggested Routes & Our Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Suggested Routes */}
              <div className="space-y-3 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 text-[#0F1E36]">
                  <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Route size={18} />
                  </div>
                  <h3 className="font-bold text-lg">Suggested Routes</h3>
                </div>

                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-100 relative h-[250px] sm:h-[270px] shadow-xs group">
                  {/* Styled Route Map graphic container */}
                  <iframe
                    title="Route Map"
                    src="https://maps.google.com/maps?q=Surat+Airport+to+C.+K.+Pithawalla+College+of+Engineering+%26+Technology,+Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  {/* Route Info Badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-md text-xs font-sans text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="font-bold text-[#0F1E36]">22 min</span>
                    <span className="text-slate-500">(8.9 km)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openGoogleMapsDirections}
                  className="w-full py-3 bg-[#1D4ED8] hover:bg-[#153eb2] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </button>
              </div>

              {/* Card 2: Our Location */}
              <div className="space-y-3 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 text-[#0F1E36]">
                  <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                </div>

                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-100 relative h-[250px] sm:h-[270px] shadow-xs">
                  <iframe
                    title="CKPCET Location Map"
                    src="https://maps.google.com/maps?q=C.+K.+Pithawalla+College+of+Engineering+%26+Technology,+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                <button
                  type="button"
                  onClick={openGoogleMapsLocation}
                  className="w-full py-3 bg-white border border-[#1D4ED8] text-[#1D4ED8] hover:bg-blue-50 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Larger Map</span>
                  <ExternalLink size={15} />
                </button>
              </div>

            </div>

            {/* Bottom Card: Transport Section */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bus size={20} />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0F1E36]">Transport</h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Surat city is well equipped with various transportation options. Recently BRTS network has covered major part of the city. ONGC Nagar is the nearest BRTS station from college campus.
              </p>

              {/* Tabs */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("city")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === "city"
                      ? "bg-[#1D4ED8] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Bus size={15} />
                  <span>City Bus</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("brts")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === "brts"
                      ? "bg-[#1D4ED8] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Bus size={15} />
                  <span>BRTS</span>
                </button>
              </div>

              {activeTab === "city" ? (
                <>
                  {/* Notice Banner */}
                  <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 flex items-center gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0">
                      <Info size={16} />
                    </div>
                    <p>
                      Surat City Bus No 206 is running between Chowk Station and College Campus at every half an hour duration.
                    </p>
                  </div>

                  {/* Bus Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    
                    {/* Left: Bus Photo */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden relative w-full h-full min-h-[260px] bg-slate-100">
                      <img
                        src={cdn("https://ckpcet.ac.in/img/facilities/transport/bus.jpg", 800, 90)}
                        alt="Surat City Bus"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://ckpcet.ac.in/img/resources/city-bus.jpeg";
                        }}
                      />
                    </div>

                    {/* Right: Timetable Schedule Card */}
                    <div className="border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
                      {/* Header Banner */}
                      <div className="bg-[#0F1E36] text-white p-4 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Bus size={18} className="text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base tracking-tight">City Bus Stop</h4>
                          <p className="text-[11px] text-blue-200 font-medium">6112 - C. K. Pithawalla Engineering College</p>
                          <p className="text-[10px] text-slate-300 font-sans mt-0.5">૬૧૧૨ - સી. કે. પીઠવાલા એન્જીનિયરીંગ કોલેજ</p>
                        </div>
                      </div>

                      {/* Schedule Timetable Content */}
                      <div className="bg-slate-50/90 p-4 flex-1 space-y-4 text-xs font-sans text-slate-700 overflow-x-auto">
                        
                        {/* Section 1 */}
                        <div>
                          <div className="font-bold text-[#0F1E36] bg-slate-200/70 px-2.5 py-1 rounded-md text-[11px] mb-2">
                            206 : ચોક સ્ટેશન થી સી. કે. પીઠવાલા કોલેજ
                          </div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 pl-1 text-[11px]">
                            <span className="font-semibold text-slate-500">Bus Timing | સમય ગાળો</span>
                            <span className="font-semibold text-slate-500">Frequency</span>
                            
                            <span>06:10 - 09:30</span>
                            <span className="font-bold text-blue-700">• 20 Minute</span>

                            <span>09:30 - 12:42</span>
                            <span className="font-bold text-blue-700">• 28 Minute</span>

                            <span>12:42 - 04:12</span>
                            <span className="font-bold text-blue-700">• 35 Minute</span>

                            <span>04:12 - 06:00</span>
                            <span className="font-bold text-blue-700">• 28 Minute</span>

                            <span>06:00 - 09:10</span>
                            <span className="font-bold text-blue-700">• 25 Minute</span>
                          </div>
                        </div>

                        <div className="border-t border-slate-200" />

                        {/* Section 2 */}
                        <div>
                          <div className="font-bold text-[#0F1E36] bg-slate-200/70 px-2.5 py-1 rounded-md text-[11px] mb-2">
                            206 : સી. કે. પીઠવાલા કોલેજ થી ચોક
                          </div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 pl-1 text-[11px]">
                            <span className="font-semibold text-slate-500">Bus Timing | સમય ગાળો</span>
                            <span className="font-semibold text-slate-500">Frequency</span>

                            <span>10:05 - 11:28</span>
                            <span className="font-bold text-blue-700">• 20 Minute</span>

                            <span>11:28 - 11:58</span>
                            <span className="font-bold text-blue-700">• 30 Minute</span>

                            <span>11:58 - 03:28</span>
                            <span className="font-bold text-blue-700">• 35 Minute</span>

                            <span>03:28 - 08:19</span>
                            <span className="font-bold text-blue-700">• 28 Minute</span>
                          </div>
                        </div>

                      </div>

                      {/* Card Bottom Schedule Link */}
                      <a
                        href="https://drive.google.com/file/d/1XmuAmH27k4HMUEqEAYb7xk7mKDrjZMv4/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-t border-slate-200 bg-white p-3 px-4 flex items-center justify-between text-[#1D4ED8] font-bold text-xs hover:bg-blue-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-2">
                          <Calendar size={15} />
                          <span>Bus Schedule (New)</span>
                        </div>
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>

                    </div>

                  </div>
                </>
              ) : (
                /* BRTS Route Map Image View */
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white p-2 sm:p-4 shadow-sm flex items-center justify-center">
                  <a 
                    href="https://ckpcet.ac.in/img/resources/brts-map.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Click to view full image"
                    className="block w-full cursor-zoom-in"
                  >
                    <img
                      src={cdn("https://ckpcet.ac.in/img/resources/brts-map.jpg", 1200, 95)}
                      alt="Surat BRTS and City Bus Network Map"
                      className="w-full h-auto max-h-[850px] object-contain rounded-xl mx-auto"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ckpcet.ac.in/img/resources/brts-map.jpg";
                      }}
                    />
                  </a>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
