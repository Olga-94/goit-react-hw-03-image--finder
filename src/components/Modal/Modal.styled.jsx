import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: auto;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
`;
