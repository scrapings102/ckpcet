import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { 
  FileText, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export interface Committee {
  id: string;
  name: string;
  driveUrl: string;
}

export const COMMITTEES_LIST: Committee[] = [
  { id: "academic-council", name: "Academic Council", driveUrl: "https://drive.google.com/file/d/17leux1WA6jC85n83ZQfd2WZRqpbmcvIv/view" },
  { id: "co-curricular", name: "Co-Curricular Activities", driveUrl: "https://drive.google.com/file/d/1q4q6xV8M5MzFfwPWCmJmbQ2ohpG_Cz53/view" },
  { id: "finance", name: "Finance", driveUrl: "https://drive.google.com/file/d/1YcZtBJvVfkF9zdY2Pfb6zEDGY2V9wWEw/view" },
  { id: "iinc", name: "Innovation Council", driveUrl: "https://drive.google.com/file/d/1RkBY8bpsohO6qsmo38Fz43M6QhCFVTWJ/view" },
  { id: "library", name: "Library", driveUrl: "https://drive.google.com/file/d/1XTmO5S6eaKGDJ52wd_X2i7qX6_jKPnvA/view" },
  { id: "magazine", name: "Magazine", driveUrl: "" },
  { id: "nirf", name: "NIRF", driveUrl: "https://drive.google.com/file/d/1RlnBMui2sE27FBPaO4F_BPzZ5mqHPiT1/view" },
  { id: "nss", name: "NSS Sankul", driveUrl: "https://drive.google.com/file/d/1cP2aFcSjoxgy03rlcOtoNI3LAN12xGvX/view" },
  { id: "purchase", name: "Purchase/Equipment", driveUrl: "https://drive.google.com/file/d/1qLIxAzWtwODsLEItSYSStklXMPJ35P97/view" },
  { id: "timetable", name: "Timetable", driveUrl: "https://drive.google.com/file/d/11fpEUO8jYxE_iRUMVZgQM7RonhdSlI-M/view" },
  { id: "nmc", name: "Nasha Mukti Hostel Committee", driveUrl: "https://drive.google.com/file/d/1r_PJ_xFKS9409r974d5ntpmMezOLvChm/view" },
  { id: "abc", name: "ABC ID Committee", driveUrl: "https://drive.google.com/file/d/1Z8jTcpL2v_hj2QCG19KKZMqN0sklyG5p/view" },
];

export default function CommitteesPage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Find committee if slug exists
  const selectedCommittee = slug 
    ? COMMITTEES_LIST.find(c => c.id === slug || c.id === slug.toLowerCase())
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, location.pathname]);

  // Render single committee view if slug matches
  if (selectedCommittee) {
    return (
      <SubPageLayout
        title={selectedCommittee.name}
        subtitle="Institutional Standing Committee"
        category="committees"
        activeItemLabel={selectedCommittee.name}
      >
        <div className="space-y-8">
          {/* Committee Card Details */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#00509d] font-bold tracking-widest uppercase bg-[#00509d]/10 px-3 py-1 rounded-full">
                Institutional Standing Committee
              </span>
            </div>

            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-800">
              {selectedCommittee.name}
            </h2>

            {selectedCommittee.driveUrl ? (
              <button
                onClick={() => window.open(selectedCommittee.driveUrl, '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00509d] hover:bg-[#0B2545] text-white font-sans font-bold text-sm rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Official Document</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            ) : (
              <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-xl text-amber-800 font-sans text-sm font-semibold flex items-center gap-2">
                <span>Document not yet available</span>
              </div>
            )}
          </div>
        </div>
      </SubPageLayout>
    );
  }

  // Fallback: Overview list of all 12 committees
  return (
    <SubPageLayout
      title="Institutional Committees"
      subtitle="Standing committees overseeing administrative operations, student development, welfare, and quality compliance at CKPCET."
      category="committees"
      activeItemLabel="Committees"
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
            C. K. Pithawalla College of Engineering and Technology manages its continuous operations through a series of dedicated standing committees. Select any committee below to view its official document.
          </p>
        </div>

        {/* Grid of Committees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {COMMITTEES_LIST.map((committee) => (
            <div
              key={committee.id}
              onClick={() => navigate(`/about/committees/${committee.id}`)}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-[#00509d]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <h3 className="font-sans font-bold text-base text-slate-800 group-hover:text-[#00509d] transition-colors">
                {committee.name}
              </h3>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#00509d]">
                <span>View Details</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
