import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies-api';

const useFetcCasts = () => {
  const { itemId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await getMovieCast(itemId);
        setCasts(casts);
      } catch (error) {
        setError(error);
      }
    }
    fetchCasts();
  }, [itemId]);

  return { casts, error };
};

export const Cast = () => {
  const { casts, error } = useFetcCasts();

  return (
    <div>
      {casts.length !== 0 && !error && (
        <ul>
          {casts.cast.map(({ id, profile_path, character, name }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : 'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png'
                }
                alt={name}
              />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
