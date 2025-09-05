import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BrainCircuit, BarChart, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Your Growth Partner in the <span className="text-gradient">Digital World</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MiBrand is a next-gen digital marketing agency powered by passion, precision, and performance. We've helped 500+ clients skyrocket their online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="perspective-1000"
          >
            <div className="card-3d transform-gpu">
              <img  
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                alt="MiBrand agency team collaborating on a project with digital charts and graphs"
                title="MiBrand agency team collaborating on a project with digital charts and graphs"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhT80i36FuIP0Q2W7VF5RGyBOSKFchOsQkz5WGDG3v6DwxjNjwXCPszdEaA5iayPczDlP5MjLFgv5nzx6_oImX7zp6nnjhwWyd-czcPEfPZVZZadUoDIhUxcCFPGjRYiD97LpLCPK7LE7xFkFTfKN4F-gRS8YAG1PzdPwZU1tPOgb2WLw68M4c7c0DTfmE"
                loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Technically Expert Team</h3>
              <p className="text-muted-foreground">
                Our squad is made up of seasoned professionals, each bringing 2+ years of specialized experience. We're not just skilled, we're obsessed with performance and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What Makes MiBrand Different?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <BarChart className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Data-driven strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Lightning-fast execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BrainCircuit className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Experts in SEO & AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Transparent communication</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Track Record That Speaks</h3>
              <p className="text-muted-foreground">
                We’ve successfully completed 1200+ projects globally, delivering impactful results across industries. From startups to established brands, MiBrand is a trusted name for boosting visibility, traffic, and revenue.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;