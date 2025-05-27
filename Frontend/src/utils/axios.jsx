import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzliZjg4ZWNjMzc0YTljODk2ZDNhNDlkNGYzMjQ3MSIsIm5iZiI6MTczOTk0MzcwOC45OTQsInN1YiI6IjY3YjU2ZjFjNjBiMThhNTY5OGRmYjNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dwhIZomff1JO-r3_zBeTNPeBHG-b4SqwCYsjQrW6TE4",
  },
});

export default instance;


