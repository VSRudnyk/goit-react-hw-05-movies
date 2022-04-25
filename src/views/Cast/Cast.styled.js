import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  margin-top: 25px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: auto;
`;
