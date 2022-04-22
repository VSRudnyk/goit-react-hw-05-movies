import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/movies-api';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from 'components/Layout/Layout.styled';

const useFetchItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await getMoviesById(itemId);
        setItem(item);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [itemId]);

  return { item, loading, error };
};

export const MovieDetailsPage = () => {
  const { item, loading, error } = useFetchItem();
  const { poster_path, original_title, vote_average, overview, genres } = item;

  return (
    <main>
      {loading && <InfinitySpin color="grey" />}
      {item.length !== 0 && (
        <Container>
          <button type="button">Go back</button>
          {!error && (
            <>
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
              <p>{genres.map(genre => genre.name).join(' ')}</p>
            </>
          )}
        </Container>
      )}
    </main>
  );
};
