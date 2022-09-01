import styled from 'styled-components';
import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import LemonImage from '@/assets/lemon.png';
import NootrisImage from '@/assets/nootris.png';
import Image from 'next/future/image';

const Wrapper = styled.section`
  background-color: var(--yellow-hero);
  min-height: 100vh;
  position: relative;
`;
const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
`;
const Subline = styled.p<{ size: 'big' | 'small' }>`
  color: var(--black);
  font-size: ${({ size }) => (size === 'big' ? `1.4rem` : `1rem`)};
`;
const Slogan = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 2rem;
`;

export default function HeroSection() {
  return (
    <Wrapper>
      <Container>
        <Title>АКТИВИРУЙ ИММУНИТЕТ!</Title>
        <Subline size="big">
          Всего пять секунд в день помогут укрепить иммунитет и повысить
          защитные силы организма
        </Subline>
        <Slogan>NOOTRIS ПОМОГАЕТ</Slogan>
        <Subline size="small">
          Вашему организму во время пандемии и сезонных простуд
        </Subline>
        <div>
          <Image src={GingerImage} />
          <Image src={NootrisImage} />
          <Image src={LemonImage} />
        </div>
      </Container>
    </Wrapper>
  );
}
