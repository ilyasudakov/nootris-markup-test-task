import Link from 'next/link';

import LogoSVG from '@/assets/nootris_logo.svg';
import CartSVG from '@/assets/cart.svg';

import Container from '../Container';

import { Cart, Nav, NavLink, Wrapper, Content, NavItem } from './styled';

const NAV_ITEMS = [
  { text: 'FAQ', href: '/faq' },
  { text: 'Оплата и доставка', href: '/delivery' },
  { text: 'Возврат', href: '/return' },
  { text: 'Исследования', href: '/research' },
];

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <LogoSVG />
          <Nav>
            {NAV_ITEMS.map(({ text, href }) => (
              <NavItem key={href}>
                <Link href={href}>
                  <NavLink>{text}</NavLink>
                </Link>
              </NavItem>
            ))}
            <NavItem>
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
        </Content>
      </Container>
    </Wrapper>
  );
}
