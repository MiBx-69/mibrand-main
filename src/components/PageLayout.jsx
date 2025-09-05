import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageLayout = ({ children, title, description, canonical, className }) => {
  const fullCanonicalUrl = `https://mibrand.agency${canonical}`;
  
  return (
    <HelmetProvider>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={className}
      >
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {canonical && <link rel="canonical" href={fullCanonicalUrl} />}
        </Helmet>
        {children}
      </motion.div>
    </HelmetProvider>
  );
};

export default PageLayout;