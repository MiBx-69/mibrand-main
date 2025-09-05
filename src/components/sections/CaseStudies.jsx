import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Zap } from 'lucide-react';

const CaseStudies = ({ caseStudies }) => {
  return (
    <section id="case-studies" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            MiBrand <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results. Real brands. Real impact. 💯
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flat-card-container"
            >
              <div className="flat-card glass-effect rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:border-primary">
                <div className="mb-4 flex justify-between items-center">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {study.category}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{study.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Client: {study.client}</p>
                <p className="text-muted-foreground mb-6 flex-grow">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center text-lg"><TrendingUp className="h-6 w-6 mr-2 text-green-400" /> Key Results:</h4>
                  <ul className="space-y-2 text-sm">
                    {study.results.split(', ').map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto bg-background/50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-foreground flex items-start">
                    <Zap className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>{study.keyWin}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;