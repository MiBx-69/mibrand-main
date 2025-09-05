import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const RefundPolicyPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-28"
    >
      <Helmet>
        <title>Refund Policy | MiBrand Agency</title>
        <meta name="description" content="Read the refund policy for MiBrand Agency. Understand our terms regarding service payments and cancellations." />
      </Helmet>
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Refund <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">Last updated: July 25, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="prose dark:prose-invert prose-lg max-w-none mx-auto glass-effect rounded-2xl p-8"
          >
            <h2>Our Commitment</h2>
            <p>At MiBrand Agency, we are dedicated to providing the highest quality digital marketing, SEO, and development services. Our team invests significant time and resources into each project from the moment an order is confirmed. Our policies are designed to reflect the nature of the services we provide.</p>
            
            <h2>No Refund Policy</h2>
            <p>Due to the nature of our services, which involve customized work, strategy planning, and resource allocation, all sales are final. <strong>We do not offer refunds once an order is confirmed and work has commenced.</strong></p>
            <p>When you purchase a service or package from us, you are acknowledging and agreeing to this no-refund policy. This applies to all our services, including but not limited to:</p>
            <ul>
              <li>SEO Services (all packages)</li>
              <li>Website & Shopify Development</li>
              <li>Digital Marketing & Advertising Campaigns</li>
              <li>Telegram Bot & AI Automation Services</li>
              <li>Branding & Strategy Services</li>
            </ul>

            <h2>Client Satisfaction</h2>
            <p>While we do not offer refunds, we are deeply committed to client satisfaction. If you are not satisfied with the service you have received, we encourage you to contact us immediately. We will work diligently to address your concerns, revise strategies, and ensure that we are meeting the agreed-upon project goals.</p>
            
            <h2>Project Cancellation</h2>
            <p>If you wish to cancel a project, please contact us as soon as possible. Depending on the project's stage and the services rendered, we may be able to halt further work. However, payments for work already completed or resources already allocated are non-refundable.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Refund Policy, please contact us at <a href="mailto:contact@mibrand.agency">contact@mibrand.agency</a> before making a purchase.</p>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
};

export default RefundPolicyPage;