import fetch from "node-fetch"

const API_URL = "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"

export const getMovies = (limit) => {

  let REQUEST_URL = API_URL;
  
  if(limit>0 && limit <10){
    REQUEST_URL += `&limit=${limit}`;
  }

  return fetch(`${REQUEST_URL}`)
  .then(res => res.json())
  .then(json => json.data.movies);
}