import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';
import { Text } from './Reviews.styled';

const useFetcReviews = () => {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const reviews = await getMovieReviews(itemId);
        setReviews(reviews);
      } catch (error) {
        setError(error);
      }
    }
    fetchCasts();
  }, [itemId]);

  return { reviews, error };
};

export const Reviews = () => {
  const { reviews, error } = useFetcReviews();

  return (
    <div>
      {reviews.length !== 0 && !error && (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <Text>Author: {author}</Text>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
