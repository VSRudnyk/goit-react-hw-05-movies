// import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};
