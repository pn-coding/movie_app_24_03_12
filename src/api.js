const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMzMzA4YTJmMGJiMTY0ZTJhZDEwNTE0YWIzMDg2ZiIsInN1YiI6IjYwMmY2YjZiNjRmNzE2MDA0MDU2MjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JE4tOx9I0MNBy3X-AGsUPZztvJTSo5edEt8HHbIY8go",
  },
};

//내일 now_playing 진행

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () => {
  return fetch(url("movie/popular"), options).then((res) => res.json());
};

export const topRated = () => {
  return fetch(url("movie/top_rated"), options).then((res) => res.json());
};

export const upComing = () => {
  return fetch(url("movie/upcoming"), options).then((res) => res.json());
};

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}?language=ko-kr`;
  return fetch(detailUrl, options).then((res) => res.json());
};

export const searchMovie = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};
