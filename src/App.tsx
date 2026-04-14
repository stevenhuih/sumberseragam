import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import BentoFeatures from './components/BentoFeatures';
import AboutUs from './components/AboutUs';
import CatalogGrid from './components/CatalogGrid';
import LeadMagnet from './components/LeadMagnet';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <div className="page-fade">
      <Hero />
      <BentoFeatures />
      <AboutUs />
      <WhyChooseUs />
      <CatalogGrid />
      <LeadMagnet />
      <FinalCTA />
    </div>
  );
}

function App() {
  const { pathname } = useLocation();

  return (
    <div className="font-sans min-h-screen bg-background text-foreground selection:bg-brand-900 selection:text-white scroll-smooth flex flex-col items-stretch">
      <ScrollToTop />
      <Navigation />
      
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={
            <div key={pathname} className="page-fade">
              <ContactForm />
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
