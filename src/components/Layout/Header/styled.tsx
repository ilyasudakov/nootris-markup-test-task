import styled from 'styled-components';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--black);
  z-index: 10;
`;
export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-height: 80px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;
export const NavLink = styled.span`
  padding: 0.25rem;
  display: block;
  cursor: pointer;
`;
const CART_ITEMS_COUNT = 1;
export const Cart = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: '${CART_ITEMS_COUNT}';
    position: absolute;
    bottom: 0;
    right: -0.25rem;
    background-color: var(--orange);
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 0.9rem;
    text-align: center;
    border-radius: 100px;
    color: var(--black);
  }
`;
