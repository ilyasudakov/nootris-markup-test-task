import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Container from '../Container';
import CloseIcon from '@/assets/close-outlined.svg';

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const PortalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
const CloseButton = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export default function Modal({ children, isOpen, handleClose }: IModal) {
  if (!isOpen) return null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (!isOpen) {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <ReactPortal>
      <PortalWrapper onClick={handleClose}>
        <Container style={{ height: '100%', paddingTop: '1rem' }}>
          <Wrapper onClick={(e) => e.stopPropagation()}>
            <CloseButton
              onClick={handleClose}
              className="ml-auto -mr-2 w-fit cursor-pointer p-2"
            >
              <CloseIcon width={25} height={25} />
            </CloseButton>
            <Content>{children}</Content>
          </Wrapper>
        </Container>
      </PortalWrapper>
    </ReactPortal>
  );
}

interface IReactPortal {
  children: React.ReactNode;
}

export function ReactPortal({ children }: IReactPortal) {
  if (document) {
    const element = document.getElementById('portal-root');
    if (!element) return null;
    return createPortal(children, element);
  }
  return null;
}
