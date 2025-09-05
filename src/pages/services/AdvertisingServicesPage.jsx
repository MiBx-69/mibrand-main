import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Megaphone, BrainCircuit, Zap } from 'lucide-react';

const AdvertisingServicesPage = () => {
  return (
    <PageLayout
      title="Digital Advertising Services in Sylhet | MiBrand Agency"
      description="Drive targeted traffic and ROI with MiBrand's digital advertising services. We specialize in Google, Facebook, and YouTube ad campaigns for businesses in Sreemangal."
      canonical="/services/digital-advertising"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Digital Advertising & Campaigns
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with your ideal customers instantly. We craft strategic, data-driven advertising campaigns that deliver measurable results and maximize your budget.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgyIRP-GhsCXvE5C54kY5mT0z3Xi0V9_ItIxkw3ORRrC8z7z5gBvhxh3uwuEwKD5Xzh6Ioy1VTw7w1VXJnjTw0tLot8-NBA8Kb9_cFBi1irJmj5LF9CtEfthFAXLZjI_m2UENDpH4Z8lDsk1iesFQnMLsM478QqCAAzl0P_mqIUunV9_K4BzCBRysdHFMg" 
            alt="A performance marketing dashboard showing positive ROI on a digital advertising campaign"
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Megaphone className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Google Ads (Search, Display, Shopping):</strong> Capture high-intent customers on Google with expertly managed campaigns, targeting the most profitable keywords.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Meta Ads (Facebook & Instagram):</strong> Run targeted ad campaigns with compelling visuals and copy to build brand awareness, generate leads, and drive sales.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Lead Generation & Retargeting:</strong> Convert interested prospects into qualified leads and re-engage past website visitors to maximize conversions.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why Digital Advertising Matters
            </h2>
            <p className="text-lg">
              Digital advertising offers unparalleled speed, precision, and scalability. It allows you to place your message directly in front of interested consumers, bypass the slow build of organic traffic, and generate immediate, predictable revenue streams.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              At MiBrand, we blend creative ad design with rigorous data analysis. Our deep understanding of the Sreemangal market allows us to create campaigns that resonate locally while leveraging world-class ad tech to ensure not a single Taka of your ad spend is wasted.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for Digital Advertising">
                Launch a High-ROI Campaign
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default AdvertisingServicesPage;