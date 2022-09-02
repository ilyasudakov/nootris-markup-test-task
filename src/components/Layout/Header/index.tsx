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
} from './styled';
import { useState } from 'react';

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
          <Link href="/">
            <NavLink>
              <LogoSVG />
            </NavLink>
          </Link>
          <Nav>
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
          </Nav>
          <Cart>
            <CartSVG />
          </Cart>
          <MobileMenuButtonWrapper
            onClick={() =>
              setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
            }
          >
            <MobileMenuButton isOpen={isMobileMenuOpen} />
          </MobileMenuButtonWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
}
