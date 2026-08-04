import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  ExternalLink, 
  ChevronRight, 
  Search, 
  X, 
  ArrowLeft, 
  Sparkles, 
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

interface ApprovalLetter {
  year: string;
  isLatest?: boolean;
  appId?: string;
  driveUrl: string;
  approvedIntake?: string;
  branchesCount?: number;
}

const APPROVAL_LETTERS: ApprovalLetter[] = [
  { year: "2025-26", isLatest: true, appId: "F.No. West/1-4359871021/2025/EOA", driveUrl: "https://drive.google.com/file/d/1UMoMPdtN1ZZpmJFIiNcKYIa7Eiw0ZZo6/view", approvedIntake: "1,236 Seats", branchesCount: 6 },
  { year: "2024-25", appId: "F.No. West/1-3659482910/2024/EOA", driveUrl: "https://drive.google.com/file/d/11TLEfSwlVGgMJJqvjA25by7QPdJoCdFp/view", approvedIntake: "1,236 Seats", branchesCount: 6 },
  { year: "2023-24", appId: "F.No. West/1-2940581749/2023/EOA", driveUrl: "https://drive.google.com/file/d/1hltuEN9auCKpFlGS0_bCFTeenWLEWCbA/view", approvedIntake: "1,236 Seats", branchesCount: 6 },
  { year: "2022-23", appId: "F.No. West/1-1097482615/2022/EOA", driveUrl: "https://drive.google.com/file/d/14bJUtF4XlDYmZJm3NeLmGlegGnuWB_aI/view", approvedIntake: "1,140 Seats", branchesCount: 6 },
  { year: "2021-22", appId: "F.No. West/1-9318274619/2021/EOA", driveUrl: "https://drive.google.com/file/d/1GguvnvfxuFj0hHyLvvHzGbRvABeQrxTB/view", approvedIntake: "1,140 Seats", branchesCount: 6 },
  { year: "2020-21", appId: "F.No. West/1-7001928472/2020/EOA", driveUrl: "https://drive.google.com/file/d/1yJikY8rvJHi38w6rlh2Gq2QiFSzl0gPX/view", approvedIntake: "1,080 Seats", branchesCount: 6 },
  { year: "2019-20", appId: "F.No. West/1-4261029384/2019/EOA", driveUrl: "https://drive.google.com/file/d/1Vzqi_bqQ7HhQC39_9zruU-ffP0gXwxet/view", approvedIntake: "1,080 Seats", branchesCount: 6 },
  { year: "2018-19", appId: "F.No. West/1-3509182736/2018/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIdk9Gc0Z4STR4Z3Z1dFJPMEJJaFk2VWl1Rmdj/view?resourcekey=0-Vk4MbaYpevO3Qs8k9RncSA", approvedIntake: "1,080 Seats", branchesCount: 6 },
  { year: "2017-18", appId: "F.No. West/1-3327182940/2017/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIdDdXVlBveU51Qm9KZ0NoNHAxYnRtc2g0Tk5F/view?resourcekey=0-3oympUyIHWmu36lMI6WLag", approvedIntake: "1,020 Seats", branchesCount: 5 },
  { year: "2016-17", appId: "F.No. West/1-2814092817/2016/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIeUx3Q0I2eUhPcWM/view?resourcekey=0-XRF58qPOp-NaXRRqBVZAvA", approvedIntake: "1,020 Seats", branchesCount: 5 },
  { year: "2015-16", appId: "F.No. West/1-2451092847/2015/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIZm51SjNkN2lJZ2c/view?resourcekey=0-EUBWbPcCc1zE221JBdHE-Q", approvedIntake: "960 Seats", branchesCount: 5 },
  { year: "2014-15", appId: "F.No. West/1-2018273645/2014/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nISEVfXzVZUm5JbEk/view?resourcekey=0-UY4yyfwoqWgyjWXTmJQruA", approvedIntake: "960 Seats", branchesCount: 5 },
  { year: "2013-14", appId: "F.No. West/1-1372940182/2013/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIa1d0SFNvbUw4NWM/view?resourcekey=0-TETWpvXHWAkQrtGfT8f0lA", approvedIntake: "900 Seats", branchesCount: 5 },
  { year: "2012-13", appId: "F.No. West/1-7102938475/2012/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIbVhSX01YWXhuSms/view?resourcekey=0-Cr5_L5bIRsaqbUsQMdt2Mw", approvedIntake: "840 Seats", branchesCount: 5 },
  { year: "2011-12", appId: "F.No. West/1-4019283746/2011/EOA", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIcVVhRkVEMjFDWVk/view?resourcekey=0-7IJgm4AMK7J5CkK2fWnNDA", approvedIntake: "780 Seats", branchesCount: 5 },
  { year: "2010-11", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIQWVvMjRwT3lpQ2M/view?resourcekey=0-ukikPtoTh0Uw3esLYyXuUw", approvedIntake: "720 Seats", branchesCount: 5 },
  { year: "2009-10", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIUmpCZDVTOUItT3c/view?resourcekey=0-5shhy-8AsBfwTPMCNfgzUw", approvedIntake: "660 Seats", branchesCount: 4 },
  { year: "2008-09", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIcnM5TXZsam9wb0U/view?resourcekey=0-w6XGUDKN1KXMCDP9K2CbgQ", approvedIntake: "600 Seats", branchesCount: 4 },
  { year: "2007-08", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nITXhlZU13OTNKcWM/view?resourcekey=0-Ro34ixdApEwbGseQCJlYtw", approvedIntake: "540 Seats", branchesCount: 4 },
  { year: "2006-07", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIV1A0akNEaGpaclE/view?resourcekey=0-ihE0X4K6n9e0qZSj0Q-Ezg", approvedIntake: "480 Seats", branchesCount: 4 },
  { year: "2005-06", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIQ1hQWTdJemdRd2M/view?resourcekey=0-FQ2zF-TPfzEoLs1MNL3q7A", approvedIntake: "420 Seats", branchesCount: 4 },
  { year: "2004-05", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIQXRqRGJIUDQ1TnM/view?resourcekey=0-TbugNKMQKSLJJnSxMQHIUA", approvedIntake: "360 Seats", branchesCount: 3 },
  { year: "2003-04", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIYTVUTGp5RXVkSzA/view?resourcekey=0-77_c5ScTrzUqBr3yQDvkzw", approvedIntake: "300 Seats", branchesCount: 3 },
  { year: "2002-03", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIUmxENklyYWcyRm8/view?resourcekey=0-RD25QbYZuEGbCzAk740XOg", approvedIntake: "240 Seats", branchesCount: 3 },
  { year: "2001-02", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIWk9mTVdZNmR5aFE/view?resourcekey=0-Y30l929FWLqufnVoAlrYKg", approvedIntake: "240 Seats", branchesCount: 3 },
  { year: "2000-01", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nISHlpM0VzWEFtNUU/view?resourcekey=0-IfwzBmayOtLa1lf0wCII3w", approvedIntake: "180 Seats", branchesCount: 3 },
  { year: "1999-00", appId: "F.No. 740-89-328(E)/ET/98", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIMnhJMDZod01MMXc/view?resourcekey=0-IY45gu_4imucCf1NXQBTcQ", approvedIntake: "180 Seats", branchesCount: 3 },
  { year: "1998-99", appId: "F.No. 740-89-328(E)/ET/98 (First Approval)", driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nINVphS3U2bHZ1TFk/view?resourcekey=0-Yn0xqXiyP1_fInk6YWo9Rg", approvedIntake: "120 Seats", branchesCount: 2 }
];

export default function AicteApprovalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter approval letters based on search input
  const filteredLetters = APPROVAL_LETTERS.filter((item) =>
    item.year.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleOpenDriveLink = (letter: ApprovalLetter) => {
    setToastMessage(`Opening Google Drive document for AY ${letter.year}...`);
    window.open(letter.driveUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SubPageLayout
      title="AICTE Approval"
      subtitle="Official Extension of Approval (EOA) Letters Issued by All India Council for Technical Education (AICTE), New Delhi"
      category="affiliations"
      activeItemLabel="AICTE Approval"
    >
      <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* ── HEADER ROW WITH ICON, TITLE, & SEARCH ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-slate-100 relative z-10">
          
          {/* Title & Icon */}
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#00509d] flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-700/20">
              <FileText className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                AICTE Approval Letters
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1">
                Browse and download AICTE approval letters year wise.
              </p>
            </div>
          </div>

          {/* Top Right Search Input Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F1F5F9] hover:bg-slate-200/70 focus:bg-white text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-sm pl-10 pr-9 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* ── 28 YEAR APPROVAL CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10">
          
          {filteredLetters.map((letter) => (
            <div
              key={letter.year}
              onClick={() => handleOpenDriveLink(letter)}
              className="bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-2xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
            >
              
              {/* Optional "Latest" Blue Pill Badge attached to the top-left */}
              {letter.isLatest && (
                <div className="absolute -top-3 left-4 bg-[#00509d] text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md z-20">
                  Latest
                </div>
              )}

              {/* Left Round Icon Container */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-50 border border-blue-100/90 text-[#00509d] flex items-center justify-center shrink-0 group-hover:bg-[#00509d] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Card Title & Link Subtitle */}
              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-[#00509d] transition-colors leading-tight">
                  {letter.year}
                </h3>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#00509d] group-hover:underline mt-1">
                  <span>Approval Letter</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                </div>
              </div>

              {/* Right Arrow Icon */}
              <div className="shrink-0 text-slate-400 group-hover:text-[#00509d] group-hover:translate-x-1 transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </div>

            </div>
          ))}

        </div>

        {filteredLetters.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 my-4">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-700 font-bold text-base">No approval letters found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* ── BOTTOM FOOTER ROW ── */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Left Count Text */}
          <p className="text-slate-500 font-medium text-xs sm:text-sm">
            Showing {filteredLetters.length} years of approval letters
          </p>

          {/* Right Green "← First" Button */}
          <button
            onClick={handleScrollToTop}
            className="bg-[#10B981] hover:bg-[#059669] active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>First</span>
          </button>

        </div>

      </div>

      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold border border-slate-700 animate-in fade-in slide-in-from-bottom-3">
          <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}
    </SubPageLayout>
  );
}
