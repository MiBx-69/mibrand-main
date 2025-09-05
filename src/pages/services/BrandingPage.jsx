import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Palette, BrainCircuit, Zap } from 'lucide-react';

const BrandingPage = () => {
  return (
    <PageLayout
      title="Branding & Identity Design Services | MiBrand Agency, Sylhet"
      description="Build a memorable brand with MiBrand's strategic branding services. We offer logo design, brand guidelines, and identity creation for businesses in Sreemangal."
      canonical="/services/branding-strategy"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Branding & Strategy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your brand is more than a logo. We help you build a powerful identity and story that connects with your audience and commands loyalty.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgtINpWoz5XYB9UBEime-kbPgert0R-kWp1dY-fTEBPy7Mw50BsqKVT6_rgtriY6FrdKfalvHhkbtz3fdGxX3vro9GJXwSLR_Qx2arnZsXKWdX6NOn6q7S2f1blNslbvJ6XUiv0ukM5Ns6I0AgM-OntH4UN-7LwYl_Kda1CA5VsV-cta7NTvBuXMIJ43cE" 
            alt="Diagram illustrating MiBrand Agency's branding and strategy services, showing how target research and brand positioning lead to business growth."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Palette className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Logo & Visual Identity Design:</strong> Crafting a memorable logo and a complete visual system including colors, typography, and imagery that tells your story.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Brand Guidelines & Kits:</strong> A comprehensive rulebook on how to use your brand assets consistently across all marketing materials to build recognition.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Go-to-Market Strategy:</strong> A strategic plan for launching your new brand or product to make the biggest impact from day one.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why Branding Matters
            </h2>
            <p className="text-lg">
              Strong branding builds recognition, trust, and loyalty. It differentiates you from competitors, justifies your pricing, and creates an emotional connection with your customers. A well-defined brand is the foundation of all successful marketing.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              At MiBrand, branding is in our name. Our strategic approach, combined with a deep understanding of the local Sreemangal culture, ensures your brand not only looks good but also resonates deeply with your target customers.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for Branding Services">
                Define Your Unforgettable Brand
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default BrandingPage;