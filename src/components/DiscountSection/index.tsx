import { StaticImageData } from 'next/future/image';

import Button from '../common/Button';
import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import VirusImage from '@/assets/vorus.png';
import NootrisImage from '@/assets/nootris.png';

import {
  Advantage,
  AdvantagesWrapper,
  AdvantageText,
  AdvantageTypes,
  Heading,
  ImageWrapper,
  PriceDiscount,
  PriceDiscountWrapper,
  StyledImage,
  Wrapper,
} from './styled';

const ADVANTAGES_LIST: {
  image: StaticImageData;
  text: string;
  accent: string;
  type: AdvantageTypes;
}[] = [
  { image: GingerImage, text: 'Содержит', accent: 'имбирь', type: 'ginger' },
  {
    image: NootrisImage,
    text: '+ Бесплатная доставка',
    accent: 'Специальная цена',
    type: 'nootris',
  },
  { image: VirusImage, text: 'Нейтрализует', accent: 'вирусы', type: 'virus' },
];

export default function DiscountSection() {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <span>Получи защиту иммунитета</span>
          <span style={{ color: 'var(--orange)' }}>
            со скидкой -15% первым!
          </span>
        </Heading>
        <PriceDiscountWrapper>
          <PriceDiscount oldPrice>750₽</PriceDiscount>
          <PriceDiscount>690₽</PriceDiscount>
        </PriceDiscountWrapper>
        <AdvantagesWrapper>
          {ADVANTAGES_LIST.map(({ image, text, type, accent }) => (
            <Advantage type={type} key={text}>
              <ImageWrapper type={type}>
                <StyledImage src={image} />
              </ImageWrapper>
              <AdvantageText type={type}>{text}</AdvantageText>
              <AdvantageText type={type} accent>
                {accent}
              </AdvantageText>
            </Advantage>
          ))}
        </AdvantagesWrapper>
        <Button>Оформить заказ!</Button>
      </Wrapper>
    </Container>
  );
}
