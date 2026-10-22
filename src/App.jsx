import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialAbout from './components/EditorialAbout';
import SelectedWorks from './components/SelectedWorks';
import ServicesPath from './components/ServicesPath';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import WorkPage from './pages/WorkPage';
import WebcraftIntro from './components/WebcraftIntro';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (window.location.hash === '#work') return 'work';
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#experience') return 'experience';
    return 'home';
  });
  const [contactOpen, setContactOpen] = useState(() => {
    return window.location.hash === '#contact';
  });
  const [experienceProgress, setExperienceProgress] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#work') {
        setCurrentView('work');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#experience') {
        setCurrentView('experience');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#contact') {
        setContactOpen(true);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'work') {
      window.location.hash = 'work';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'about') {
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'experience') {
      window.location.hash = 'experience';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8EEE8] text-black selection:bg-[#0576fc] selection:text-white overflow-x-hidden font-sans">
      {/* 0. WebCraft Brand Intro Animation */}
      <WebcraftIntro />

      {/* Top Header & Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
        experienceProgress={experienceProgress}
      />

      {/* Main View: Home, Work Page, About Page, or Experience Page */}
      {currentView === 'experience' ? (
        <ExperiencePage
          onBack={() => handleNavigate('home')}
          onOpenContact={() => setContactOpen(true)}
          onProgressChange={setExperienceProgress}
        />
      ) : currentView === 'about' ? (
        <AboutPage onOpenContact={() => setContactOpen(true)} />
      ) : currentView === 'work' ? (
        <WorkPage onOpenContact={() => setContactOpen(true)} />
      ) : (
        <main>
          {/* 1. Hero Headline, Character Illustration, Edge Loops, and Curved Marquee */}
          <Hero />

          {/* 2. Single Editorial Statement with 3 Floating Orange Pills (Matching Image 4) */}
          <EditorialAbout />

          {/* 3. Selected Works Heading & Project Gallery (6 Projects + Bottom CTA) */}
          <SelectedWorks />

          {/* 5. Services Section with Animated SVG Path and Positioned Labels */}
          <ServicesPath />

          {/* 6. Testimonial Section with Stacked Rotating Cards */}
          <Testimonials />

          {/* 7. FAQ Section with Dog Illustration & Accordions */}
          <FAQ />

          {/* 8. Large Orange Footer with Giant Logo Wordmark */}
          <Footer onOpenContact={() => setContactOpen(true)} />
        </main>
      )}

      {/* Full-Screen "Let's Talk" Contact Experience (Matching Image 1) */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
