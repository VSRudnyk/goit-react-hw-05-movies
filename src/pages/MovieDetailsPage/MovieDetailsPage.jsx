import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/movies-api';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from 'components/Layout/Layout.styled';

export const MovieDetailsPage = () => {
  const { itemId } = useParams();
  const [item, setitem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchitem() {
      setLoading(true);
      try {
        const item = await getMoviesById(itemId);
        setitem(item);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchitem();
  }, [itemId]);

  const { poster_path, original_title, vote_average, overview } = item;

  return (
    <main>
      {loading && (
        <InfinitySpin color="grey" />
        // <Audio height="100" width="100" color="grey" ariaLabel="loading" />
      )}
      {!error && (
        <Container>
          <button type="button">Go back</button>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={original_title}
          />
          <p>{original_title}</p>
          <p>User Score:</p>
          <p>{vote_average}</p>
          <p>Overview: </p>
          <p>{overview}</p>
          <p>Genres</p>
          {/* <p>{genres.map(genre => genre.name)}</p> */}
        </Container>
      )}
    </main>
  );
};
