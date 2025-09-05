import React from 'react';
import PageLayout from '@/components/PageLayout';
import Faq from '@/components/sections/Faq';
import { faqs } from '@/data/content.jsx';

const FaqPage = () => {
  return (
    <PageLayout
      title="FAQ | MiBrand Agency"
      description="Have questions? Find answers to frequently asked questions about our SEO services, pricing, process, and more. Get the information you need to get started."
      canonical="/faq"
      className="pt-20"
    >
      <main>
        <Faq faqs={faqs} />
      </main>
    </PageLayout>
  );
};

export default FaqPage;