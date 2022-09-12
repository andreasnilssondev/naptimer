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
  background-color: #ddd;
  margin: 0;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  padding: 0.5rem;
  margin: -0.5rem;
  ${props => props.$appearance === 'primary' && primaryStyles};
  ${props => props.$rounded && roundedStyles};
`;
