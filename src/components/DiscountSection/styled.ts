import Image from 'next/future/image';
import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  gap: 2rem;
  @media ${device.tablet} {
    gap: 4.5rem;
  }
`;
export const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;
export const PriceDiscountWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    gap: 2rem;
  }
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
  gap: 2rem;
  width: 100%;

  @media (${device.tablet}) {
    row-gap: 5rem;
    margin-top: -1.5rem;
  }
  @media (${device.laptop}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
  }
  @media (${device.laptopL}) {
    width: 80%;
  }
`;
// -- IMAGES
export const StyledImage = styled(Image)`
  display: block;
  height: auto;
  max-width: 120px;
`;
export const StyledNootrisImage = styled(Image)`
  display: block;
  height: auto;
`;
// --
export const NootrisImageWrapper = styled.div`
  position: relative;
  max-height: 160px;
`;

export const AdvantageText = styled.h3<{
  accent?: boolean;
  type: AdvantageTypes;
}>`
  text-align: center;
  ${({ type }) => type !== 'nootris' && `font-size: 1rem`};
  ${({ accent, type }) =>
    type === 'nootris' && (accent ? ` font-size: 1rem` : `font-size: 1.5rem`)};
  ${({ accent }) => accent && `color: var(--orange)`};

  @media ${device.tablet} {
    ${({ accent, type }) =>
      type === 'nootris' &&
      (accent ? ` font-size: 1.4rem` : `font-size: 2rem`)};
  }
`;
export type AdvantageTypes = 'ginger' | 'nootris' | 'virus';
export const Advantage = styled.li<{ type: AdvantageTypes }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: fit-content;

  ${({ type }) => type === 'virus' && `grid-column: 2; grid-row: 1;`};
  ${({ type }) =>
    type === 'ginger' &&
    `place-self: end;grid-column: 1; grid-row: 1; max-width: 10.5rem`};
  ${({ type }) =>
    type === 'nootris' &&
    `place-self: center;grid-column: 1/span 2; grid-row: 2;`};
  ${StyledImage} {
    margin-bottom: 2rem;
  }
  ${StyledNootrisImage} {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: rotate(-90deg) translate(-50%, -50%);
    transform-origin: top left;
    max-width: 100px;
  }
  ${AdvantageText} {
    ${({ type }) =>
      type === 'nootris' &&
      `margin-bottom: 0.5rem; &:last-child {
       margin-bottom: 0;
}`};
  }
  ${NootrisImageWrapper} {
    width: 100%;
    max-width: 320px;
    margin-bottom: 1rem;
    &:before {
      content: '';
      display: block;
      padding-left: 100%;
      padding-top: 100%;
      pointer-events: none;
    }
  }
  @media ${device.tablet} {
    ${StyledImage} {
      margin-bottom: 5rem;
      max-width: 200px;
    }
    ${NootrisImageWrapper} {
      max-width: 400px;
      margin-bottom: 2.5rem;
    }
    ${StyledNootrisImage} {
      max-width: 140px;
    }
  }
  @media ${device.laptop} {
    place-self: start;
    ${({ type }) => type === 'ginger' && `place-self: auto;`};
  }
  @media ${device.laptopL} {
    ${NootrisImageWrapper} {
      max-width: 480px;
    }
    ${StyledNootrisImage} {
      max-width: 160px;
    }
  }
`;
