import Image from 'next/future/image';
import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  gap: 4.5rem;
`;
export const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
`;
export const PriceDiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const PriceDiscount = styled.div<{ oldPrice?: boolean }>`
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
export const AdvantagesWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5rem;
  column-gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -1.5rem;
  width: 100%;

  @media (${device.laptop}) {
    display: flex;
    width: 90%;
  }
  @media (${device.laptopL}) {
    width: 80%;
  }
`;
export const StyledImage = styled(Image)`
  display: block;
  height: auto;
`;
export const AdvantageText = styled.h3<{
  accent?: boolean;
  type: AdvantageTypes;
}>`
  font-size: ${({ accent, type }) =>
    type === 'nootris' ? (accent ? `1.5rem` : `2rem`) : `1rem`};
  ${({ accent }) => accent && `color: var(--orange)`};
`;
export type AdvantageTypes = 'ginger' | 'nootris' | 'virus';
export const ImageWrapper = styled.div<{ type: AdvantageTypes }>`
  position: relative;
  max-width: 480px;
  max-height: 160px;
`;
export const Advantage = styled.li<{ type: AdvantageTypes }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: fit-content;

  ${({ type }) => type === 'virus' && `grid-column: 2; grid-row: 1;`};
  ${({ type }) =>
    type === 'ginger' && `place-self: end;grid-column: 1; grid-row: 1;`};
  ${({ type }) =>
    type === 'nootris' &&
    `place-self: center;grid-column: 1/span 2; grid-row: 2;`};
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
       pointer-events:none;
  }`}
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
    ${StyledImage} {
      ${({ type }) => type === 'nootris' && `max-width: 160px;`}
    }
  }
`;
