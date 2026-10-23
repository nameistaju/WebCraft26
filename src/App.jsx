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
import CaseStudyPage from './pages/CaseStudyPage';
import NotFoundPage from './pages/NotFoundPage';
import WebcraftIntro from './components/WebcraftIntro';
import SpinWheelModal from './components/SpinWheelModal';
import SpinWheelTrigger from './components/SpinWheelTrigger';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    const hash = (window.location.hash || '').split('?')[0];
    if (!hash || hash === '#' || hash === '#home' || hash === '#contact' || hash === '#spin' || hash === '#spin-win') return 'home';
    if (hash === '#work') return 'work';
    if (hash === '#about') return 'about';
    if (hash === '#experience') return 'experience';
    if (hash === '#mvp' || hash === '#yumm-yum' || hash === '#yum-yum' || hash === '#merci' || hash.startsWith('#project/')) return 'project';
    if (hash === '#404') return '404';
    return '404';
  });
  const [projectSlug, setProjectSlug] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
      const slug = hash.replace('#project/', '');
      return slug === 'yum-yum' ? 'yumm-yum' : slug;
    }
    if (hash === '#merci') return 'merci';
    if (hash === '#yumm-yum' || hash === '#yum-yum') return 'yumm-yum';
    if (hash === '#mvp') return 'mvp';
    return 'merci';
  });
  const [contactOpen, setContactOpen] = useState(() => {
    return window.location.hash === '#contact';
  });
  const [spinOpen, setSpinOpen] = useState(() => {
    return window.location.hash === '#spin' || window.location.hash === '#spin-win';
  });
  const [experienceProgress, setExperienceProgress] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash || '').split('?')[0];
      if (hash === '#work') {
        setCurrentView('work');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#experience') {
        setCurrentView('experience');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setContactOpen(true);
      } else if (hash === '#spin' || hash === '#spin-win') {
        setSpinOpen(true);
      } else if (hash === '#mvp' || hash === '#yumm-yum' || hash === '#yum-yum' || hash === '#merci' || hash.startsWith('#project/')) {
        let slug = hash.startsWith('#project/')
          ? hash.replace('#project/', '')
          : (hash === '#merci' ? 'merci' : (hash === '#yumm-yum' || hash === '#yum-yum' ? 'yumm-yum' : 'mvp'));
        if (slug === 'yum-yum') slug = 'yumm-yum';
        setProjectSlug(slug);
        setCurrentView('project');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#404') {
        setCurrentView('404');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === '#' || hash === '#home') {
        setCurrentView('home');
      } else {
        setCurrentView('404');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view, slug = 'mvp') => {
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
    } else if (view === 'project') {
      setProjectSlug(slug);
      window.location.hash = `project/${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === '404') {
      window.location.hash = '404';
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

      {/* Top Header & Navigation Bar (Hidden on Case Study page and 404 page) */}
      {currentView !== 'project' && currentView !== '404' && (
        <Navbar
          onOpenContact={() => setContactOpen(true)}
          currentView={currentView}
          onNavigate={handleNavigate}
          experienceProgress={experienceProgress}
        />
      )}

      {/* Main View: Project Case Study, Experience Page, About Page, Work Page, 404 Page, or Home */}
      {currentView === '404' ? (
        <NotFoundPage onNavigateHome={() => handleNavigate('home')} />
      ) : currentView === 'project' ? (
        <CaseStudyPage
          slug={projectSlug}
          onBack={() => handleNavigate('work')}
          onOpenContact={() => setContactOpen(true)}
          onNavigateProject={(slug) => handleNavigate('project', slug)}
        />
      ) : currentView === 'experience' ? (
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

      {/* Floating Spin & Win Launcher Button (Hidden on 404 page) */}
      {currentView !== '404' && (
        <SpinWheelTrigger onOpen={() => setSpinOpen(true)} />
      )}

      {/* Spin & Win Modal Experience */}
      <SpinWheelModal
        isOpen={spinOpen}
        onClose={() => setSpinOpen(false)}
        onOpenContact={() => {
          setSpinOpen(false);
          setContactOpen(true);
        }}
      />
    </div>
  );
}
