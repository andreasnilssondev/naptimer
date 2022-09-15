import styled, { css } from 'styled-components';
import { StyledButtonProps } from './types';

const roundedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 99999rem;
  padding: 1rem;
`;

const primaryStyles = css`
  background-color: #3b548e;
  color: #eee;
  box-shadow: 0rem 0.2rem 0.5rem 0.05rem rgba(0, 0, 0, 0.3);
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  padding: 0.5rem;
  ${props => props.$appearance === 'primary' && primaryStyles};
  ${props => props.$rounded && roundedStyles};
`;
