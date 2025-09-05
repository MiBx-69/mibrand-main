import React from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Pricing from '@/components/sections/Pricing';
import { services, caseStudies, packages } from '@/data/content.jsx';

const HomePage = () => {
  return (
    <PageLayout
      title="Digital Marketing Agency in Sreemangal | SEO & Web | MiBrand"
      description="MiBrand is Sreemangal's local digital marketing agency, helping businesses in the Sylhet region thrive online. We offer expert SEO, web development, and advertising to get you more local customers. Get your free consultation today!"
      canonical="/"
    >
      <main>
        <Hero />
        <About />
        <Services services={services} />
        <CaseStudies caseStudies={caseStudies} />
        <Pricing packages={packages} />
      </main>
    </PageLayout>
  );
};

export default HomePage;