import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/movies-api';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from './MovieDetailsPage.styled';
import { MovieMarkup } from 'components/MovieMarkup/MovieMarkup';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

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

export default function MovieDetailsPage() {
  const { item, loading, error } = useFetchItem();

  return (
    <main>
      {loading && <InfinitySpin color="grey" />}
      <Container>
        <MovieMarkup item={item} error={error} />
        <AdditionalInformation />
        <Outlet />
      </Container>
    </main>
  );
}
