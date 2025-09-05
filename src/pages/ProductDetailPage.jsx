import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

function ProductDetailPage() {
  return (
    <PageLayout
      title="Product Not Found"
      description="This product is not available."
      className="pt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-red-400 p-8 glass-effect rounded-2xl">
          <XCircle className="mx-auto h-16 w-16 mb-4" />
          <h1 className="text-3xl font-bold mb-4">Product Not Available</h1>
          <p className="mb-6">The online store is currently disconnected. This product cannot be displayed.</p>
          <Link to="/" className="text-primary hover:underline">
            Go back to Homepage
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetailPage;