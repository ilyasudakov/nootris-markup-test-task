import Image from 'next/future/image';
import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 10;
`;
export const Subline = styled.p<{ size: 'big' | 'small' }>`
  position: relative;
  color: var(--black);
  font-size: ${({ size }) => (size === 'big' ? `1.2rem` : `1rem`)};
  max-width: ${({ size }) => (size === 'big' ? `60%` : `50%`)};
  z-index: 10;
  @media (${device.mobileL}) {
    max-width: ${({ size }) => (size === 'big' ? `70%` : `50%`)};
    font-size: ${({ size }) => (size === 'big' ? `1.4rem` : `1rem`)};
  }
  @media (${device.tablet}) {
    max-width: ${({ size }) => (size === 'big' ? `60%` : `30%`)};
  }
`;
export const Slogan = styled.h2`
  position: relative;
  color: var(--black);
  font-weight: 700;
  font-size: 1.7rem;
  width: 50%;
  z-index: 10;
  margin-top: 4rem;
`;
export const ImagesWrapper = styled.div`
  position: relative;
  z-index: 0;
`;
export const ImageWrapper = styled(Image)<{
  type: 'ginger' | 'nootris' | 'lemon';
}>`
  display: block;
  position: absolute;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 0;
  ${({ type }) =>
    type === 'ginger' && `max-width: 150px; right: 2.5rem; bottom: 3rem;`};
  ${({ type }) => type === 'nootris' && `max-width: 120px;right: 0`};
  ${({ type }) =>
    type === 'lemon' && `max-width: 220px; right: 0; bottom: -6rem`};
  @media (${device.mobileL}) {
    ${({ type }) =>
      type === 'ginger' && `max-width: 150px; right: 5rem; bottom: 5rem;`};
    ${({ type }) => type === 'nootris' && `max-width: 130px;right: 1rem`};
    ${({ type }) =>
      type === 'lemon' && `max-width: 280px; right: 0.5rem; bottom: -6rem`};
  }
  @media (${device.tablet}) {
    ${({ type }) =>
      type === 'ginger' && `max-width: 350px; right: 0; bottom: 4rem;`};
    ${({ type }) => type === 'nootris' && `max-width: 180px;right: 2rem`};
    ${({ type }) => type === 'lemon' && `max-width: 480px; right: 2rem;`};
  }
  @media (${device.laptop}) {
    ${({ type }) => type === 'ginger' && ``};
    ${({ type }) => type === 'nootris' && `max-width: 200px;right: 3rem`};
    ${({ type }) => type === 'lemon' && `max-width: 480px; right: 5rem;`};
  }
  @media (${device.laptopL}) {
    ${({ type }) => type === 'ginger' && `max-width: initial;`};
    ${({ type }) => type === 'nootris' && `max-width: 210px; right: 5rem;`};
    ${({ type }) =>
      type === 'lemon' && `max-width: initial; right: 10rem; bottom: -11rem`};
  }
`;
export const Content = styled.div`
  grid-template-columns: auto;
`;
export const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow-hero);
  padding: 2rem 0;

  @media (${device.mobileL}) {
    ${Title} {
      font-size: 3.5rem;
    }
    ${Slogan} {
      font-size: 1.5rem;
      margin-top: 6.5rem;
    }
  }
  @media (${device.tablet}) {
    padding: 5rem 0;
    ${Title} {
      max-width: 60%;
      font-size: 5rem;
    }
    ${Title}, ${Subline} {
      text-align: left;
    }
  }
  @media (${device.laptop}) {
    ${Title} {
      font-size: 6rem;
    }
  }
  @media (${device.laptopL}) {
  }
  @media (${device.desktop}) {
    ${Title} {
      font-size: 8rem;
    }
  }
`;
