import React from 'react';
import { motion } from 'framer-motion';

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/567b1e84-a0ca-4910-8683-8f526e10ba90/c39574ae102bd9c54d384f58a9dad6e7.png?w=128&q=75&fm=webp";

export const Logo = ({ className, isFooter = false }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ perspective: '1000px' }}
    >
      <motion.img 
        src={logoUrl} 
        alt="MiBrand logo" 
        title={isFooter ? "MiBrand – The Best SEO Service Provider" : "MiBrand | Rank top 10 on Google"}
        loading={isFooter ? 'lazy' : 'eager'}
        fetchpriority={isFooter ? 'low' : 'high'}
        className="object-contain h-full w-full rounded-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          rotateY: 15,
          rotateX: -10,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};