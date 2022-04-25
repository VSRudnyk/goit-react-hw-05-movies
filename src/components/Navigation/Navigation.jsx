import { Link } from './Navigation.styled';
import { Container, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Container>
    </Nav>
  );
};
