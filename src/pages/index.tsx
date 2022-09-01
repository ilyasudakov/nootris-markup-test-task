import type { NextPage } from 'next';
import LogoSVG from '/public/nootris_logo.svg';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;

const Header = () => {
  return (
    <header>
      <LogoSVG />
    </header>
  );
};
