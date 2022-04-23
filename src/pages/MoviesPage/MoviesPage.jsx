import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getMovieByQuery } from 'services/movies-api';
import { Link } from 'react-router-dom';
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

export const MoviesPage = () => {
  const [item, setItem] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchMovies === '') {
      return;
    }
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await getMovieByQuery(searchMovies);
        setItem(item.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [searchMovies]);

  const handleSubmit = ({ searchMovies }, { resetForm }) => {
    setSearchMovies(searchMovies);
    console.log();

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
};
