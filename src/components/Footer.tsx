export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-900 text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-b border-white/10 pb-16">
        <div>
          <h4 className="text-2xl font-display font-semibold mb-6 tracking-tight text-white flex items-center gap-1">SUMBER SERAGAM<span className="text-xs align-top text-white/60">&reg;</span></h4>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs font-light">
            Distributor Resmi Seragam Institusi & Kain Teknis Premium. Keunggulan teruji untuk lingkungan industri dan korporat Indonesia yang menuntut tinggi.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 text-white/90 text-sm font-light">
            <li>Telepon: 0811-2286-7878</li>
            <li>Email: <a href="mailto:cv.sansoberjayatexindo@gmail.com" className="hover:underline transition-all">cv.sansoberjayatexindo@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white mb-6">Bandung HQ</h4>
          <address className="not-italic text-white/90 text-sm leading-relaxed font-light">
            Jl. Waas No.5b, Batununggal,<br />
            Kec. Bandung Kidul, Kota Bandung,<br />
            Jawa Barat 40266
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 flex flex-col items-center text-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
        <p className="mb-4">&copy; {new Date().getFullYear()} SUMBER SERAGAM. Hak cipta dilindungi undang-undang.</p>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
        </div>
      </div>
    </footer>
  );
}
