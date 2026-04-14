import { useState } from 'react';

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
          src="/contactus-hero.png" 
          alt="Sumber Seragam Product Catalogs" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2] blur-[1px] brightness-[0.6]"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h4 className="text-[10px] uppercase font-bold tracking-[0.5em] text-white mb-4 fade-in-up">Kini saatnya</h4>
          <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight fade-in-up-delayed">
            HUBUNGI KAMI
          </h1>
        </div>
      </div>

      <section id="contact-form" className="py-24 bg-background px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-brand-200/60 shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-none">
            <div className="lg:w-[45%] bg-brand-900 p-12 sm:p-20 relative overflow-hidden flex flex-col justify-center">
              <img 
                src="/contact-background.jpg" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm grayscale-[0.2]"
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
                    <address className="not-italic text-lg md:text-xl font-light leading-relaxed text-white/90">
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
                    placeholder="Tulis sesuatu...."
                    className="w-full bg-brand-50/50 border border-brand-100 px-6 py-4 focus:outline-none focus:border-brand-900 transition-colors rounded-none placeholder:text-brand-400/60 font-light resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-900 text-white border border-brand-900 py-6 text-xs uppercase font-bold tracking-[0.4em] hover:bg-white hover:text-brand-900 transition-all duration-500 shadow-xl hover:shadow-none rounded-none"
                >
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="mt-24 bg-white border border-brand-200/60 shadow-xl overflow-hidden">
            <div className="p-10 border-b border-brand-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <h3 className="text-2xl font-display font-light text-brand-900 tracking-tight">Kunjungi Showroom Kami</h3>
              <div className="flex items-center gap-4 text-brand-500 font-sans text-xs uppercase tracking-widest font-bold">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bandung, Jawa Barat
              </div>
            </div>
            <div className="w-full h-[550px] relative">
              <iframe 
                src="https://www.google.com/maps?q=Sumber%20Seragam%20Jl.%20Waas%20No.5b%2C%20Batununggal%2C%20Bandung&z=17&output=embed" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
