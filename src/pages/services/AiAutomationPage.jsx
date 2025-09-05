import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Bot, BrainCircuit, Zap } from 'lucide-react';

const AiAutomationPage = () => {
  return (
    <PageLayout
      title="AI & Automation Services for Businesses | MiBrand Agency"
      description="Boost efficiency and reduce costs with MiBrand's AI and automation solutions. We help businesses in Sylhet automate marketing, sales, and customer support."
      canonical="/services/ai-automation"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            AI Solutions & Business Automation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Work smarter, not harder. We implement intelligent automation solutions that handle repetitive tasks, so you can focus on growing your business.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi-Fi7mglhOdJFVPBMDbUsspL71k26CQo7UEPs6pSmSJ_VjavJoPL7DXt78wGKxtTbTwKSDE3MA9NWt6ejnLw6VDOsm0Bx8kZ89MvhA1v35rW46k_7H8bsceUp0GiFcvmAVeKUN_oZ0eeLp7cQcSNM5f7ogIEYMuW-QoFjpH8u_m4Sy_9EkrSCI3i6evBs" 
            alt="An infographic on MiBrand Agency's AI Solutions & Business Automation, featuring workflow diagrams, predictive analytics dashboards, and Robotic Process Automation (RPA) icons."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Bot className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Custom AI Tools & Workflow Automation:</strong> We design and build custom AI-powered tools and automate your workflows using platforms like Zapier and Make.com.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Chatbot Integration for Websites & Telegram:</strong> Implement intelligent chatbots to provide 24/7 customer support, qualify leads, and streamline communication.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Automated Reporting Dashboards:</strong> We create custom dashboards that automatically pull data from multiple sources, giving you real-time business insights.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why AI & Automation Matters
            </h2>
            <p className="text-lg">
              Automation is the key to scaling efficiently. By letting technology handle routine tasks, you reduce human error, lower operational costs, and free up your team's valuable time to focus on high-impact activities like strategy and customer relationships.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              We make advanced technology accessible. MiBrand identifies the most impactful automation opportunities for your specific business and implements practical, cost-effective solutions that deliver an immediate competitive edge.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for AI & Automation">
                Automate Your Business Processes
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default AiAutomationPage;