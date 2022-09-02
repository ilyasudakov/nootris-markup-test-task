import Image from 'next/future/image';
import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  font-size: 4rem;
  font-weight: 700;
  z-index: 10;
`;
export const Subline = styled.p<{ size: 'big' | 'small' }>`
  color: var(--black);
  font-size: ${({ size }) => (size === 'big' ? `1.4rem` : `1rem`)};
  max-width: ${({ size }) => (size === 'big' ? `60%` : `30%`)};
  z-index: 10;
`;
export const Slogan = styled.h2`
  position: relative;
  color: var(--black);
  font-weight: 700;
  font-size: 2rem;
  z-index: 10;
  margin-top: 6.5rem;
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
  ${({ type }) => type === 'ginger' && `bottom: 2rem;`};
  ${({ type }) => type === 'nootris' && `right: 5rem`};
  ${({ type }) => type === 'lemon' && `right: 10rem; bottom: -11rem`};
  @media (${device.mobileL}) {
    ${({ type }) => type === 'ginger' && `max-width: 350px; bottom: 2rem;`};
    ${({ type }) => type === 'nootris' && `max-width: 180px;right: 2rem`};
    ${({ type }) => type === 'lemon' && `max-width: 480px; right: 2rem;`};
  }
  @media (${device.tablet}) {
    ${({ type }) => type === 'ginger' && `max-width: 350px; bottom: 2rem;`};
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
export const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow-hero);
  padding: 5rem 0;

  @media (${device.tablet}) {
    ${Title} {
      max-width: 60%;
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
