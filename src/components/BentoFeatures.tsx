import { useRef, useState } from 'react';
import Reveal from './Reveal';

export default function BentoFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / (container.clientWidth * 0.85)); // 0.85 because of min-w-[85vw]
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 lg:py-32 bg-background px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-20">
            <div className="w-full md:w-1/5">
              <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold leading-relaxed">
                Keunggulan <br /> Teruji
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <h2 className="text-4xl md:text-5xl font-display font-light text-foreground leading-[1.1]">
                Performa yang Layak Anda Percayai
              </h2>
            </div>
            <div className="w-full md:w-2/5 md:pl-12">
              <p className="text-foreground text-sm leading-relaxed">
                Kami memilih serat terbaik dan menggunakan rekayasa tekstil canggih untuk memastikan tim Anda tampil sempurna, merasa nyaman, dan bekerja maksimal di setiap giliran kerja.
              </p>
            </div>
          </div>
        </Reveal>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid flex-nowrap sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end overflow-x-auto overflow-y-hidden sm:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          <Reveal className="min-w-[85vw] sm:min-w-0 snap-center">
            <div className="bg-brand-100 overflow-hidden h-[450px] sm:h-[400px] relative shadow-sm">
              <img 
                src="/smallsection/DSC02026 edit.jpg" 
                alt="Quality textile detail" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal className="min-w-[85vw] sm:min-w-0 snap-center">
            <div className="bg-brand-100 overflow-hidden h-[450px] sm:h-[320px] relative shadow-sm">
              <img 
                src="/smallsection/JPM_3330.png" 
                alt="Professional textile detail" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 h-auto sm:h-[400px] justify-between min-w-[85vw] sm:min-w-0 snap-center">
            <Reveal className="h-full">
              <div className="bg-brand-50 h-[450px] sm:h-[220px] shadow-sm relative overflow-hidden">
                  <img 
                    src="/smallsection/DSC02126 edit.jpg" 
                    alt="Sumber Seragam Model" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
              </div>
            </Reveal>
            
            <Reveal className="h-full hidden sm:block">
              <div className="bg-brand-100 h-[156px] shadow-sm relative overflow-hidden">
                  <img 
                    src="/smallsection/DSC01853 edit.jpg" 
                    alt="Textile focus" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
              </div>
            </Reveal>
          </div>

          <Reveal className="min-w-[85vw] sm:min-w-0 snap-center self-stretch sm:self-end">
            <div className="bg-brand-200 overflow-hidden h-[450px] sm:h-[450px] relative shadow-sm">
              <img 
                src="/smallsection/JPM_4418.png" 
                alt="Brand Model" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden flex-col items-center gap-2 animate-pulse mt-12">
          <div className="flex items-center gap-3 text-brand-900/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" className="rotate-90 origin-center" />
            </svg>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Swipe</span>
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          {[...Array(4)].map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-brand-900' : 'w-2 bg-brand-200'
              }`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
