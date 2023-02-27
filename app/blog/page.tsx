'use client';
import CardWrapper from '@/components/common/cardWrapper';
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
      <CardWrapper heading="Blogs:">
        My blogs will appear here. (When I'll eventually write some :/)
      </CardWrapper>
    </motion.div>
  );
}
