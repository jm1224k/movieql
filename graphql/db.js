let movies = [
  {
    id: 0,
    name: "Avengers",
    score: 8
  },
  {
    id: 1,
    name: "The Godfather I",
    score: 10
  },
  {
    id: 2,
    name: "White Chicks",
    score: 9
  },
  {
    id: 3,
    name: "Beauty and the Beast",
    score: 7
  },
  {
    id: 4,
    name: "Starwars",
    score: 5
  },
]

export const getMovies = () => movies;

export const getByID = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if(movies.length > cleanedMovies.length){
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  // 비어있는 새로운 movie!
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}
