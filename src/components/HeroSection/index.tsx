import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import LemonImage from '@/assets/lemon.png';
import NootrisImage from '@/assets/nootris.png';
import {
  Gradient1,
  Gradient2,
  Gradient3,
  Gradient4,
  Gradient5,
  Gradient6,
  Gradient7,
  Gradient8,
} from './gradients';

import {
  Content,
  Gradient,
  GradientsWrapper,
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
      <GradientsWrapper>
        <Gradient _id={1}>
          <Gradient1 />
        </Gradient>
        {/* <Gradient _id={2}>
          <Gradient2 />
        </Gradient>
        <Gradient _id={3}>
          <Gradient3 />
        </Gradient>
        <Gradient _id={4}>
          <Gradient4 />
        </Gradient>
        <Gradient _id={5}>
          <Gradient5 />
        </Gradient>
        <Gradient _id={6}>
          <Gradient6 />
        </Gradient>
        <Gradient _id={7}>
          <Gradient7 />
        </Gradient>
        <Gradient _id={8}>
          <Gradient8 />
        </Gradient> */}
      </GradientsWrapper>
      <Container>
        <Content>
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
        </Content>
      </Container>
    </Wrapper>
  );
}
