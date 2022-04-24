import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getMovieByQuery } from 'services/movies-api';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

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
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="searchMovies" placeholder="Search movies" />
          <ErrorMessage name="searchMovies" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {loading && <InfinitySpin color="grey" />}
      {item.length !== 0 && !error && (
        <ul>
          {item.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
