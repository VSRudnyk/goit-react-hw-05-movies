import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../services/movies-api';
import { InfinitySpin } from 'react-loader-spinner';

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const items = await getTrendingMovies();
        setItems(items.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);
  return { items, loading, error };
};

export default function HomePage() {
  const { items, loading, error } = useFetchItems();
  return (
    <main>
      <h1>Trending today</h1>
      {loading && <InfinitySpin color="grey" />}
      {!error && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
