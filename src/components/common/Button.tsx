import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 0.9rem 3rem;
  background-color: var(--orange);
  border-radius: 7px;
  cursor: pointer;
`;

export default function Button({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
