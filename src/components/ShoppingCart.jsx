import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as ShoppingCartIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShoppingCart = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-[60]"
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl flex flex-col glass-effect"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-2xl font-bold text-foreground">Shopping Cart</h2>
              <Button onClick={() => setIsCartOpen(false)} variant="ghost" size="icon" className="text-foreground hover:bg-accent">
                <X />
              </Button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto">
              <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                <ShoppingCartIcon size={48} className="mb-4" />
                <p>Your cart is empty.</p>
                <p className="text-sm mt-2">Online store functionality is currently disabled.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;