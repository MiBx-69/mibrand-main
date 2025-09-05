import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  return (
    <PageLayout
      title="Payment Successful | MiBrand Agency"
      description="Thank you for your purchase! Your payment was successful and your order is being processed."
      canonical="/success"
      className="pt-28"
    >
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">
            Payment Successful!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your order! We've received your payment and are processing your items. You'll receive an email confirmation shortly.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Link to="/store">Continue Shopping</Link>
          </Button>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default SuccessPage;