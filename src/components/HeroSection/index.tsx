import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import LemonImage from '@/assets/lemon.png';
import NootrisImage from '@/assets/nootris.png';

import {
  ImagesWrapper,
  ImageWrapper,
  Slogan,
  Subline,
  Title,
  Wrapper,
} from './styled';

export default function HeroSection() {
  return (
    <Wrapper>
      <Container>
        {/* <Title>АКТИВИРУЙ ИММУНИТЕТ!</Title> */}
        <Subline size="big">
          Всего пять секунд в день помогут укрепить иммунитет и повысить
          защитные силы организма
        </Subline>
        <Slogan>NOOTRIS ПОМОГАЕТ</Slogan>
        <Subline size="small">
          Вашему организму во время пандемии и сезонных простуд
        </Subline>
        {/* <ImagesWrapper>
          <ImageWrapper type="ginger" src={GingerImage} />
          <ImageWrapper type="nootris" src={NootrisImage} />
          <ImageWrapper type="lemon" src={LemonImage} />
        </ImagesWrapper> */}
      </Container>
    </Wrapper>
  );
}
