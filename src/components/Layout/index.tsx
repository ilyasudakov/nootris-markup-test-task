import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div``;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
