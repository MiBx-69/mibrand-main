import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code2, BrainCircuit, Zap } from 'lucide-react';

const WebDevPage = () => {
  return (
    <PageLayout
      title="Website Design & Development Services | MiBrand Agency"
      description="Get a stunning, fast, and mobile-friendly website from MiBrand. We offer custom web design and development services in Sreemangal, Sylhet, for businesses of all sizes."
      canonical="/services/website-development"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Website & E-commerce Development
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your website is your digital storefront. We build beautiful, high-performance websites that capture your brand and convert visitors into loyal customers.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi_N8K3RvkGd3jdcRn0wzZCCmRoCbmfNxvzgMViR3uVP2ITDIAw_7GFguN4i-vkGhw9bSQEsDiWlGLpctxUJHjCvBytEd0uniKp1HHrdyIp6K8cYrokr71ZDgobmAvLU4BdnHaXi2e8z5Q61zZXJ9dNPaA4Fk-rGaTYeYq1Y22gIhwWChKv25bE6TgEe6w" 
            alt="Showcase of MiBrand Agency's Website & E-commerce Development, displaying a responsive online store on a laptop, tablet, and phone, surrounded by payment and analytics icons."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Code2 className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Custom Portfolio & Agency Websites:</strong> Unique, user-centric designs that reflect your brand identity and provide an exceptional user experience (UX).</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Shopify & WooCommerce Development:</strong> Powerful online stores with secure payment gateways, inventory management, and conversion-focused design.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>High-Conversion Landing Pages:</strong> Standalone pages designed with one goal: to convert traffic from your marketing campaigns into leads and sales.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why A Professional Website Matters
            </h2>
            <p className="text-lg">
              In today's digital-first world, a professional website is your most critical asset. It operates 24/7 as your top salesperson and brand ambassador, making a powerful first impression and building essential trust with potential customers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              Our Sreemangal-based team combines creative design with cutting-edge technology. We don't just build websites; we create digital experiences tailored to your business goals. We provide personal support and ensure your project is a stunning success from start to finish.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for Website Development">
                Get Your Custom Website Quote
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default WebDevPage;