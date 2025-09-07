import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern pt-28 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 3 }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-gradient">Your Digital Growth Partner</span>
              <br />
              <span className="text-foreground">Expert SEO & Digital Marketing Services in Bangladesh</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Our Sreemangal-based team uses powerful local SEO and creative advertising to make your brand impossible to ignore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => navigate('/contact')}
            >
              Claim Your Spotlight
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold"
              onClick={() => navigate('/services')}
            >
              View Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <StatItem icon={<Users />} value="500+" label="Happy Clients" />
            <StatItem icon={<TrendingUp />} value="1200+" label="Projects Done" />
            <StatItem icon={<Award />} value="4+" label="Years Experience" />
            <StatItem icon={<Star />} value="4.8" label="Client Rating" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="text-center flex flex-col items-center">
    <div className="flex items-center justify-center text-4xl font-bold text-gradient">
      {value}
    </div>
    <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2 flex items-center">
      {React.cloneElement(icon, { className: "h-4 w-4 mr-2" })}
      {label}
    </div>
  </div>
);

export default Hero;