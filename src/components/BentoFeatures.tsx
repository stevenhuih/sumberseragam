import Reveal from './Reveal';

export default function BentoFeatures() {
  return (
    <section className="py-32 bg-background px-6 overflow-hidden">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          
          <Reveal>
            <div className="bg-brand-100 overflow-hidden h-[400px] relative shadow-sm">
              <img 
                src="/smallsection/DSC02026 edit.jpg" 
                alt="Quality textile detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-brand-100 overflow-hidden h-[320px] relative shadow-sm">
              <img 
                src="/smallsection/JPM_3330.png" 
                alt="Professional textile detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 h-[400px] justify-between">
            <Reveal>
              <div className="bg-brand-50 h-[220px] shadow-sm relative overflow-hidden">
                  <img 
                    src="/smallsection/DSC02126 edit.jpg" 
                    alt="Sumber Seragam Model" 
                    className="w-full h-full object-cover" 
                  />
              </div>
            </Reveal>
            
            <Reveal>
              <div className="bg-brand-100 h-[156px] shadow-sm relative overflow-hidden">
                  <img 
                    src="/smallsection/DSC01853 edit.jpg" 
                    alt="Textile focus" 
                    className="w-full h-full object-cover" 
                  />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-brand-200 overflow-hidden h-[450px] relative shadow-sm self-end">
              <img 
                src="/smallsection/JPM_4418.png" 
                alt="Brand Model" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
