import React from 'react';
import PageLayout from '@/components/PageLayout';
import Pricing from '@/components/sections/Pricing';
import { packages } from '@/data/content.jsx';

const PricingPage = () => {
  return (
    <PageLayout
      title="Pricing Plans | MiBrand Agency"
      description="We offer clear, straightforward plans designed to meet the needs of businesses at any stage. No hidden fees, just real results."
      canonical="/pricing"
      className="pt-28"
    >
      <main>
        <Pricing packages={packages} />
      </main>
    </PageLayout>
  );
};

export default PricingPage;