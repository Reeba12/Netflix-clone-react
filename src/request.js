const API ="391bbb5aac0d8c068445eae66a872d28";
const request = {
  fetchTrending: `/trending/all/week?api_key=${API}&language=en-us`,
  fetchNetflixoriginals: `/discover/tv?api_key=${API}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
  fectComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
  id: API
};
export default request;