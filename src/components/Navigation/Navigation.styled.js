import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #2196f3;
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Nav = styled.nav`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(77, 77, 77, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(77, 77, 77, 0);
`;
