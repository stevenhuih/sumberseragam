import { useState } from 'react';
import Reveal from './Reveal';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "6281122867878";
    const text = `Halo tim Sales Sumber Seragam,\n\nNama saya ${firstName} ${lastName}.\n\nPesan: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-brand-900 border-b border-white/10">
        <img 
          src="/contact_hero_machinery_1775640981135.png" 
          alt="Contact Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-900/40" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-900/20 to-brand-900/80" />
        
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight fade-in-up-delayed">
            HUBUNGI KAMI
          </h1>
        </div>
      </div>

      <section id="contact-form" className="py-16 lg:py-24 bg-background px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="bg-white border border-brand-200/60 shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-none">
              <div className="lg:w-[45%] bg-brand-900 p-12 sm:p-20 relative overflow-hidden flex flex-col justify-center">
                <img 
                  src="/contact-background.jpg" 
                  alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm grayscale-[0.2]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-white">
                  <h2 className="text-4xl md:text-5xl font-display font-light mb-16 tracking-tight">
                    Hubungi kami
                  </h2>

                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/70 mb-3">Email</h4>
                      <a href="mailto:cv.sansoberjayatexindo@gmail.com" className="text-xl md:text-2xl font-light text-white hover:text-brand-300 transition-colors block">
                        cv.sansoberjayatexindo@gmail.com
                      </a>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/70 mb-3">Telepon</h4>
                      <p className="text-xl md:text-2xl font-light text-white">0811-2286-7878</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/70 mb-3">Alamat</h4>
                      <address className="not-italic text-sm md:text-base leading-relaxed text-white/80 font-light">
                        Jl. Waas No.5b, Batununggal,<br />
                        Kec. Bandung Kidul, Kota Bandung,<br />
                        Jawa Barat 40266
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[55%] p-12 sm:p-20 bg-white">
                <form className="space-y-8" onSubmit={handleWhatsApp}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-900/60">Nama Depan</label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Nama depan"
                        className="w-full bg-brand-50/50 border border-brand-100 px-6 py-4 focus:outline-none focus:border-brand-900 transition-colors rounded-none placeholder:text-brand-400/60 font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-900/60">Nama Belakang</label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Nama belakang"
                        className="w-full bg-brand-50/50 border border-brand-100 px-6 py-4 focus:outline-none focus:border-brand-900 transition-colors rounded-none placeholder:text-brand-400/60 font-light"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-900/60">Pesan</label>
                    <textarea 
                      required
                      id="message" 
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Bagaimana kami bisa membantu Anda?"
                      className="w-full bg-brand-50/50 border border-brand-100 px-6 py-4 focus:outline-none focus:border-brand-900 transition-colors rounded-none placeholder:text-brand-400/60 font-light resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-brand-900 text-white font-bold py-5 px-16 hover:bg-black transition-all duration-300 uppercase tracking-[0.3em] text-[11px] sm:text-xs shadow-xl rounded-none"
                  >
                    Kirim via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-brand-50/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-400 mb-6">Jam Operasional</h4>
              <p className="text-brand-900 font-light text-sm">Senin - Jumat: 08:00 - 17:00</p>
              <p className="text-brand-900 font-light text-sm mt-1">Sabtu: 08:00 - 13:00</p>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-400 mb-6">Social Media</h4>
              <a href="#" className="text-brand-900 font-light text-sm hover:text-brand-500 transition-colors">Instagram</a>
              <span className="mx-2 text-brand-200">|</span>
              <a href="#" className="text-brand-900 font-light text-sm hover:text-brand-500 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
