import styled from 'styled-components';
import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import LemonImage from '@/assets/lemon.png';
import NootrisImage from '@/assets/nootris.png';
import Image from 'next/future/image';

const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow-hero);
  padding: 5rem 0;
  /* min-height: 100vh; */
`;
const Title = styled.h1`
  position: relative;
  font-size: 8rem;
  font-weight: 700;
  z-index: 10;
`;
const Subline = styled.p<{ size: 'big' | 'small' }>`
  color: var(--black);
  font-size: ${({ size }) => (size === 'big' ? `1.4rem` : `1rem`)};
  max-width: ${({ size }) => (size === 'big' ? `60%` : `30%`)};
  z-index: 10;
`;
const Slogan = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 2rem;
  z-index: 10;
  margin-top: 6.5rem;
`;
const ImagesWrapper = styled.div`
  position: relative;
`;
const ImageWrapper = styled(Image)<{ type: 'ginger' | 'nootris' | 'lemon' }>`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  ${({ type }) => type === 'nootris' && `right: 8%`}
  ${({ type }) => type === 'lemon' && `right: 12%; bottom: -11rem`}
  ${({ type }) => type === 'ginger' && `bottom: 2rem`}
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
        <ImagesWrapper>
          <ImageWrapper type="ginger" src={GingerImage} />
          <ImageWrapper type="nootris" src={NootrisImage} />
          <ImageWrapper type="lemon" src={LemonImage} />
        </ImagesWrapper>
      </Container>
    </Wrapper>
  );
}
