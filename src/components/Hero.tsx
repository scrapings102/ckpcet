import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  loaded?: boolean;
  onQuotesComplete?: () => void;
  onAnimationComplete?: () => void;
  isSubPage?: boolean;
  onOpenAdmissions?: () => void;
}

const HERO_IMAGE = "https://ckpcet.ac.in/img/home-page/slider/si-01.jpg";

// Tablet and mobile band — covers all touch/mobile/tablet screens.
const TABLET_MEDIA_QUERY = "(max-width: 1024px)";

/**
 * Splits an element's text content into individual letter <span>s for
 * GSAP letter-by-letter stagger animation, keeping words intact for dynamic UI responsiveness.
 */
function splitToLetters(el: HTMLElement | null): HTMLSpanElement[] {
  if (!el) return [];
  const rawText = el.textContent || "";
  const cleanText = rawText.trim();
  el.setAttribute("aria-label", cleanText);
  el.innerHTML = "";

  const letters: HTMLSpanElement[] = [];
  const words = cleanText.split(/\s+/);

  words.forEach((word, wordIndex) => {
    // Word container prevents mid-word breaks across lines
    const wordSpan = document.createElement("span");
    wordSpan.className = "inline-block whitespace-nowrap";

    [...word].forEach((char) => {
      const letterSpan = document.createElement("span");
      letterSpan.className = "letter inline-block";
      letterSpan.textContent = char;
      letterSpan.setAttribute("aria-hidden", "true");
      wordSpan.appendChild(letterSpan);
      letters.push(letterSpan);
    });

    el.appendChild(wordSpan);

    // Add space between words for fluid, dynamic line wrapping
    if (wordIndex < words.length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.className = "inline-block";
      spaceSpan.innerHTML = "&nbsp;";
      spaceSpan.setAttribute("aria-hidden", "true");
      el.appendChild(spaceSpan);
    }
  });

  return letters;
}

export default function Hero({ loaded = true, onQuotesComplete, onAnimationComplete, isSubPage }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubPage) {
      onAnimationComplete?.();
      onQuotesComplete?.();
    }
  }, [isSubPage]);

  // ---------- Preloader intro: left-to-right image wipe reveal ----------
  useEffect(() => {
    if (!loaded) return;
    if (isSubPage) return; // Skip the intro animation entirely on subpages
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const quoteLetters = splitToLetters(quoteTextRef.current);

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          onAnimationComplete?.();
          onQuotesComplete?.();
        },
      });

      // ---------- 1. LEFT-TO-RIGHT IMAGE WIPE REVEAL ----------
      tl.set(imageWrapRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
      }).to(imageWrapRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "power4.inOut",
      });

      if (heroImgRef.current) {
        tl.fromTo(
          heroImgRef.current,
          { scale: 1.3, filter: "blur(10px) brightness(0.5)" },
          {
            scale: 1.05,
            filter: "blur(0px) brightness(1)",
            duration: 1.7,
            ease: "power3.out",
          },
          0,
        );
      }

      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0.6, duration: 1.1 },
        0.1,
      ).fromTo(
        gridRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 0.3, scale: 1, duration: 1.1 },
        0.1,
      );

      // ---------- 2. QUOTE TEXT (starts once wipe is ~80% done) ----------
      const QUOTE_START = 0.8;

      tl.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        QUOTE_START,
      );

      if (quoteLetters.length) {
        tl.fromTo(
          quoteLetters,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
            stagger: 0.006,
          },
          QUOTE_START + 0.1,
        );
      }

      // ---------- 3. SCROLL INDICATOR ----------
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power3.out" },
        ">-0.15",
      );

      // ---------- Continuous subtle ambient zoom ----------
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          scale: 1.08,
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }

      // ---------- Mouse parallax effect (desktop only) ----------
      const isTablet = window.matchMedia(TABLET_MEDIA_QUERY).matches;
      if (!isTablet && heroImgRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current) return;
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          const xPos = (clientX / innerWidth - 0.5) * 20;
          const yPos = (clientY / innerHeight - 0.5) * 20;

          if (heroImgRef.current) {
            gsap.to(heroImgRef.current, {
              x: xPos,
              y: yPos,
              duration: 1.5,
              ease: "power2.out",
            });
          }

          gsap.to(gridRef.current, {
            x: -xPos * 0.5,
            y: -yPos * 0.5,
            duration: 1.5,
            ease: "power2.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, [loaded, isSubPage]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-navy"
    >
      {/* Main Hero Background Stack */}
      <div
        ref={imageWrapRef}
        className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-black"
      >
        <img
          ref={heroImgRef}
          src={HERO_IMAGE}
          alt="C.K. Pithawalla College Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        {/* Translucent gradient overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-navy/70 via-black/40 to-navy/90"
        />

        {/* Tech Grid Overlay */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 pointer-events-none">
        <div className="flex-grow min-h-[40px]" />

        {/* Center/Bottom content: Styled Translucent Quote Card matching the screenshot */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto pb-2 sm:pb-4 pointer-events-auto">
          <div
            ref={quoteRef}
            className="w-full max-w-4xl mx-auto flex flex-col items-center select-none pointer-events-none mb-2 sm:mb-4"
          >
            {/* Premium compact styled Tagline container */}
            <div className="hero-card relative w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
              {/* Elegant luxury gold corner accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#D4AF37]/50" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#D4AF37]/50" />

              {/* Quote Marks */}
              <span className="absolute -top-3 left-3 text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37]/45 pointer-events-none select-none">“</span>
              <span className="absolute -bottom-4 right-3 text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37]/45 pointer-events-none select-none">”</span>

              <p
                ref={quoteTextRef}
                className="text-[11px] min-[360px]:text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16px] font-sans font-medium text-white/95 italic leading-snug sm:leading-relaxed tracking-wide text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] px-2"
              >
                A legacy of engineering and technology excellence in Surat. Inspiring and preparing the next generation of innovators since 1998.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="flex flex-col items-center gap-1.5 mt-6 pointer-events-none select-none"
          >
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/80 font-sans font-semibold drop-shadow-md animate-pulse">
              Scroll to explore
            </span>
            <div className="w-[1px] h-5 sm:h-7 bg-gradient-to-b from-[#E5B224] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
