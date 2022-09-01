import type { NextPage } from 'next';

import DiscountSection from '@/components/DiscountSection';
import HeroSection from '@/components/HeroSection';

const Home: NextPage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <DiscountSection />
    </div>
  );
};

export default Home;
