import Link from 'next/link';
import styled from 'styled-components';

import LogoSVG from '@/assets/nootris_logo.svg';
import CartSVG from '@/assets/cart.svg';
import Container from '../Container';

const NAV_ITEMS = [
  { text: 'FAQ', href: '/faq' },
  { text: 'Оплата и доставка', href: '/delivery' },
  { text: 'Возврат', href: '/return' },
  { text: 'Исследования', href: '/research' },
  { text: 'Личный кабинет', href: '/profile' },
];
const CART_ITEMS_COUNT = 1;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-height: 80px;
  background-color: var(--black);
  border-bottom: 1px solid red;
`;
const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;
const NavLink = styled.span`
  padding: 0.25rem;
  display: block;
  cursor: pointer;
`;
const Cart = styled.div`
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

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoSVG />
        <Nav>
          {NAV_ITEMS.map(({ text, href }) => (
            <Link key={href} href={href}>
              <NavLink>{text}</NavLink>
            </Link>
          ))}
          <a href="tel:88006000990">
            <NavLink>{`8 8 (800) 600-09-90`}</NavLink>
          </a>
        </Nav>
        <Cart>
          <CartSVG />
        </Cart>
      </Wrapper>
    </Container>
  );
}
