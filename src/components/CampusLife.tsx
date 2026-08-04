import React, { useEffect, useRef, useState } from "react";
import { Palette, Users, Trophy, Lightbulb, Plus, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA — full event content (nothing dropped from the original)     */
/* ------------------------------------------------------------------ */
const EVENTS = [
  {
    id: "creative-arts", num: "01", category: "Creative Arts Guild", year: "2025",
    title: "Self-Expression & Aesthetic Confidence",
    headline: "Where structural engineering marries cultural elegance.",
    description: "At C.K. Pithawalla, engineering meets organic artistic style. Our student-led creative guilds provide acoustic music suites, design exhibition halls, and dramatic street theater collectives.",
    icon: <Palette size={16} />, accent: "#0B2545",
    locationTag: "Creative Quad & Open-Air Theatre",
    stats: [{ label: "Active Guilds", value: "8 Live Teams" }, { label: "Creative Portfolio", value: "150+ Registered" }],
    primaryImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "house-culture", num: "02", category: "Student Houses", year: "2025",
    title: "Interdisciplinary Fellowship",
    headline: "Cohesive multi-departmental support systems.",
    description: "Our campus operates as four vibrant student houses: Aryabhata, Ramanujan, Newton, and Curie — breaking departmental barriers during debate leagues, hackathons, and community work.",
    icon: <Users size={16} />, accent: "#0B2545",
    locationTag: "Central Student House Commons",
    stats: [{ label: "Active Participation", value: "95% Student Pool" }, { label: "Scholarship Reward", value: "₹50,000 Award" }],
    primaryImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "athletics", num: "03", category: "Sports Varsity", year: "2025",
    title: "Physical Mastery & Mindfulness",
    headline: "Nurturing daily resilience, coordination, and focus.",
    description: "Across our green pitches and floodlit multi-courts, students compete inside the fiery 'Khelutsav' leagues, alongside peaceful morning yogic sessions and endurance training.",
    icon: <Trophy size={16} />, accent: "#0B2545",
    locationTag: "Floodlit Turf Pitch & Sports Arena",
    stats: [{ label: "Varsity Turf Complex", value: "3.5 Green Acres" }, { label: "Tournament Count", value: "12 Seasonal Cups" }],
    primaryImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "incubation", num: "04", category: "Prayas Sandbox", year: "2025",
    title: "Real Innovation & Incubation Lab",
    headline: "Sowing seed grants for student prototypes.",
    description: "Operated with the Gujarat state SSIP Cell, our PRAYAS sandbox labs help students build physical prototypes, fighting robots, and automated IoT models into registered startups.",
    icon: <Lightbulb size={16} />, accent: "#0B2545",
    locationTag: "SSIP Innovation Lab & Prototyping Bay",
    stats: [{ label: "Granted Capital", value: "₹15 Lakhs Seeded" }, { label: "Startup Launches", value: "8 Registered Firms" }],
    primaryImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
];

const POLAROIDS = [
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", caption: "Sunset chats at central lawns", tag: "Student Life", category: "Student Life", id: "01", rot: -2.8, year: "2025", pinColor: "gold" },
  { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", caption: "Shaam-E-Shaandar concert night", tag: "Music Club", category: "Music & Arts", id: "02", rot: 2.5, year: "2025", pinColor: "red" },
  { url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop", caption: "Creative arts guild oil studio", tag: "Fine Arts", category: "Music & Arts", id: "03", rot: -1.8, year: "2024", pinColor: "blue" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", caption: "Night coding team sprint", tag: "Prayas Hub", category: "Tech & Labs", id: "04", rot: 3.2, year: "2025", pinColor: "silver" },
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop", caption: "Warmups before Khelutsav tournament", tag: "Varsity Sports", category: "Sports & Fitness", id: "05", rot: -2.4, year: "2024", pinColor: "red" },
  { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop", caption: "Senior-junior common room talks", tag: "Community", category: "Student Life", id: "06", rot: 2.1, year: "2025", pinColor: "gold" },
  { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", caption: "Robotics testing & automation bay", tag: "Innovation Lab", category: "Tech & Labs", id: "07", rot: -3.0, year: "2025", pinColor: "blue" },
  { url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop", caption: "Annual street drama rehearsals", tag: "Theatre Guild", category: "Music & Arts", id: "08", rot: 1.9, year: "2024", pinColor: "gold" },
  { url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop", caption: "Quiet study sessions at central stack", tag: "Library Commons", category: "Student Life", id: "09", rot: -1.6, year: "2025", pinColor: "silver" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", caption: "Tech fest prototype showcase", tag: "GTU Xitij", category: "Tech & Labs", id: "10", rot: 2.7, year: "2024", pinColor: "red" },
  { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", caption: "Morning mindfulness & yoga quad", tag: "Wellness Club", category: "Sports & Fitness", id: "11", rot: -2.2, year: "2025", pinColor: "gold" },
  { url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop", caption: "Farewell lantern release evening", tag: "Graduation", category: "Student Life", id: "12", rot: 3.0, year: "2024", pinColor: "blue" }
];
const LANE1 = [...POLAROIDS.slice(0, 6), ...POLAROIDS.slice(0, 6)];
const LANE2 = [...POLAROIDS.slice(6, 12), ...POLAROIDS.slice(6, 12)];

const ROW_H = 380; // minimap row height (px)

/* ------------------------------------------------------------------ */
/*  EVENT SHOWCASE — pinned screen lock gallery                       */
/* ------------------------------------------------------------------ */
function EventShowcase({ onZoom }: { onZoom: (url: string) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const lastUserInteractionRef = useRef<number>(0);
  const N = EVENTS.length;

  // Direct DOM refs for GPU hardware-composited layer transforms (zero main-thread layout thrashing)
  const evImgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const evParaRefs = useRef<(HTMLImageElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevImgRefs = useRef<(HTMLImageElement | null)[]>([]);

  // User wheel & touch interaction tracking
  useEffect(() => {
    const handleUserInteraction = () => {
      lastUserInteractionRef.current = Date.now();
    };
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (!wrapRef.current || !stageRef.current) return;

    // Create GSAP ScrollTrigger with smooth scrub momentum to eliminate jerkiness & stutter
    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * (N - 1) * 1.0}`,
      pin: stageRef.current,
      pinType: "fixed",
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.6, // Smooth 0.6s momentum catch-up removes all scroll wheel jerkiness
      snap: {
        snapTo: 1 / (N - 1),
        duration: { min: 0.3, max: 0.6 },
        delay: 0.25,
        inertia: false,
        ease: "power2.out",
      },
      onUpdate: (self) => {
        // Clamp strictly between 0 and N - 1 to prevent overscroll gap tearing
        const raw = Math.max(0, Math.min(N - 1, self.progress * (N - 1)));
        
        // Direct GPU compositor updates eliminate mobile jerkiness & stuttering
        for (let i = 0; i < N; i++) {
          const diff = i - raw;
          if (evImgRefs.current[i]) evImgRefs.current[i]!.style.transform = `translate3d(0, ${diff * 100}%, 0)`;
          if (evParaRefs.current[i]) evParaRefs.current[i]!.style.transform = `translate3d(0, ${-diff * 18}%, 0) scale(1.4)`;
          if (infoRefs.current[i]) infoRefs.current[i]!.style.transform = `translate3d(0, ${diff * 100}%, 0)`;
          if (prevRefs.current[i]) prevRefs.current[i]!.style.transform = `translate3d(0, ${diff * 100}%, 0)`;
          if (prevImgRefs.current[i]) prevImgRefs.current[i]!.style.transform = `translate3d(0, ${-diff * 12}px, 0) scale(1.15)`;
        }

        const activeIdx = Math.min(N - 1, Math.max(0, Math.round(raw)));
        if (activeIdx !== activeRef.current) {
          activeRef.current = activeIdx;
          setActive(activeIdx);
        }
      },
    });

    stRef.current = st;

    return () => {
      st.kill();
    };
  }, [N]);

  // Smart auto-scroll loop — smooth transition, pauses gracefully on user hover or scroll
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!stRef.current) return;
      const st = stRef.current;
      
      const scrollY = window.scrollY;
      const isInRange = scrollY >= st.start - 80 && scrollY <= st.end + 80;
      const userRecentlyInteracted = Date.now() - lastUserInteractionRef.current < 4500;
      
      if (isInRange && !isHoveredRef.current && !userRecentlyInteracted) {
        const nextIdx = (activeRef.current + 1) % N;
        const targetY = st.start + (nextIdx / (N - 1)) * (st.end - st.start);
        
        const scrollObj = { y: window.scrollY };
        gsap.to(scrollObj, {
          y: targetY,
          duration: 1.1,
          ease: "power2.inOut",
          onUpdate: () => {
            window.scrollTo({ top: scrollObj.y });
          }
        });
      }
    }, 4500);

    return () => clearInterval(autoPlayInterval);
  }, [N]);

  const handleRailClick = (idx: number) => {
    if (!stRef.current) return;
    lastUserInteractionRef.current = Date.now();
    const st = stRef.current;
    const targetY = st.start + (idx / (N - 1)) * (st.end - st.start);
    const scrollObj = { y: window.scrollY };
    gsap.to(scrollObj, {
      y: targetY,
      duration: 0.9,
      ease: "power2.inOut",
      onUpdate: () => {
        window.scrollTo({ top: scrollObj.y });
      }
    });
  };

  return (
    <section ref={wrapRef} className="events-wrapper relative">
      <div 
        ref={stageRef} 
        className="events-stage h-screen w-full relative overflow-hidden bg-[#0b0b0e]"
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
      >
        {/* full-bleed primary image — slide + parallax */}
        <div className="ev-images absolute inset-0">
          {EVENTS.map((e, i) => (
            <div key={e.id} ref={(el) => { evImgRefs.current[i] = el; }} className="ev-image absolute inset-0 overflow-hidden" style={{ transform: `translate3d(0, ${i * 100}%, 0)` }}>
              <img ref={(el) => { evParaRefs.current[i] = el; }} src={e.primaryImage} alt={e.title} className="ev-img-parallax w-full h-full object-cover block" style={{ transform: `translate3d(0, ${-i * 18}%, 0) scale(1.4)` }} />
              <div className="ev-scrim" />
            </div>
          ))}
        </div>

        {/* progress rail */}
        <div className="ev-rail">
          {EVENTS.map((e, i) => (
            <span 
              key={e.id} 
              className={`cursor-pointer ${i === active ? "on" : ""}`}
              onClick={() => handleRailClick(i)}
              title={`Jump to ${e.category}`}
            >
              {e.num}
            </span>
          ))}
        </div>

        {/* white card — full event content + side image */}
        <div className="minimap" style={{ "--row": `${ROW_H}px` } as React.CSSProperties}>
          <div className="mm-grid">
            <div className="mm-info">
              {EVENTS.map((e, i) => (
                <div key={e.id} ref={(el) => { infoRefs.current[i] = el; }} className="mm-info-item" style={{ transform: `translate3d(0, ${i * 100}%, 0)` }}>
                  <div className="mm-eyebrow">
                    <span className="mm-ic" style={{ background: e.accent }}>{e.icon}</span>
                    Map Stop {e.num} <i>//</i> {e.category}
                  </div>
                  <h3 className="mm-title">{e.title}</h3>
                  <h4 className="mm-headline">{e.headline}</h4>
                  <p className="mm-desc">{e.description}</p>
                  <div className="mm-stats">
                    {e.stats.map((s, k) => (
                      <div className="mm-stat" key={k}>
                        <span className="mm-stat-l">{s.label}</span>
                        <span className="mm-stat-v">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="mm-gallery-btn" 
                    onClick={() => onZoom(e.sideImage)}
                    title={`View ${e.title} Gallery`}
                  >
                    <ImageIcon size={13} />
                    <span>View Gallery</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mm-preview">
              {EVENTS.map((e, i) => (
                <div key={e.id} ref={(el) => { prevRefs.current[i] = el; }} className="mm-preview-item" style={{ transform: `translate3d(0, ${i * 100}%, 0)` }}>
                  <img ref={(el) => { prevImgRefs.current[i] = el; }} src={e.sideImage} alt="" className="ev-prev-parallax" style={{ transform: `translate3d(0, ${-i * 12}px, 0) scale(1.15)` }} />
                  <button className="mm-zoom" style={{ color: e.accent }} onClick={() => onZoom(e.sideImage)} title="View snapshot">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyParallaxGallery({ onOpenIndex }: { onOpenIndex: (idx: number) => void }) {
  const col1 = POLAROIDS.filter((_, i) => i % 3 === 0);
  const col2 = POLAROIDS.filter((_, i) => i % 3 === 1);
  const col3 = POLAROIDS.filter((_, i) => i % 3 === 2);

  const renderFigure = (p: typeof POLAROIDS[number], sticky = false) => {
    const originalIndex = POLAROIDS.findIndex((item) => item.id === p.id);
    return (
      <figure
        key={p.id}
        className={sticky ? "sp-figure sp-figure-sticky" : "sp-figure"}
        onClick={() => onOpenIndex(originalIndex)}
      >
        <img src={p.url} alt={p.caption} loading="lazy" />
      </figure>
    );
  };

  return (
    <section className="sp-section">
      <div className="sp-hero">
        <div className="sp-hero-badge">
          <Sparkles size={14} style={{ color: "#b8933e" }} />
          <span>Interactive Campus Archive</span>
        </div>
        <h2>Campus Memory Archive</h2>
        <p className="sp-hero-sub">
          A curated photographic collection capturing authentic moments, cultural fests, sports cups, and student innovation across our campus grounds.
        </p>
      </div>

      <div className="sp-grid">
        <div className="sp-col">{col1.map((p) => renderFigure(p))}</div>
        <div className="sp-col-wrap">
          <div className="sp-col sp-col-sticky">{col2.map((p) => renderFigure(p, true))}</div>
        </div>
        <div className="sp-col">{col3.map((p) => renderFigure(p))}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function CampusLife() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowRight") setModalIndex((prev) => (prev !== null ? (prev + 1) % POLAROIDS.length : 0));
      if (e.key === "ArrowLeft") setModalIndex((prev) => (prev !== null ? (prev === 0 ? POLAROIDS.length - 1 : prev - 1) : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalIndex]);

  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const activePhoto = modalIndex !== null ? POLAROIDS[modalIndex] : null;

  return (
    <div className="page" id="campus-life">
      <Style />

      <header className="intro">
        <div className="intro-eyebrow"><span className="dot" /> The Living Ecosystem · Interactive Campus Trail</div>
        <h1>Life Outside<br /><span className="hl">The Classroom</span></h1>
        <p className="intro-hint">Scroll to explore events ↓</p>
      </header>

      <EventShowcase onZoom={(url) => {
        const foundIndex = POLAROIDS.findIndex(p => p.url === url);
        if (foundIndex !== -1) setModalIndex(foundIndex);
        else setModalIndex(0);
      }} />

      <StickyParallaxGallery onOpenIndex={(idx) => setModalIndex(idx)} />

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div className="modal" onClick={() => setModalIndex(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img">
              <img src={activePhoto.url} alt={activePhoto.caption} />
              
              <button className="modal-x" onClick={() => setModalIndex(null)} title="Close">
                <Plus size={18} style={{ transform: "rotate(45deg)" }} />
              </button>

              <button 
                className="modal-nav-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalIndex((prev) => (prev !== null ? (prev === 0 ? POLAROIDS.length - 1 : prev - 1) : 0));
                }}
                title="Previous Photo"
              >
                <ChevronLeft size={22} />
              </button>

              <button 
                className="modal-nav-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalIndex((prev) => (prev !== null ? (prev + 1) % POLAROIDS.length : 0));
                }}
                title="Next Photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="modal-foot">
              <div className="modal-foot-info">
                <div className="modal-foot-meta">
                  <span className="modal-foot-tag">{activePhoto.tag}</span>
                  <span className="modal-foot-year">{activePhoto.year}</span>
                </div>
                <h4>{activePhoto.caption}</h4>
              </div>
              
              <div className="modal-foot-controls">
                <span className="modal-counter">
                  {modalIndex! + 1} of {POLAROIDS.length}
                </span>
                <button className="modal-close" onClick={() => setModalIndex(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STYLES — 100% Consistent White Theme & High Polish                */
/* ------------------------------------------------------------------ */
function Style() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,600;0,8..60,700;1,8..60,600;1,8..60,700&display=swap');

.page{ --navy:#0B2545; --cream:#FFFFFF; --gold:#B8933E;
  font-family:Inter,sans-serif; color:var(--navy); background:#FFFFFF; }
.page *{ box-sizing:border-box; margin:0; padding:0; }

/* intro */
.intro{ min-height:70vh; display:flex; flex-direction:column; justify-content:center; padding:0 6vw; background:#FFFFFF; }
.intro-eyebrow{ display:flex; align-items:center; gap:.55rem; font-family:Inter,sans-serif;
  font-size:.72rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:#0f172a; }
.intro-eyebrow .dot{ width:8px; height:8px; border-radius:50%; background:#0f172a; }
.intro h1{ font-size:clamp(2.6rem,8vw,6rem); font-weight:700; line-height:1.02; text-transform:uppercase; letter-spacing:-.02em; margin-top:1.2rem; color:#0f172a; }
.intro .hl{ position:relative; }
.intro .hl::after{ content:""; position:absolute; left:0; right:0; bottom:-.1em; height:.14em; background:var(--gold); border-radius:2px; }
.intro-hint{ margin-top:2.5rem; font-family:Inter,sans-serif; font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; color:#64748b; animation:bob 1.8s ease-in-out infinite; }
@keyframes bob{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(6px);} }

/* event showcase */
.ev-scrim{ position:absolute; inset:0; background:linear-gradient(90deg, rgba(6,8,14,.35), rgba(6,8,14,0) 55%); }

.ev-image{ will-change:transform; }
.ev-img-parallax{ will-change:transform; }

.ev-rail{ position:absolute; top:50%; right:4vw; transform:translateY(-50%); display:flex; flex-direction:column; gap:0.75rem; z-index:6; }
.ev-rail span{ font-family:Inter,sans-serif; font-size:.62rem; font-weight:700; color:rgba(255,255,255,.45);
  letter-spacing:.05em; transition:.3s; text-shadow:0 1px 6px rgba(0,0,0,.4); }
.ev-rail span.on{ color:#fff; transform:scale(1.25); }

/* white card */
.minimap{ position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  width:min(960px,86vw); background:#fff; padding:2.2rem 2.4rem; z-index:5; box-shadow:0 30px 90px rgba(0,0,0,.12); border-radius:1.5rem; border:1px solid rgba(15,23,42,0.08); }
.mm-grid{ position:relative; height:var(--row, 380px); display:flex; gap:2.2rem; }
.mm-info{ position:relative; flex:1.35; height:var(--row, 380px); overflow:hidden; }
.mm-preview{ position:relative; width:34%; height:var(--row, 380px); overflow:hidden; }
.mm-info-item{ position:absolute; left:0; right:0; top:0; height:100%;
  display:flex; flex-direction:column; gap:.75rem; will-change:transform; }
.mm-preview-item{ position:absolute; left:0; right:0; top:0; height:100%; overflow:hidden; will-change:transform; }
.mm-preview-item img{ width:100%; height:100%; object-fit:cover; display:block; will-change:transform; }
.mm-zoom{ position:absolute; bottom:.75rem; right:.75rem; width:38px; height:38px; border:none; cursor:pointer;
  background:#fff; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,.15); display:flex; align-items:center; justify-content:center; transition:.2s; }
.mm-zoom:hover{ transform:scale(1.1); }

.mm-eyebrow{ display:flex; align-items:center; gap:.55rem; font-family:Inter,sans-serif;
  font-size:.66rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--navy); }
.mm-eyebrow i{ opacity:.5; font-style:normal; }
.mm-ic{ width:26px; height:26px; border-radius:8px; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 10px rgba(11,37,69,.25); }
.mm-title{ font-size:clamp(1.25rem,2.5vw,1.7rem); font-weight:700; line-height:1.08; text-transform:uppercase; letter-spacing:-.015em; color:#0a0a0a; }
.mm-headline{ font-size:.92rem; font-weight:600; color:var(--navy); }
.mm-desc{ font-size:.82rem; font-weight:400; line-height:1.5; color:#64748b;
  display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
.mm-stats{ display:flex; gap:1.75rem; margin-top:.15rem; }
.mm-stat{ display:flex; flex-direction:column; gap:.2rem; }
.mm-stat:not(:first-child){ border-left:1px solid #e5e7eb; padding-left:1.75rem; }
.mm-stat-l{ font-family:Inter,sans-serif; font-size:.55rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8; }
.mm-stat-v{ font-size:.9rem; font-weight:700; color:var(--navy); }
.mm-gallery-btn{ display:inline-flex; align-items:center; gap:.4rem; margin-top:.45rem; padding:.45rem .95rem; background:#0B2545; color:#ffffff; border:none; border-radius:8px; font-family:Inter,sans-serif; font-size:.72rem; font-weight:600; letter-spacing:.02em; cursor:pointer; transition:all .2s ease; box-shadow:0 3px 10px rgba(11,37,69,.2); width:fit-content; }
.mm-gallery-btn:hover{ background:#123a6b; transform:translateY(-1px); box-shadow:0 5px 15px rgba(11,37,69,.3); }
.mm-loc{ margin-top:auto; font-family:Inter,sans-serif; font-size:.6rem; font-weight:700; letter-spacing:.05em; text-transform:uppercase; color:var(--gold); }
.mm-loc span{ color:#94a3b8; }

@media (max-width:768px){
  .minimap{ top:52%; bottom:auto; left:50%; transform:translate(-50%,-50%); width:min(90vw, 390px); padding:1.15rem 1.1rem; --row:355px; box-shadow:0 20px 60px rgba(0,0,0,.25); border-radius:1.35rem; }
  .mm-grid{ gap:.65rem; display:flex; flex-direction:column-reverse; height:var(--row); }
  .mm-preview{ display:flex; justify-content:center; align-items:center; width:100%; height:110px; border-radius:12px; overflow:hidden; flex-shrink:0; position:relative; }
  .mm-preview img{ width:100%; height:100%; object-fit:cover; object-position:center; }
  .mm-info{ width:100%; flex:1; height:calc(var(--row) - 110px - .65rem); overflow:hidden; }
  .ev-rail{ top:1.25rem; bottom:auto; left:50%; right:auto; transform:translateX(-50%); flex-direction:row; gap:0.65rem; background:rgba(15,15,20,0.88); backdrop-filter:blur(12px); padding:0.45rem 0.9rem; width:auto; height:auto; display:flex; align-items:center; justify-content:center; border-radius:999px; border:1px solid rgba(255,255,255,0.25); box-shadow:0 10px 30px rgba(0,0,0,0.45); z-index:25; }
  .ev-rail span{ font-size:.72rem; font-weight:700; padding:0.12rem 0.35rem; letter-spacing:0.03em; }
  .ev-rail span.on, .ev-rail span:hover{ transform:scale(1.15); color:#fff; font-weight:800; }
  .mm-eyebrow{ font-size:.56rem; gap:.35rem; }
  .mm-ic{ width:22px; height:22px; border-radius:6px; }
  .mm-title{ font-size:1.05rem; line-height:1.12; margin-top:.1rem; }
  .mm-headline{ font-size:.74rem; margin-top:.1rem; }
  .mm-desc{ font-size:.7rem; line-height:1.35; -webkit-line-clamp:2; margin-top:.15rem; }
  .mm-stats{ gap:.8rem; margin-top:.25rem; flex-wrap:wrap; }
  .mm-stat:not(:first-child){ border-left:none; padding-left:0; }
  .mm-stat-l{ font-size:.5rem; }
  .mm-stat-v{ font-size:.7rem; }
  .mm-gallery-btn{ padding:0.32rem 0.72rem; font-size:0.65rem; margin-top:0.3rem; border-radius:6px; }
  .mm-loc{ font-size:.52rem; margin-top:auto; }
  .mm-zoom{ width:32px; height:32px; bottom:.5rem; right:.5rem; border-radius:8px; }
}

/* ------------------------------------------------------------------ */
/*  STICKY PARALLAX GALLERY                                           */
/* ------------------------------------------------------------------ */
html, body, .page, .sp-section {
  overflow: visible;
}

.sp-section { background: #ffffff; color: #0f172a; padding: 3rem 0 5rem; }

.sp-hero { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2.8rem 2rem 3.8rem; text-align: center; }
.sp-hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; font-family: Inter, sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #0f172a; border: 1px solid rgba(15, 23, 42, 0.12); padding: 0.45rem 1.25rem; border-radius: 999px; background: #f8fafc; margin-bottom: 1.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
.sp-hero h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; color: #0f172a; max-width: 820px; margin: 0 auto; }
.sp-hero-sub { margin-top: 1rem; font-size: 1.15rem; color: #64748b; max-width: 640px; line-height: 1.6; font-weight: 400; }

.sp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 0 0.5rem; max-width: 1400px; margin: 0 auto; align-items: start; }

.sp-col { display: flex; flex-direction: column; gap: 0.5rem; }
.sp-col:not(.sp-col-sticky) .sp-figure { width: 100%; height: 24rem; }

.sp-col-wrap { position: relative; height: 100%; }
.sp-col-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 1.5rem;
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.sp-col-sticky .sp-figure { width: 100%; flex: 1 1 0; min-height: 0; margin-bottom: 0; }

.sp-figure { cursor: pointer; overflow: hidden; border-radius: 0.75rem; background: #f1f5f9; }
.sp-figure img { width: 100%; height: 100%; object-fit: cover; display: block; vertical-align: bottom; transition: transform 0.3s ease; }
.sp-figure:hover img { transform: scale(1.04); }

@media (max-width: 1024px) {
  .sp-grid { grid-template-columns: 1fr 1fr 0.85fr; gap: 0.4rem; padding: 0 0.4rem; }
  .sp-col:not(.sp-col-sticky) .sp-figure { height: 18rem; }
  .sp-col-sticky { top: 1rem; height: calc(100vh - 2rem); gap: 0.4rem; }
}

@media (max-width: 640px) {
  .sp-hero { padding: 2rem 1.25rem 2.5rem; }
  .sp-hero h2 { font-size: clamp(1.5rem, 6.5vw, 2.2rem); }
  .sp-hero-sub { font-size: 0.98rem; }
  .sp-grid { grid-template-columns: 1fr 1fr 0.8fr; gap: 0.35rem; }
  .sp-col:not(.sp-col-sticky) .sp-figure { height: 12rem; }
  .sp-col-sticky { top: 0.75rem; height: calc(100vh - 1.5rem); gap: 0.35rem; }
}
/* Modal Lightbox */
.modal { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1.5rem; animation: modalFade 0.2s ease; }
@keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }

.modal-card { background: #ffffff; border-radius: 24px; overflow: hidden; max-width: 840px; width: 100%; box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.2); position: relative; }
.modal-img { position: relative; aspect-ratio: 16 / 10; background: #0f172a; overflow: hidden; }
.modal-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

.modal-x { position: absolute; top: 1.25rem; right: 1.25rem; width: 40px; height: 40px; border: none; cursor: pointer; border-radius: 50%; background: rgba(15, 23, 42, 0.75); color: #ffffff; backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 10; transition: transform 0.2s ease; }
.modal-x:hover { transform: scale(1.1); background: #0f172a; }

.modal-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; border: none; background: rgba(15, 23, 42, 0.65); color: #ffffff; backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 5; }
.modal-nav-btn:hover { background: #0f172a; transform: translateY(-50%) scale(1.1); }
.modal-nav-btn.prev { left: 1rem; }
.modal-nav-btn.next { right: 1rem; }

.modal-foot { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 1.5rem 2rem; background: #ffffff; border-top: 1px solid #f1f5f9; }
.modal-foot-info { flex: 1; }
.modal-foot-meta { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.35rem; }
.modal-foot-tag { font-family: Inter, sans-serif; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: #0f172a; background: #f1f5f9; padding: 0.2rem 0.6rem; border-radius: 6px; }
.modal-foot-year { font-family: Inter, sans-serif; font-size: 0.7rem; font-weight: 700; color: #94a3b8; }
.modal-foot-info h4 { font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0; line-height: 1.3; }

.modal-foot-controls { display: flex; align-items: center; gap: 1rem; }
.modal-counter { font-family: Inter, sans-serif; font-size: 0.75rem; font-weight: 700; color: #64748b; }
.modal-close { padding: 0.6rem 1.25rem; background: #0f172a; color: #ffffff; border: none; cursor: pointer; border-radius: 12px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; transition: background 0.2s ease; }
.modal-close:hover { background: #1e293b; }

@media (max-width: 640px) {
  .modal-card { border-radius: 16px; }
  .modal-img { aspect-ratio: 4 / 3; }
  .modal-foot { padding: 1.25rem; flex-direction: column; align-items: flex-start; gap: 1rem; }
  .modal-foot-controls { width: 100%; justify-content: space-between; }
  .modal-nav-btn { width: 38px; height: 38px; }
}
`}</style>
  );
}
