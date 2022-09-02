import styled from 'styled-components';

import Header from './Header';

const Wrapper = styled.div``;

export default function Layout({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: { [i in string]: string };
}) {
  return (
    <Wrapper className={className} style={{ ...style }}>
      <Header />
      {children}
    </Wrapper>
  );
}
