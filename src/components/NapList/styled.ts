import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  margin-bottom: 8rem;
`;

export const Item = styled.li`
  display: block;
  border-bottom: 1px solid #ccc;

  &:first-child {
    border-top: 1px solid #ccc;
  }
`;
