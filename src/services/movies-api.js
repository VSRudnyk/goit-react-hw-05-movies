import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b799de2e1359641dffd47460cedfbdc0';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMoviesById = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCast = async id => {
  const respons = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return respons.data;
};

export const getMovieReviews = async id => {
  const respons = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return respons.data;
};

export const getMovieByQuery = async query => {
  const respons = await axios.get(
    `${BASE_URL}search/movie/?api_key=${API_KEY}&query=${query}`
  );
  return respons.data;
};
