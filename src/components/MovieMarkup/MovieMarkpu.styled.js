import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 25px;
`;

export const Score = styled.p`
  font-weight: bold;
`;

export const ScoreContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 25px;
`;

export const Main = styled.main`
  margin-top: 25px;
`;

export const GoBack = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  outline: 1px solid;
  border-radius: 4px;
  color: #212121;
`;
