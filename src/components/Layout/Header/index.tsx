import Link from 'next/link';

import LogoSVG from '@/assets/nootris_logo.svg';
import CartSVG from '@/assets/cart.svg';

import Container from '../Container';

import {
  Cart,
  Nav,
  NavLink,
  Wrapper,
  Content,
  NavItem,
  MobileMenuButton,
  MobileMenuButtonWrapper,
  NavItemMobile,
  MobileMenuWrapper,
} from './styled';
import { useState } from 'react';
import Modal from '../Modal';

const NAV_ITEMS = [
  { text: 'FAQ', href: '/faq' },
  { text: 'Оплата и доставка', href: '/delivery' },
  { text: 'Возврат', href: '/return' },
  { text: 'Исследования', href: '/research' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Content>
          <MobileMenuButtonWrapper
            onClick={() =>
              setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
            }
          >
            <MobileMenuButton isOpen={isMobileMenuOpen} />
          </MobileMenuButtonWrapper>
          <Link href="/">
            <NavLink>
              <LogoSVG />
            </NavLink>
          </Link>
          <Nav>
            <DesktopMenu />
          </Nav>
          <Cart>
            <CartSVG />
          </Cart>
        </Content>
        {isMobileMenuOpen && (
          <Modal
            isOpen={isMobileMenuOpen}
            handleClose={() =>
              setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
            }
          >
            <MobileMenu />
          </Modal>
        )}
      </Container>
    </Wrapper>
  );
}

const DesktopMenu = () => {
  return (
    <>
      {NAV_ITEMS.map(({ text, href }) => (
        <NavItem key={href}>
          <Link href={href}>
            <NavLink>{text}</NavLink>
          </Link>
        </NavItem>
      ))}
      <NavItem id="profile">
        <Link href="/profile">
          <NavLink>Личный кабинет</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <a href="tel:88006000990">
          <NavLink>{`8 8 (800) 600-09-90`}</NavLink>
        </a>
      </NavItem>
    </>
  );
};

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <Link href="/">
        <NavLink style={{ marginBottom: '2rem' }}>
          <LogoSVG />
        </NavLink>
      </Link>
      {NAV_ITEMS.map(({ text, href }) => (
        <NavItemMobile key={href}>
          <Link href={href}>
            <NavLink>{text}</NavLink>
          </Link>
        </NavItemMobile>
      ))}
      <NavItemMobile id="profile">
        <Link href="/profile">
          <NavLink>Личный кабинет</NavLink>
        </Link>
      </NavItemMobile>
      <NavItemMobile>
        <a href="tel:88006000990">
          <NavLink>{`8 8 (800) 600-09-90`}</NavLink>
        </a>
      </NavItemMobile>
    </MobileMenuWrapper>
  );
};
