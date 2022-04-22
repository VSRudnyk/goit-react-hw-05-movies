import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, MoviesPage, MovieDetailsPage } from 'pages';
import { Layout } from './Layout/Layout';
// import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:itemId" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
