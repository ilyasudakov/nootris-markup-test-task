import styled from 'styled-components';

export const PortalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: scroll;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
export const CloseButton = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 2rem;
`;
