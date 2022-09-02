import device from 'src/utils/deviceSizes';
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--black);
  z-index: 100;
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
  margin-left: auto;
  margin-right: 0.5rem;
  gap: 2rem;

  @media (${device.laptopL}) {
    margin-left: 0;
    display: flex;
    gap: 1rem;
  }
`;
export const NavLink = styled.span`
  display: flex;
  cursor: pointer;
`;
export const NavItem = styled.span<{ id?: string }>`
  padding: 0.25rem;
  display: none;
  ${({ id }) => id === 'profile' && 'display: none'};
  cursor: pointer;

  @media (${device.mobileL}) {
    display: ${({ id }) => id === 'profile' && 'flex'};
  }
  @media (${device.laptopL}) {
    display: flex;
  }
`;
const CART_ITEMS_COUNT = 1;
export const Cart = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: '${CART_ITEMS_COUNT}';
    position: absolute;
    bottom: -5px;
    left: 70%;
    background-color: var(--orange);
    min-width: 15px;
    height: 15px;
    padding: 1px 1px;
    font-size: 12px;
    line-height: 0.9rem;
    text-align: center;
    border-radius: 100px;
    color: var(--black);
  }
`;

// -- MOBILE MENU
export const MobileMenuButton = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 2px;
  position: relative;
  background-color: var(--white);
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  transform-origin: center;

  &:before,
  &:after {
    transition: 0.5s ease-in-out;
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 100%;
    background-color: var(--white);
    transform-origin: center;
  }
  &:before {
    right: 0;
    top: -10px;
  }
  &:after {
    bottom: -10px;
    right: 0;
  }
  ${({ isOpen }) =>
    isOpen &&
    `transform: rotate(-45deg);
     &:before {
      transform: scaleX(0); 
     }
     &:after {
      transform: rotate(90deg);
      bottom: 0;
      width: 30px;
     }`}
`;
export const MobileMenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 30px;
  width: 30px;
  margin-left: 1rem;

  @media (${device.laptopL}) {
    display: none;
  }
`;
// --
