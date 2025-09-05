import React from 'react';
import PageLayout from '@/components/PageLayout';
import Services from '@/components/sections/Services';
import { services } from '@/data/content.jsx';

const ServicesPage = () => {
  return (
    <PageLayout
      title="Our Services | MiBrand Agency"
      description="Explore our comprehensive digital services including expert SEO, Shopify development, digital marketing, AI automation, and more. Elevate your business with MiBrand."
      canonical="/services"
      className="pt-20"
    >
      <main>
        <Services services={services} />
      </main>
    </PageLayout>
  );
};

export default ServicesPage;