import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Pricing = ({ packages }) => {
  const navigate = useNavigate();
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            MiBrand <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible plans for businesses of all sizes. Choose what fits your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flat-card-container w-full"
              >
                <div className={`flat-card rounded-2xl p-8 relative flex flex-col h-full border-2 ${
                  pkg.popular
                    ? 'border-primary pulse-glow bg-primary/5'
                    : 'glass-effect border-transparent'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="h-4 w-4" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold">{pkg.price}</span>
                      <span className={`text-lg ${pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{pkg.period}</span>
                    </div>
                    <p className={`text-sm ${pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-primary' : 'text-green-500'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-auto ${
                      pkg.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-bold'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold'
                    }`}
                    onClick={() => navigate('/contact')}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We create tailored packages based on your specific requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;