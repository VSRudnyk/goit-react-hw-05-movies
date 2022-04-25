import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);
