export default function Hero() {
  return (
    <div className="bg-[#111]">
      <div className="relative min-h-[95vh] w-full overflow-hidden bg-black">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          alt="Modern Textile Showroom"
          src="/hero-image.png"
          fetchPriority="high"
          decoding="sync"
        />

        <div className="absolute inset-0 bg-black/40 z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent z-0" />

        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-16 md:px-24 h-full min-h-[95vh]">
          <div className="max-w-2xl text-white">
            <h3 className="text-sm sm:text-lg tracking-[0.2em] uppercase font-medium mb-4 fade-in-up text-white/90">
              Kini saatnya
            </h3>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-light mb-6 leading-none fade-in-up-delayed">
              UPGRADE<br/>SERAGAM
            </h1>
            
            <p className="text-sm sm:text-base mb-10 leading-relaxed text-white/80 font-light max-w-lg md:max-w-md fade-in-up-stagger">
              Membangun landasan bagi pemikiran cemerlang, para pembuat yang berani, dan jiwa-jiwa bijak. Kami memastikan Anda mendapatkan kain yang dibuat untuk bertahan lama.
            </p>

            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-3 text-xs tracking-widest uppercase font-semibold border border-white/80 text-white hover:bg-white hover:text-black transition-colors fade-in-up-stagger"
            >
              Produk Kami
            </button>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <div className="bg-background w-28 sm:w-32 h-10 sm:h-12 rounded-t-[3rem] flex flex-col items-center justify-center pt-2 shadow-[0_-5px_20px_rgba(0,0,0,0.06)] border-t border-x border-brand-100/20">
              <svg 
                className="w-3.5 h-3.5 text-brand-900/60 mb-0.5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-[7.5px] sm:text-[8px] font-bold tracking-[0.3em] uppercase text-brand-900/30 font-sans text-center leading-none">
                Gulir
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
