import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getMovieByQuery } from 'services/movies-api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import {
  Container,
  Main,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  List,
  Item,
  ItemLink,
} from './MoviesPage.styled';
import { FaSearch } from 'react-icons/fa';

const initialValues = {
  searchMovies: '',
};

const schema = yup.object().shape({
  searchMovies: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await getMovieByQuery(query);
        setItem(item.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [query]);

  const handleSubmit = ({ searchMovies }, { resetForm }) => {
    setSearchParams({ query: searchMovies });
    resetForm();
  };

  return (
    <Main>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <SearchForm>
            <SearchFormInput
              type="text"
              name="searchMovies"
              placeholder="Search movies"
            />
            <ErrorMessage name="searchMovies" />
            <SearchFormBtn type="submit">
              <FaSearch />
            </SearchFormBtn>
          </SearchForm>
        </Formik>

        {loading && <InfinitySpin color="grey" />}
        {item.length !== 0 && !error && (
          <List>
            {item.map(item => (
              <Item key={item.id}>
                <ItemLink to={`/movies/${item.id}`} state={{ from: location }}>
                  {item.title || item.name}
                </ItemLink>
              </Item>
            ))}
          </List>
        )}
      </Container>
    </Main>
  );
}
