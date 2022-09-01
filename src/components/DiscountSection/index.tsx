import styled from 'styled-components';

import Button from '../common/Button';
import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import VirusImage from '@/assets/vorus.png';
import NootrisImage from '@/assets/nootris.png';
import Image, { StaticImageData } from 'next/future/image';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  gap: 4.5rem;
`;
const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
`;
const PriceDiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const PriceDiscount = styled.div<{ oldPrice?: boolean }>`
  display: flex;
  position: relative;
  padding: 0.5rem 0.6rem;
  ${({ oldPrice }) => `font-size: ${oldPrice ? '2rem' : '2.5rem'}`};
  ${({ oldPrice }) => oldPrice && `color: var(--grey);`};
  ${({ oldPrice }) =>
    oldPrice &&
    `&:after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 0;
    background-color: var(--grey);
    width: 100%;
    height: 2px;
  }`};
`;
const AdvantagesWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-top: -1.5rem;
`;
const StyledImage = styled(Image)`
  display: block;
  height: auto;
`;
const AdvantageText = styled.h3<{ accent?: boolean; type: AdvantageTypes }>`
  font-size: ${({ accent, type }) =>
    type === 'nootris' ? (accent ? `1.5rem` : `2rem`) : `1rem`};
  ${({ accent }) => accent && `color: var(--orange)`};
`;
type AdvantageTypes = 'ginger' | 'nootris' | 'virus';
const ImageWrapper = styled.div<{ type: AdvantageTypes }>`
  position: relative;
  max-width: 480px;
  max-height: 160px;
`;
const Advantage = styled.li<{ type: AdvantageTypes }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${StyledImage} {
    ${({ type }) => type === 'ginger' && `max-width: 10.5rem`};
    ${({ type }) =>
      type === 'nootris' &&
      `left:50%;
     top:50%;
     position:absolute;          
     transform:rotate(-90deg) translate(-50%,-50%);
     transform-origin:top left;
     max-width: 160px;
    `};
  }
  ${AdvantageText} {
    ${({ type }) =>
      type === 'nootris' &&
      `margin-bottom: 0.5rem; &:last-child {
    margin-bottom: 0;
  }`};
  }
  ${ImageWrapper} {
    ${({ type }) => type === 'nootris' && `width: max(480px, 100vw);`}
    margin-bottom: ${({ type }) => (type === 'nootris' ? `2.5rem` : `5rem`)};
    ${({ type }) =>
      type === 'nootris' &&
      `&:before {
      content: '';
      display: block;
      padding-left: 100%;
      padding-top: 100%;
    }`}
  }
`;

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
