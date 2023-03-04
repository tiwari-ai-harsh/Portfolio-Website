'use client';
import Scene from '@/components/3d/containers/scene';
import AboutMe from '@/components/home/aboutMe';
import Interests from '@/components/home/interests';
import MeLinks from '@/components/home/meLinks';

export default function Home() {
  return (
    <div>
      <Scene />
      <AboutMe />
      <Interests />
      <MeLinks />
    </div>
  );
}
