import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, BrainCircuit, Zap } from 'lucide-react';

const SeoContentMarketingPage = () => {
  return (
    <PageLayout
      title="SEO & Content Marketing Services | MiBrand Agency"
      description="Boost your website traffic and authority with MiBrand’s SEO and Content Marketing services. We offer keyword research, on-page and off-page SEO, and high-quality content strategies."
      canonical="/services/seo-content-marketing"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            SEO & Content Marketing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Drive sustainable organic traffic, establish your authority, and turn searchers into customers with our data-driven SEO strategies.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhBZGaH_ISzp8OOLdM8PT3hv17vmw5IRMMDub4gSDzxZ7D4aRs25ZatUodk6QWtLdDGxJ8viqHS2EtzFNWPjnKN2sEU6VXHKz4g40qyW4uEvUOtK_pKDjo7CXSnchBI_UusVCQVL1JfQJNP5ciK8OZ9DBuCNfGVrk3J-Zv4MrVDXdGjhOX5jhpdCpRpchQ" 
            alt="A dashboard collage showcasing MiBrand Agency's SEO and Content Marketing services, including keyword research, website analytics, and strategic content optimization."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <TrendingUp className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Full On-Page & Off-Page SEO:</strong> A comprehensive approach covering everything from meta tags to high-authority backlink acquisition.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>E-commerce & YouTube SEO:</strong> Specialized optimization for Shopify stores and video content to maximize visibility on all major search platforms.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Technical SEO & Core Web Vitals:</strong> We fix crawl errors, improve site speed, and ensure your website provides an excellent user experience for better rankings.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why SEO Matters
            </h2>
            <p className="text-lg">
              SEO is the foundation of long-term digital growth. Unlike paid ads, it builds a sustainable asset that generates free, high-quality traffic around the clock, establishing your brand as a trusted authority in your industry.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              We live and breathe SEO. Our strategies are built on years of experience and powered by industry-leading tools like Ahrefs. We focus on transparent, results-oriented campaigns that deliver a clear return on your investment.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for SEO & Content Marketing">
                Start Ranking Higher
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default SeoContentMarketingPage;