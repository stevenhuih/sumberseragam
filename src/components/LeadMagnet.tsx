import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0 && scrollY / docHeight > 0.3) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) return;

    const phoneNumber = "6281122867878";
    const text = `Halo tim Sanso, saya ${firstName}. Saya sedang bingung memilih kain seragam agar tidak salah beli. Bisa beri rekomendasi tepat untuk kebutuhan industri saya?`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  if (isDismissed) return null;

  return createPortal(
    <div className={`fixed bottom-6 right-6 z-50 bg-foreground border border-brand-800 shadow-2xl p-5 sm:p-7 max-w-[340px] w-[calc(100%-3rem)] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
      <button 
        onClick={() => setIsDismissed(true)}
        className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-background border border-brand-200 text-foreground shadow-lg hover:bg-brand-50 transition-colors z-60"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div className="flex gap-4 items-start mb-4 pr-4">
        <div className="shrink-0 w-10 h-10 bg-brand-800 flex items-center justify-center text-background">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-display text-background leading-snug">Bingung pilih kain yang mana?</h3>
        </div>
      </div>
      
      <p className="text-brand-200/90 text-[13px] mb-6 leading-relaxed font-light">
        Hindari pemborosan seragam. Hubungi ahli kami via WhatsApp untuk rekomendasi tepat dan tersertifikasi.
      </p>

      <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="pop-firstName" className="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-300">Nama Depan Anda</label>
          <input 
            id="pop-firstName"
            required
            type="text" 
            placeholder="misal: Bobby" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-brand-800 border border-brand-700/50 py-2.5 px-4 text-background placeholder:text-brand-400 focus:border-brand-300 focus:outline-none text-sm transition-all" 
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-[#8ce99a] hover:bg-[#7bd989] text-brand-900 font-bold py-2.5 px-4 transition-all text-[11px] uppercase tracking-[0.25em] flex justify-center items-center gap-3 border border-transparent shadow-lg"
        >
          <img 
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" 
            alt="WhatsApp"
            className="w-4 h-4 scale-[1.3]"
          />
          Chat via WhatsApp
        </button>
      </form>
    </div>,
    document.body
  );
}
