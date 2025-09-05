import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin, BrainCircuit, Zap } from 'lucide-react';

const LocalMarketingPage = () => {
  return (
    <PageLayout
      title="Local SEO & Marketing Services in Sreemangal | MiBrand Agency"
      description="Dominate local search in Sreemangal and Sylhet. MiBrand's Local Marketing services drive foot traffic and phone calls through Google Business Profile optimization and local SEO."
      canonical="/services/local-marketing"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Local Marketing Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be the first choice for customers in your area. We help Sreemangal-based businesses get found by local customers who are ready to buy.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiDyrSZn8m5EisK63RUCdWv6z8tsRf1dldhzsJVUNXX1Jhb33TLjvujXWtdaFEDdujUKX2h-_-QQmpufTeph4QVHIqzbvY8qF_wu_X3SITvAL-TejHH0aXOsvp9WN-y_VX9iBhhYpF6uiN0cShD3IH7CZ9jbOwmUy_cisulNnkPbkFk9ZOWM_P8dMlnJxo" 
            alt="An illustration of local business marketing in Sreemangal, showing a map with businesses and highlighting services like Local SEO, targeted promotions, and community engagement."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <MapPin className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Google Business Profile (GBP) Management:</strong> Complete optimization of your GBP listing to rank in the Google Maps "Local Pack" and drive direct engagement.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Local Keyword Targeting:</strong> In-depth research to find and target keywords that local customers use to find your services, such as "best restaurant in Sreemangal".</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Reputation Management:</strong> A proactive strategy to generate positive customer reviews on Google and other platforms, boosting your social proof and rankings.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why Local Marketing Matters
            </h2>
            <p className="text-lg">
              Nearly half of all Google searches are for local information. If your business isn't optimized for local search, you're invisible to the majority of your potential customers. Effective local marketing connects you with high-intent customers at the exact moment they need your products or services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              As a local Sreemangal agency, we have a hometown advantage. We don't just understand local SEO; we understand the local economy and culture. MiBrand crafts authentic marketing strategies that resonate with our community, turning your neighbors into loyal customers.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for Local Marketing Services">
                Dominate The Local Map
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default LocalMarketingPage;