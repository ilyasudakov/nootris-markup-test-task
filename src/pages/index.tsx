import type { NextPage } from 'next';

import DiscountSection from '@/components/DiscountSection';
import HeroSection from '@/components/HeroSection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <DiscountSection />
    </>
  );
};

export default Home;
