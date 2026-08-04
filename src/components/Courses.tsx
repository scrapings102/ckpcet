import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useClipReveal } from '../hooks/useClipReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: 'Computer Engineering & Information Technology',
    desc: '4-year professional undergraduate B.E. programs focusing on Artificial Intelligence, Machine Learning, Web Architecture, and Cloud Systems. Intake: 180+ seats.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-2',
  },
  {
    title: 'Electrical Engineering',
    desc: 'B.E. program covering power systems, control systems, electrical machines, and modern renewable energy technologies.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1 md:row-span-2',
  },
  {
    title: 'Mechanical Engineering',
    desc: 'B.E. program centering on thermodynamics, machine design, CAD/CAM modeling, workshop practice, and modern thermal systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1',
  },
  {
    title: 'Civil Engineering & Infrastructure',
    desc: 'Professional course specializing in structural analysis, highway planning, environmental hygiene, and green architectural projects.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
];

export default function Courses() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const revealRef = useClipReveal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background watermark
      if (bgTextRef.current) {
        gsap.to(bgTextRef.current, {
          yPercent: 35,
          ease: 'none', force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax header
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          yPercent: -10,
          ease: 'none', force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="courses" 
      className="py-32 bg-white text-navy relative overflow-hidden border-t border-navy/5"
    >
      {/* Gentle Floating Watermark Background Elements */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/4 left-0 w-full flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03] select-none will-change-transform transform-gpu"
      >
        <span className="text-[24vw] font-display font-bold whitespace-nowrap tracking-tighter uppercase text-navy">
          ACADEMICS
        </span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
      >
        <div 
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-navy/60 font-semibold mb-6">
              Academic Excellence
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-navy leading-[1.1] tracking-tight">
              Programs designed for the <span className="italic text-navy/80">future</span>.
            </h3>
          </div>
          <button className="flex items-center gap-4 text-sm uppercase tracking-widest text-navy/80 hover:text-navy transition-colors group cursor-pointer">
            View All Programs
            <span className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:border-navy group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group overflow-hidden rounded-2xl ${course.colSpan} ${course.rowSpan}`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              {i !== 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              )}
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">{course.title}</h4>
                  <p className="text-white/80 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {course.desc}
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white/20">
                <ArrowRight size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
