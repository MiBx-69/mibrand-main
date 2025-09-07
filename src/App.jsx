// FILE: app.jsx

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';
import WhatsAppPopup from '@/components/ui/WhatsAppPopup';
import FloatingCTA from '@/components/ui/FloatingCTA';

// Sections
const Header = lazy(() => import('@/components/sections/Header'));
const Footer = lazy(() => import('@/components/sections/Footer'));

// Pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const RefundPolicyPage = lazy(() => import('@/pages/RefundPolicyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Service Pages (Updated to match content.jsx)
const LocalMarketingPage = lazy(() => import('@/pages/services/LocalMarketingPage'));
const SeoContentMarketingPage = lazy(() => import('@/pages/services/SeoContentMarketingPage'));
const WebDevPage = lazy(() => import('@/pages/services/WebDevPage'));
const AdvertisingServicesPage = lazy(() => import('@/pages/services/AdvertisingServicesPage'));
const AiAutomationPage = lazy(() => import('@/pages/services/AiAutomationPage'));
const TelegramBotsPage = lazy(() => import('@/pages/services/TelegramBotsPage'));
const BrandingPage = lazy(() => import('@/pages/services/BrandingPage'));

// Scroll and Loader
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-[9999]">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
  </div>
);

const BlogRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://mibrand360.blogspot.com/';
  }, []);
  return <PageLoader />;
};

function App() {
const [darkMode, setDarkMode] = useState(() => {
  const cookieTheme = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1];
  if (cookieTheme) return cookieTheme === 'light';
  return false; // Now defaults to dark mode
});

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove('dark');
      root.classList.add('light');
      document.cookie = "theme=light; path=/; max-age=31536000";
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      document.cookie = "theme=dark; path=/; max-age=31536000";
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground scroll-smooth">
        <Suspense fallback={null}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Suspense>

        <ScrollToTop />

        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />

              {/* === UPDATED SERVICE ROUTES === */}
              <Route path="/services/local-marketing" element={<LocalMarketingPage />} />
              <Route path="/services/seo-content-marketing" element={<SeoContentMarketingPage />} />
              <Route path="/services/website-development" element={<WebDevPage />} />
              <Route path="/services/digital-advertising" element={<AdvertisingServicesPage />} />
              <Route path="/services/ai-automation" element={<AiAutomationPage />} />
              <Route path="/services/telegram-bots" element={<TelegramBotsPage />} />
              <Route path="/services/branding-strategy" element={<BrandingPage />} />
              {/* === END UPDATED ROUTES === */}

              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogRedirect />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppPopup phoneNumber="+8801605956421" />
          <FloatingCTA />
        </Suspense>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;