import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/indo_textile_factory_cta_bg_1775472934837.png" 
          alt="Indonesian Textile Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/60" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-900 via-brand-900/50 to-transparent h-[50%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-8 border-b border-white/10 pb-8 inline-block px-12">
          Rasakan Kualitasnya Sendiri
        </h2>
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-sans font-light">
          Berhenti membaca dan mulailah merasakan. Ajukan buku sampel kain Sumber Seragam Anda hari ini untuk menguji tekstur, daya tahan, dan kecocokan warna yang tepat untuk brand Anda.
        </p>
        <Link 
          to="/contact"
          className="bg-transparent border border-white text-white font-bold py-5 px-12 transition-all duration-300 uppercase tracking-[0.3em] text-[11px] sm:text-xs inline-flex items-center gap-4 hover:bg-white hover:text-brand-900 shadow-xl"
        >
          Hubungi Kami
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
