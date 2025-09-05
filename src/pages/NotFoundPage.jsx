import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 py-16">
      <Helmet>
        <title>404 - Page Not Found | MiBrand Agency</title>
        <meta name="description" content="Oops! The page you are looking for does not exist." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative">
          <motion.h1 
            className="text-9xl font-extrabold text-gradient tracking-tighter"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            404
          </motion.h1>
          <motion.div 
            className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page not found.
        </h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. Maybe you mistyped the URL?
        </p>
        <div className="mt-10">
          <Button asChild>
            <NavLink to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back home
            </NavLink>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;