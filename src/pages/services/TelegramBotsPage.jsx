import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Send, BrainCircuit, Zap } from 'lucide-react';

const TelegramBotsPage = () => {
  return (
    <PageLayout
      title="Custom Telegram Bot Development | MiBrand Agency"
      description="Automate tasks and engage your community with custom Telegram Bot development by MiBrand. We build bots for customer support, group management, and more."
      canonical="/services/telegram-bots"
      className="pt-28"
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Telegram Bot Development
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage the power of Telegram with intelligent, custom-built bots that automate tasks, engage users, and streamline your business operations.
          </p>
        </div>

        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhNw6e82uX3Emv2J4eMEFFVdQfL-KvSMSZXqoRZT8qRn3fB85DSYFvt6zUYg2iA-eV5sm8ZEQXg5IMTzUikPO3v5fNqQpM0o24HvNav925XW2gZPdgXYHuyXfwOb7EIFgbgCWSwnbaix1Zpz-KfXTyIKnxDepmlQCBOH9OitWfVxggGAx5TOXhKZTCDCbM" 
            alt="Infographic on Telegram Bot Development, showing a sample chatbot conversation on a smartphone, its workflow automation process, and a bot analytics dashboard."
            className="w-full h-auto object-cover aspect-[2/1]"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Send className="mr-3 h-8 w-8 text-primary" /> What We Offer
            </h2>
            <ul className="space-y-4 !p-0">
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Custom Bot Development:</strong> Tailor-made bots for community management, customer support, sales, or any unique business process you need to automate.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Session Bots with Proxy Support:</strong> High-performance bots for complex tasks requiring secure, multi-session management and proxy integration.</div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="inline h-6 w-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                <div><strong>Telegram-WhatsApp Automation:</strong> Create seamless workflows and bridges between the two most popular messaging platforms for your business.</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <BrainCircuit className="mr-3 h-8 w-8 text-primary" /> Why Telegram Bots Matter
            </h2>
            <p className="text-lg">
              Telegram is a rapidly growing platform with a highly engaged user base. Bots allow you to interact with this audience in a direct, automated, and scalable way, creating unique interactive experiences that set your brand apart.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center mb-6">
              <Zap className="mr-3 h-8 w-8 text-primary" /> Why Choose MiBrand?
            </h2>
            <p className="text-lg">
              We are experts in building robust, reliable, and user-friendly Telegram bots. Our team works closely with you to develop a custom bot that solves a real business problem and provides a seamless experience for your users.
            </p>
          </div>

          <div className="text-center py-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" title="Contact MiBrand for Telegram Bot Development">
                Build Your Custom Telegram Bot
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default TelegramBotsPage;