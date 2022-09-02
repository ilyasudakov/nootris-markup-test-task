import Button from '../common/Button';
import Container from '../Layout/Container';

import GingerImage from '@/assets/ginger.png';
import VirusImage from '@/assets/vorus.png';
import NootrisImage from '@/assets/nootris.png';

import {
  Advantage,
  AdvantagesWrapper,
  AdvantageText,
  NootrisImageWrapper,
  Heading,
  PriceDiscount,
  PriceDiscountWrapper,
  StyledImage,
  Wrapper,
  StyledNootrisImage,
} from './styled';

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
          <Advantage type={'ginger'}>
            <StyledImage src={GingerImage} />
            <AdvantageText type={'ginger'}>Содержит</AdvantageText>
            <AdvantageText type={'ginger'} accent>
              имбирь
            </AdvantageText>
          </Advantage>
          <Advantage type={'nootris'}>
            <NootrisImageWrapper>
              <StyledNootrisImage src={NootrisImage} />
            </NootrisImageWrapper>
            <AdvantageText type={'nootris'}>
              + Бесплатная доставка
            </AdvantageText>
            <AdvantageText type={'nootris'} accent>
              Специальная цена
            </AdvantageText>
          </Advantage>
          <Advantage type={'virus'}>
            <StyledImage src={VirusImage} />
            <AdvantageText type={'virus'}>Нейтрализует</AdvantageText>
            <AdvantageText type={'virus'} accent>
              вирусы
            </AdvantageText>
          </Advantage>
        </AdvantagesWrapper>
        <Button>Оформить заказ!</Button>
      </Wrapper>
    </Container>
  );
}
