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
