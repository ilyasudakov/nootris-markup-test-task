import Image from 'next/future/image';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  background-color: var(--yellow-hero);
  padding: 5rem 0;
`;
export const Title = styled.h1`
  position: relative;
  font-size: 8rem;
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
  color: var(--black);
  font-weight: 700;
  font-size: 2rem;
  z-index: 10;
  margin-top: 6.5rem;
`;
export const ImagesWrapper = styled.div`
  position: relative;
`;
export const ImageWrapper = styled(Image)<{
  type: 'ginger' | 'nootris' | 'lemon';
}>`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  ${({ type }) => type === 'nootris' && `right: 8%`}
  ${({ type }) => type === 'lemon' && `right: 12%; bottom: -11rem`}
${({ type }) => type === 'ginger' && `bottom: 2rem`}
`;
