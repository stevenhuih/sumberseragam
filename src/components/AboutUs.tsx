import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-background px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <Reveal className="order-2 lg:order-1 flex flex-col items-start pr-0 lg:pr-8">
          <h2 className="text-5xl font-display font-light text-brand-900 mb-3">
            Misi Kami
          </h2>
          
          <h3 className="text-xl md:text-2xl font-medium text-brand-600 mb-6">
            Dirancang untuk Keunggulan. Ditenun untuk Kenyamanan.
          </h3>

          <p className="text-brand-600/80 leading-relaxed text-[15px] font-light mb-10 max-w-[540px]">
            Dipercaya oleh Brand Global Sejak 2000. Seragam tim Anda harus memberdayakan mereka, bukan menghambat. Selama lebih dari dua dekade, Sanso (Uniform Source) telah memasok kain premium berkualitas tinggi ke berbagai bisnis di Indonesia, Singapura, dan Timur Tengah. Dengan lebih dari 378 pilihan warna eksklusif, kami menyediakan tekstil yang Anda butuhkan untuk membangun identitas profesional yang seragam dengan kenyamanan tak tertandingi.
          </p>

          <Link to="/contact" className="inline-block px-10 py-4 border border-brand-900 text-brand-900 text-[11px] font-bold uppercase tracking-[0.3em] font-sans transition-all duration-300 hover:bg-brand-900 hover:text-white mt-4">
            Hubungi Kami
          </Link>
        </Reveal>

        <Reveal animation="zoom" className="order-1 lg:order-2">
          <div className="relative aspect-4/3 overflow-hidden shadow-lg border border-brand-100">
            <img 
              src="/mission-image.png" 
              alt="Sumber Seragam Mission" 
              className="object-cover w-full h-full"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
