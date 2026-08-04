import React, { useState } from 'react';
import logoImg from '../ckpcmc-logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function CkpcmcLogo({ className = 'h-12 w-auto', showText = true }: LogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className="flex items-center gap-3 select-none">
      {!useFallback ? (
        <img
          src={logoImg}
          className={`${className} hover:scale-105 transition-transform duration-500 object-contain`}
          alt="CKPCET Logo"
          onError={() => {
            // Fallback to beautiful high-fidelity SVG path if image is empty or invalid
            setUseFallback(true);
          }}
        />
      ) : (
        /* High-fidelity Vector SVG replica of the CKPCET logo */
        <svg
          className={`${className} hover:scale-105 transition-transform duration-500`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CKPCET Logo"
        >
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="46" stroke="#0F4C81" strokeWidth="3" fill="#F0F4F8" />
          <circle cx="50" cy="50" r="41" stroke="#0B243B" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Circular cog/wheel spikes representing industrial & technological computer progress */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <line
                key={i}
                x1="50"
                y1="4"
                x2="50"
                y2="7"
                transform={`rotate(${angle} 50 50)`}
                stroke="#0F4C81"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Inner circle border */}
          <circle cx="50" cy="50" r="28" stroke="#0F4C81" strokeWidth="2" fill="#D2E0EE" />
          
          {/* Core Lotus petal representation inside the circle */}
          {/* Center lotus blossom (crafted elegantly using bezier curves) */}
          <path
            d="M50 35 C42 42, 45 61, 50 67 C55 61, 58 42, 50 35 Z"
            fill="#0F4C81"
            opacity="0.9"
          />
          <path
            d="M50 48 C37 45, 36 60, 44 65 C48 62, 49 53, 50 48 Z"
            fill="#0B243B"
            opacity="0.8"
          />
          <path
            d="M50 48 C63 45, 64 60, 56 65 C52 62, 51 53, 50 48 Z"
            fill="#0B243B"
            opacity="0.8"
          />
          <path
            d="M50 53 C32 55, 38 70, 48 69 C49 65, 49 58, 50 53 Z"
            fill="#0F4C81"
            opacity="0.75"
          />
          <path
            d="M50 53 C68 55, 62 70, 52 69 C51 65, 51 58, 50 53 Z"
            fill="#0F4C81"
            opacity="0.75"
          />

          {/* The Torch / Sun flame rising from lotus */}
          <path
            d="M47 38 C47 31, 50 25, 50 22 C50 25, 53 31, 53 38 Z"
            fill="#2563EB"
          />
          <circle cx="50" cy="27" r="2.5" fill="#E2E8F0" />

          {/* Tiny stars surrounding content representing stellar educational guidance */}
          <circle cx="28" cy="35" r="1" fill="#0F4C81" />
          <circle cx="72" cy="35" r="1" fill="#0F4C81" />
          <circle cx="28" cy="65" r="1" fill="#0F4C81" />
          <circle cx="72" cy="65" r="1" fill="#0F4C81" />
        </svg>
      )}
      {showText && (
        <div className="flex flex-col text-left font-sans tracking-tight leading-none">
          <span className="text-[15px] md:text-[17px] font-bold text-white tracking-widest uppercase">
            CKPCET
          </span>
          <span className="text-[8px] md:text-[9.5px] font-bold text-white/70 tracking-tight mt-0.5 uppercase">
            Pithawalla College of Engineering
          </span>
        </div>
      )}
    </div>
  );
}
