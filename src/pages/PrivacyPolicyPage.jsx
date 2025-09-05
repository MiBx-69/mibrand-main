import React from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy | MiBrand Agency"
      description="Read the privacy policy for MiBrand Agency. We are committed to protecting your data and privacy."
      canonical="/privacy-policy"
      className="pt-28"
    >
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">Last updated: July 25, 2025</p>
          </div>

          <div className="prose dark:prose-invert prose-lg max-w-none mx-auto glass-effect rounded-2xl p-8">
            <p>Welcome to MiBrand Agency. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at contact@mibrand.agency.</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us. This includes information provided through our contact form and newsletter subscription, such as your name and email address.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul>
              <li>To send you marketing and promotional communications via our newsletter, powered by Hostinger Reach.</li>
              <li>To respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
              <li>To protect our Services and prevent fraud.</li>
              <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
            </ul>

            <h2>3. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We use Formspree for our contact form and Hostinger Reach for our newsletter, and your data may be processed by these third-party services in accordance with their privacy policies.</p>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>We use cookies to store your theme preference (dark or light mode). This helps us provide a consistent experience on your subsequent visits. We do not use cookies for tracking or advertising purposes.</p>

            <h2>5. How Long Do We Keep Your Information?</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>

            <h2>6. How Do We Keep Your Information Safe?</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2>7. What Are Your Privacy Rights?</h2>
            <p>You have the right to opt-out of our marketing communications at any time. You can exercise this right by clicking on the “unsubscribe” or “opt-out” link in the marketing e-mails we send you. For any other requests regarding your data, please contact us.</p>

            <h2>8. Updates To This Policy</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Last updated” date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;