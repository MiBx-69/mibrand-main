import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductsList from '@/components/ProductsList';
import { motion } from 'framer-motion';

const StorePage = () => {
  return (
    <PageLayout
      title="Store | MiBrand Agency"
      description="Browse our collection of exclusive products, services, and digital assets. Find everything you need to grow your brand."
      canonical="/store"
      className="pt-28"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Store</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of digital products and services.
          </p>
        </motion.div>
        <ProductsList />
      </main>
    </PageLayout>
  );
};

export default StorePage;