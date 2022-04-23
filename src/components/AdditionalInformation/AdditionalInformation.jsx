import { Link } from 'react-router-dom';

export const AdditionalInformation = () => {
  return (
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
};
