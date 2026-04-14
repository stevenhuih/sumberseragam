import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const catalogs = [
  { id: 1, name: "Sumtex Japan Drill", image: "/catalog/Sumtex Japan Drill.png", headline: "Kesempurnaan Kelas Berat.", desc: "Tersedia dalam 150 warna dan didukung oleh penasihat teknis dari Kyoto, ini adalah kain lapangan terbaik untuk Satpam, Polri, dan Pemda." },
  { id: 2, name: "Sumtex Oxford", image: "/catalog/Sumtex Oxford Art 888.png", headline: "Elegan Tahan Tumpahan.", desc: "Dilengkapi teknologi Water Repellent (Anti Air) dalam 32 warna. Menjaga tim medis, perhotelan, dan eksekutif korporat Anda tetap rapi dan kering sepanjang hari." },
  { id: 3, name: "Sumtex Ribstop", image: "/catalog/Sumtex Ribstop.png", headline: "Ketahanan Robek Taktis.", desc: "Tenunan kotak-kotak yang diperkuat dalam 41 warna, dibuat untuk lingkungan ekstrem. Pilihan tepat bagi tim Basarnas atau taktis di lapangan." },
  { id: 4, name: "Sumtex Plat #6000", image: "/catalog/Sumtex Plat.png", headline: "Standar Warisan.", desc: "Memenuhi kebutuhan seragam massal sejak tahun 2000. Dengan 84 warna dan motif kotak klasik, ini adalah pilihan paling andal untuk instansi pendidikan dan pemerintah." },
  { id: 5, name: "Oxford Art. 777", image: "/catalog/Sumtex Oxford Art 777.png", headline: "Kenyamanan Kualitas Halus.", desc: "Kain Oxford kualitas original 100% yang menawarkan hasil akhir yang rapi, terstruktur, dan sangat sejuk dalam 15 warna profesional. Pilihan ideal untuk kemeja korporat premium." },
  { id: 6, name: "Unione Drill", image: "/catalog/Unione Drill.png", headline: "Campuran Poli-Viskos.", desc: "Dirancang dengan pemrosesan teknologi tinggi untuk kenyamanan maksimal dan rasa sejuk saat dipakai, tersedia dalam 378 pilihan warna eksklusif yang tiada tanding." },
  { id: 7, name: "Granmax Tropical", image: "/catalog/Granmax Tropical.png", headline: "Kenyamanan Bernapas.", desc: "Diakui sebagai \"Pelopor Kain Seragam Halal,\" material ringan dan tahan pudar ini hadir dalam 153 warna. Dirancang khusus untuk menjaga profesionalisme tim." },
  { id: 8, name: "Japan Matt #2020", image: "/catalog/Granmax Japan Matt.png", headline: "Standar Edukasi.", desc: "Menampilkan hasil akhir matte profesional and 19 warna eksklusif yang disesuaikan secara eksplisit dengan kode sekolah nasional Indonesia. Kain bersertifikat Halal." },
  { id: 9, name: "Premium SUM", image: "/catalog/SUM By Inma Premium.png", headline: "Kemewahan Jepang.", desc: "Dibuat dengan teknik benang pintal Jepang yang dipatenkan untuk rasa \"Super Silky Rich\", ketahanan cuci yang sangat baik, dan bebas bulu (zero pilling) dalam 40 warna pilihan." }
];

export default function CatalogGrid() {
  const [selectedProduct, setSelectedProduct] = useState<typeof catalogs[0] | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProduct]);

  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(catalogs.length / itemsPerPage);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPage((prev) => {
        if (direction === 'next') return (prev + 1) % totalPages;
        return (prev - 1 + totalPages) % totalPages;
      });
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 400); 
  };

  const handlePageJump = (pageIndex: number) => {
    if (isAnimating || pageIndex === currentPage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 400);
  };

  const displayedItems = catalogs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="catalog" className="py-32 bg-background px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h4 className="text-[10px] uppercase font-bold tracking-[0.5em] text-brand-400 mb-4">Produk Kami</h4>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-brand-900 inline-block tracking-tight mb-8">
            Kain Khusus Industri
          </h2>
          <p className="text-brand-600/80 leading-relaxed text-[15px] font-light max-w-2xl mx-auto">
            Berhentilah membuang uang untuk seragam yang kaku dan cepat pudar. Dari tenunan taktis kelas berat hingga bahan korporat yang sejuk, tekstil performa tinggi kami dibuat untuk bertahan lama. 100% tersertifikasi SNI, TKDN, dan Halal. Jelajahi katalog kepatuhan kami di bawah ini.
          </p>
        </div>
        
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8 mb-6">
            <button 
              onClick={() => handlePageChange('prev')}
              className="w-10 h-10 rounded-full bg-[#212529] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md focus:outline-none"
              aria-label="Previous Page"
            >
              <svg className="w-5 h-5 pr-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageJump(idx)}
                  className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
                    currentPage === idx 
                      ? 'w-8 bg-[#212529]' 
                      : 'w-2 bg-[#212529]/30 hover:bg-[#212529]/50'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => handlePageChange('next')}
              className="w-10 h-10 rounded-full bg-[#212529] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md focus:outline-none"
              aria-label="Next Page"
            >
              <svg className="w-5 h-5 pl-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        <div className="mt-2 text-center">
          <div className="min-h-[600px]">
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pt-8 pb-12 px-4 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu ${
                isAnimating ? 'opacity-0 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100 blur-0'
              }`}
            >
              {displayedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group/card cursor-pointer flex flex-col"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="relative w-full aspect-7/10 bg-[#ECE8D9] z-10 overflow-hidden rounded-2xl group-hover/card:rounded-b-none shadow-[0_4px_12px_rgba(0,0,0,0.08)] transform-gpu transition-all duration-500 ease-out group-hover/card:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                    <div className="w-full h-full p-2 sm:p-2.5 pt-2.5 transition-transform duration-500 ease-out group-hover/card:-translate-y-2">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover object-top rounded-xl group-hover/card:rounded-b-none shadow-[0_2px_8px_rgba(0,0,0,0.1)] transform-gpu transition-all duration-500 ease-out group-hover/card:scale-95"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-full left-0 w-full bg-[#5a5a5a] z-0 opacity-0 translate-y-[-16px] group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-out shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] pointer-events-none transform-gpu rounded-b-2xl">
                    <div className="p-4 md:p-5 text-center bg-[#5a5a5a] relative rounded-b-2xl">
                      <p className="text-[8px] font-sans font-bold uppercase tracking-[0.3em] text-white/70 mb-2 transition-opacity duration-500 opacity-0 group-hover/card:opacity-100 delay-75 text-center">
                        {item.headline}
                      </p>
                      <div className="w-6 h-px bg-white/20 mx-auto mb-2 transition-transform duration-500 scale-x-0 group-hover/card:scale-x-100 delay-100"></div>
                      <h3 className="text-lg font-display font-medium text-white transition-opacity duration-500 opacity-0 group-hover/card:opacity-100 delay-150 tracking-wide text-center">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {selectedProduct && createPortal(
        <div 
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-md bg-fade" />
          
          <div 
            className="relative w-full max-w-5xl bg-background shadow-2xl overflow-hidden flex flex-col md:flex-row mt-12 sm:mt-0 rounded-sm modal-enter"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full md:w-[55%] aspect-4/5 md:aspect-auto relative overflow-hidden bg-white">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
            
            <div className="p-10 md:p-20 w-full md:w-[45%] flex flex-col justify-center relative text-left">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-brand-900/90 text-white shadow-lg hover:bg-brand-900 transition-all duration-500 hover:rotate-90 z-20"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
                {selectedProduct.headline}
              </h4>
              <h3 className="text-4xl sm:text-5xl font-display font-light text-brand-900 mb-8 leading-tight">
                {selectedProduct.name}
              </h3>
              <p className="text-brand-600/80 leading-relaxed text-base font-sans font-light max-w-md">
                {selectedProduct.desc}
              </p>
              
              <div className="mt-12 pt-10 border-t border-brand-100/60">
                 <Link to="/contact" className="inline-block text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-brand-900 border border-brand-900/60 px-10 py-4 hover:bg-brand-900 hover:text-white transition-all duration-300">
                    Minta Sampel Kain
                 </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
