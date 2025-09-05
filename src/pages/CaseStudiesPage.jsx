import React from 'react';
import PageLayout from '@/components/PageLayout';
import CaseStudies from '@/components/sections/CaseStudies';
import { caseStudies } from '@/data/content.jsx';

const CaseStudiesPage = () => {
  return (
    <PageLayout
      title="Case Studies | MiBrand Agency"
      description="See real results from our clients. Browse our case studies to see how we've helped businesses like yours achieve massive growth through SEO and digital marketing."
      canonical="/case-studies"
      className="pt-20"
    >
      <main>
        <CaseStudies caseStudies={caseStudies} />
      </main>
    </PageLayout>
  );
};

export default CaseStudiesPage;