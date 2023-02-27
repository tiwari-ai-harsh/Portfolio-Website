'use client';
import { Inter } from '@next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function BlogPage() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <h1 className="text-3xl font-bold underline bg-red-50">
        {' '}
        Hello Blog Page
      </h1>
    </motion.div>
  );
}
