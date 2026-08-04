import React from "react";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { CONTACT } from "../../data/institute";

export default function CampusMap() {
  const mapImageUrl = "https://ckpcet.ac.in/img/about-us/institute/map.jpg";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=C.+K.+Pithawala+College+of+Engineering+and+Technology+Surat";

  return (
    <SubPageLayout
      title="Campus Map & Location"
      subtitle="Explore our sprawling 100-acre educational complex located on Surat-Dumas Road."
      category="about"
      activeItemLabel="Campus Map"
    >
      <div className="space-y-12 text-[#3B3131]">
        {/* Map Image Section */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="font-sans font-semibold text-xl text-slate-900">CKPCET Campus Layout</h3>
              <p className="text-sm text-slate-600 mt-1">Detailed geographical map of engineering blocks, laboratories, library, workshops, and student hostels.</p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00509d] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#003d7a] transition-all shadow-sm shrink-0"
            >
              <Navigation size={14} />
              <span>Open in Google Maps</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner flex items-center justify-center p-2">
            <img
              src={mapImageUrl}
              alt="CKPCET Campus Map"
              className="w-full h-auto max-h-[700px] object-contain rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
          
          <div className="flex items-start gap-3 bg-blue-50/70 p-4 rounded-xl text-xs text-slate-700 border border-blue-100">
            <MapPin size={16} className="text-[#00509d] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Location Guide: </span>
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps iFrame */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h3 className="font-sans font-semibold text-lg text-slate-900">Interactive Location Map</h3>
            <p className="text-xs text-slate-500 mt-0.5">Use the interactive map below to navigate to the college campus from any point in Surat or South Gujarat.</p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 relative">
            <iframe
              title="CKPCET Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.579697072688!2d72.73812467525381!3d21.129304980545934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053246a4e320f%3A0x6e788737ed0c8046!2sC.%20K.%20Pithawalla%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
