import axios from 'axios';

export const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  headers: { 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTMwNjAyZGRhM2FkNzVjMjBmZGFjNWMxMTVhZTFhYiIsIm5iZiI6MTc5MTQwODk1Mi4yMDEsInN1YiI6IjZhYzZiYjM4ZmNkODcxMTI4YTNlOTVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uhOnIM6OwvJfNT5i0jKxbimqBe-9d7AHQokXnn0JD3E' 
    }
});

//Axios encapsulate some concepts so we don't have to deal with it
//In this file, we set the base URL that can be used by the anyone who calls it
