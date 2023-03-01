'use client';
import AboutMe from '@/components/home/aboutMe';
import Interests from '@/components/home/interests';
import MeLinks from '@/components/home/meLinks';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <motion.ul
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.li>
          <AboutMe />
        </motion.li>
        <motion.li>
          <Interests />
        </motion.li>
        <motion.li>
          <MeLinks />
        </motion.li>
      </motion.ul>
    </div>
  );
}
