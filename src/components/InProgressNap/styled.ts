import styled, { keyframes } from 'styled-components';

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 0.3rem;
  font-size: 1.2rem;
`;

export const Grid = styled.div`
  padding: 1rem;
  box-shadow: 0 0.2rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
`;

export const InnerGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
`;

export const Arrow = styled.div``;

export const Time = styled.p`
  color: #565656;
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  width: 1rem;
  height: 1rem;
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  line-height: 1;
`;
