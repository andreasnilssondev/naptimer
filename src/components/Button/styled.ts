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
`;

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem;
  ${props => props.$appearance === 'primary' && primaryStyles};
  ${props => props.$rounded && roundedStyles};
`;
