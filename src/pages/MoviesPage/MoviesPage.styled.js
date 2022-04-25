import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Main = styled.main`
  margin-top: 25px;
`;

export const SearchForm = styled(Form)`
  outline: 1px solid;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin-top: 25px;
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
