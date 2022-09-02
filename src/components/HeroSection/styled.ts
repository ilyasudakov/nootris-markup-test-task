import Image from 'next/future/image';
import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  font-size: 2.5rem;
  line-height: 3rem;
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
    text-align: left;
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
      line-height: 3.5rem;
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
      line-height: 5rem;
      text-align: left;
    }
  }
  @media (${device.laptop}) {
    ${Title} {
      font-size: 6rem;
      line-height: 6rem;
    }
  }
  @media (${device.desktop}) {
    ${Title} {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
`;

export const GradientsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  max-height: 100%;
  z-index: 0;
  overflow: hidden;
`;
const handleGradientPosition = (id: number) => {
  switch (id) {
    case 1:
      return `top: 0; left: 0; max-width: min(634px, 100vh);`;
    case 2:
      return `top: 0; right: 0; min-width: auto; max-width: min(786px, 100vh);`;
    case 3:
      return `bottom: 0; right: 0; min-width: auto; max-width: min(696px, 100vh);`;
    case 4:
      return `bottom: 0; left: 0; width: 100vw;`;
    case 5:
      return `top: 0; left: 0; max-width: min(541px, 100vh);`;
    case 6:
      return `top: 0; right: 0; max-width: 1285px; min-width: min(1285px, 100vh);`;
    case 7:
      return `top: 0; left: 0; max-width: 1192px; min-width: min(1192px, 100vh);`;
    case 8:
      return `top: 0; left: 0`;
  }
};
const handleGradientPositionMobile = (id: number) => {
  switch (id) {
    case 1:
      return `align-items: flex-start; top: 0; left: 0; max-width: min(350px, 100vh);`;
    case 2:
      return `align-items: flex-start; top: 0; right: -250px; min-width: min(786px, 100vh); min-height:100%;`;
    case 3:
      return `justify-content: flex-end; align-items: flex-end; bottom: 0; right: -250px; min-width: min(600px, 100vh); min-height:100%;`;
    case 4:
      return `align-items: flex-end; bottom: 0; left: 0;`;
    case 5:
      return `align-items: flex-start; top: 0; left: 0; max-width: min(541px, 100vh);`;
    case 6:
      return `justify-content: flex-end; align-items: flex-start; top: 0; right: 0; max-width: min(1285px, 100vh);`;
    case 7:
      return `justify-content: flex-start; align-items: flex-start; top: 0; left: 0;`;
    case 8:
      return `justify-content: flex-start; align-items: flex-end; bottom: 0; left: 0; max-width: min(737px, 100vh);`;
  }
};
export const Gradient = styled.div<{ _id: number }>`
  height: auto;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  ${({ _id }) => handleGradientPositionMobile(_id)}
  @media (${device.laptop}) {
    ${({ _id }) => handleGradientPosition(_id)}
  }
`;
