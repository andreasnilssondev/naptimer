import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  display: block;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  &:first-child {
    border-top: 1px solid #ccc;
  }
`;
