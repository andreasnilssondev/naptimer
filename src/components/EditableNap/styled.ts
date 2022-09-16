import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Grid = styled.div`
  padding: 1rem;
  box-shadow: 0 0.2rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
`;

export const InnerGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.3rem;
  font-size: 1.2rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  column-gap: 1rem;
`;

export const Remove = styled.div`
  margin-left: auto;
  margin-bottom: auto;
`;

export const Arrow = styled.div`
  margin-bottom: 0.2rem;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;
