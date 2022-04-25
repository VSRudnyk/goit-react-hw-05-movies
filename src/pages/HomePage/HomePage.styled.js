import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #212121;
`;

export const Main = styled.main`
  margin-top: 25px;
`;
