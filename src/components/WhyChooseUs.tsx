import { useState } from 'react';
import Reveal from './Reveal';

const brandFeatures = [
  {
    title: "Garansi Kesesuaian Warna",
    desc: "Dengan 378+ pilihan warna, kami menjamin tidak ada perbedaan antar batch. Identitas perusahaan Anda tetap konsisten sempurna.",
    icon: <img src="https://img.icons8.com/?size=100&id=11494&format=png&color=000000" alt="Color Palette" className="w-6 h-6 opacity-80" />
  },
  {
    title: "Pengujian Lapangan Teknis",
    desc: "Kain kami, termasuk Sumtex Potensha and Ribstop, telah diuji ketahanannya terhadap abrasi, pilling, dan robekan dalam kondisi yang presisi.",
    icon: <img src="https://img.icons8.com/?size=100&id=11159&format=png&color=000000" alt="Field Testing" className="w-6 h-6 opacity-80" />
  },
  {
    title: "Manajer Sukses Khusus",
    desc: "Jalur langsung ke spesialis tekstil untuk memandu Anda dalam pemilihan kain—dari Unione American Drill hingga lini Inma premium kami.",
    icon: (
      <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    )
  },
  {
    title: "Pemesanan Blok Aman",
    desc: "Kunci inventaris dan harga bahan baku Anda untuk sepanjang tahun. Pemrosesan berteknologi tinggi menjamin kenyamanan dan perlindungan maksimal.",
    icon: (
      <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };


  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    if (index !== currentFeatureIndex) {
      setCurrentFeatureIndex(index);
    }
  };

  return (
    <>
      <section className="py-16 lg:py-32 bg-background text-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-900 mb-4 tracking-tight">
                Mengapa Bermitra dengan Sumber Seragam?
              </h2>
              <p className="text-brand-600/70 max-w-lg mx-auto text-sm md:text-base font-medium">
                Mulai dari konsultasi awal hingga peluncuran massal — kami hadir untuk
                membuat pengadaan seragam skala besar menjadi lancar dan bebas stres.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
            
            {/* Desktop Left Side Table Features */}
            <div className="hidden lg:block space-y-24 w-full max-w-sm mx-auto z-10">
              <Reveal>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-900 mb-4 rounded-[10px] border border-brand-200 bg-white shadow-sm">
                    {brandFeatures[0].icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-brand-900 leading-tight">{brandFeatures[0].title}</h3>
                  <p className="text-brand-600/80 text-sm leading-relaxed font-medium">
                    {brandFeatures[0].desc}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-900 mb-4 rounded-[10px] border border-brand-200 bg-white shadow-sm">
                    {brandFeatures[1].icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-brand-900 leading-tight">{brandFeatures[1].title}</h3>
                  <p className="text-brand-600/80 text-sm leading-relaxed font-medium">
                    {brandFeatures[1].desc}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Central Model - Priority on Mobile */}
            <Reveal animation="zoom" className="relative w-full flex items-center justify-center p-4 min-h-[400px] z-0 order-first lg:order-0">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-full aspect-square bg-[#ECE8D9] rounded-full z-0 opacity-60" 
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[75%] aspect-square bg-[#5a5a5a] rounded-full z-1 opacity-20" 
              />
              <img 
                src="/4.png" 
                alt="Sumber Seragam Product" 
                className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl z-10 scale-[1.15] md:scale-[1.25] transition-transform duration-500 origin-center"
                loading="lazy"
                decoding="async"
              />
            </Reveal>

            {/* Desktop Right Side Table Features */}
            <div className="hidden lg:block space-y-24 w-full max-w-sm mx-auto z-10">
              <Reveal>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-900 mb-4 rounded-[10px] border border-brand-200 bg-white shadow-sm">
                    {brandFeatures[2].icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-brand-900 leading-tight">{brandFeatures[2].title}</h3>
                  <p className="text-brand-600/80 text-sm leading-relaxed font-medium">
                    {brandFeatures[2].desc}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-900 mb-4 rounded-[10px] border border-brand-200 bg-white shadow-sm">
                    {brandFeatures[3].icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-brand-900 leading-tight">{brandFeatures[3].title}</h3>
                  <p className="text-brand-600/80 text-sm leading-relaxed font-medium">
                    {brandFeatures[3].desc}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Mobile Feature Carousel */}
            <div className="block lg:hidden w-full max-w-sm mx-auto z-10 text-center relative px-2">
              <div 
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-0 -mx-4 px-4"
                onScroll={handleScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {brandFeatures.map((feature, i) => (
                  <div key={i} className="min-w-full snap-center px-4">
                    <div className="flex flex-col items-center py-4">
                      <div className="w-12 h-12 flex items-center justify-center text-brand-900 mb-6 rounded-[12px] border border-brand-200 bg-white shadow-md">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-display font-medium mb-4 text-brand-900 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-brand-600/80 text-[15px] leading-relaxed font-medium px-4">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col items-center">
                <div className="flex gap-2">
                  {brandFeatures.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentFeatureIndex === i ? 'w-8 bg-brand-900' : 'w-2 bg-brand-200'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/sanso-tempat.JPG" 
            alt="Luxury Textile Showroom" 
            className="w-full h-full object-cover grayscale-30 brightness-[0.40]" 
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-brand-900/45 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-light text-white tracking-tight">
              Ulasan Pelanggan Kami
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-px bg-white/20" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal className="relative pt-12 sm:pt-20">
              <div className="bg-background/95 w-full rounded-none p-6 sm:p-10 pl-40 sm:pl-64 flex relative shadow-2xl border border-brand-200 min-h-[280px]">
                <div className="absolute bottom-0 -left-8 sm:-left-4 w-52 sm:w-72 h-[130%] sm:h-[140%] z-10 pointer-events-none drop-shadow-2xl"
                     style={{ clipPath: 'polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)' }}>
                  <img 
                    src="/3.png" 
                    alt="Happy Customer" 
                    className="w-full h-full object-contain object-bottom scale-[2.8] sm:scale-[3.5] origin-bottom translate-y-[15%] sm:translate-y-[22%]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="w-full flex flex-col justify-center relative z-20">
                  <p className="text-brand-900 text-sm leading-relaxed font-light mb-6 italic">
                    "Sangat suka dengan kualitas kainnya! Tekstur tenunan yang indah dan rapat, serta presentasi yang luar biasa."
                  </p>
                  <div className="flex gap-1.5 mb-4 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-display font-light text-xl text-brand-900">Sarah M.</h4>
                  <p className="text-brand-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Direktur Pengadaan</p>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <p className="text-white/80 text-[15px] leading-relaxed max-w-sm md:max-w-md font-light text-center">
                  Temukan jawaban teknis mendalam mengenai standar kualitas, sertifikasi kepatuhan tender, dan performansi kain Sumber Seragam untuk kebutuhan industri Anda.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-6 justify-center lg:pr-8 min-h-[650px]">
              <div className="flex flex-col gap-4">
                {[
                  { 
                    id: "/01", 
                    q: "Punya sertifikat SNI, TKDN, K3L, ISO?", 
                    a: "Ya, kami memiliki sertifikasi lengkap (SNI, TKDN, K3L, ISO) untuk mendukung pengadaan tender pemerintah dan kebutuhan industri skala besar. Produk kami telah teruji secara teknis sesuai standar regulasi nasional and internasional." 
                  },
                  { 
                    id: "/02", 
                    q: "Apakah kain menyerap keringat dan tahan luntur?", 
                    a: "Tentu saja. Teknologi sirkulasi udara pada serat kain kami memastikan kenyamanan maksimal (breathable) meski dalam aktivitas tinggi, serta menggunakan formula pewarnaan khusus yang menjamin warna tetap tajam dan tidak mudah luntur." 
                  },
                  { 
                    id: "/03", 
                    q: "Ketahanan warna setelah dicuci?", 
                    a: "Nilai ketahanan warna kami sangat stabil (Good fastness) dan dapat dibuktikan melalui hasil uji laboratorium resmi SNI. Silakan hubungi tim kami untuk mendapatkan laporan hasil test lab terbaru dan info lanjut." 
                  },
                  { 
                    id: "/04", 
                    q: "Barang ready stock atau pengiriman bisa cepat?", 
                    a: "Ya, kami menjamin ketersediaan stok (ready stock) untuk ribuan yard kain di gudang kami. Dengan manajemen logistik yang efisien, kami siap melakukan pengiriman cepat untuk memenuhi kebutuhan mendesak produksi seragam Anda tanpa harus menunggu lama." 
                  }
                ].map((faq, i) => (
                  <div 
                    key={i} 
                    className={`flex flex-col rounded-none border transition-all duration-500 overflow-hidden cursor-pointer ${
                      activeFaq === i 
                        ? 'border-brand-900/40 bg-white shadow-xl' 
                        : 'border-brand-200 bg-background/90 hover:bg-white hover:border-brand-900/20 shadow-lg'
                    }`}
                    onClick={() => toggleFaq(i)}
                  >
                    <div className="flex items-center justify-between px-8 py-6">
                      <span className="text-sm font-medium flex items-center gap-6 text-brand-900">
                        <span className={`text-[10px] italic uppercase tracking-widest transition-colors ${
                          activeFaq === i ? 'text-brand-900/60' : 'text-brand-400'
                        }`}>{faq.id}</span>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-none border border-brand-200 flex items-center justify-center transition-all duration-500 ${
                        activeFaq === i ? 'rotate-180 bg-brand-900 text-white border-brand-900' : 'text-brand-900'
                      }`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${
                      activeFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                      <div className="overflow-hidden">
                        <div className="px-8 pb-6 pt-0 bg-white/50 border-t border-brand-100/30">
                          <p className="text-[13px] text-brand-600/80 leading-relaxed font-light pl-[50px] pt-4">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
