import { ItemLink, Title } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <>
      <Title>Additional information</Title>
      <ul>
        <li>
          <ItemLink to="cast">Cast</ItemLink>
        </li>
        <li>
          <ItemLink to="reviews">Reviews</ItemLink>
        </li>
      </ul>
      <hr />
    </>
  );
};
