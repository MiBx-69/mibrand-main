import React from 'react';
import PageLayout from '@/components/PageLayout';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us | MiBrand Agency"
      description="Get in touch with the MiBrand team. We're ready to discuss your project and help you achieve your business goals. Contact us for a free proposal."
      canonical="/contact"
      className="pt-20"
    >
      <main>
        <Contact />
      </main>
    </PageLayout>
  );
};

export default ContactPage;