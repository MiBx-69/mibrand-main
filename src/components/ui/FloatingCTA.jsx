import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Search } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 inset-x-0 z-50 flex justify-center items-center gap-2 px-4"
        >
          <Button asChild className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
            <Link to="/contact" title="Contact the best SEO service provider – MiBrand">
              <Search className="h-4 w-4" />
              Get Free SEO Audit
            </Link>
          </Button>
          <Button asChild className="sm:hidden flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
            <a href="tel:+8801605956421" title="Call MiBrand – Your Trusted SEO Service Provider">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;