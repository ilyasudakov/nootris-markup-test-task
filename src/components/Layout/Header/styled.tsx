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
  display: none;

  @media (${device.laptop}) {
    margin-left: 0;
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
  @media (${device.laptopL}) {
    font-size: 1rem;
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
  @media (${device.laptop}) {
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
    transition: 0.3s ease-in-out;
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 100%;
    background-color: var(--white);
    transform-origin: center;
  }
  &:before {
    top: -10px;
  }
  &:after {
    bottom: -10px;
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
export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const MobileMenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 30px;
  width: 30px;
  box-sizing: content-box;
  padding: 0.25rem;
  cursor: pointer;

  @media (${device.laptop}) {
    display: none;
  }
`;
export const NavItemMobile = styled.span<{ id?: string }>`
  padding: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
// --
