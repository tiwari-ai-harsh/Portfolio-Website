'use client';
import CardWrapper from '@/components/common/cardWrapper';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function BlogPage() {
  return (
    <CardWrapper heading="Blogs:">
      <div className="text-black">
        My blogs will appear here. (When I'll eventually write some :/)
      </div>
    </CardWrapper>
  );
}
