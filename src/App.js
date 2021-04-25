import React ,{useState} from 'react'
import slimimg from './Slimimg.png';
import Filter from './components/Filter'
import Adds from './components/Adds'
import MovieList from "./components/MovieList"
import Rat from './components/Rat';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [movies,setMovies] = useState([
    {
      "id": uuidv4(),
      "Title": "The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Reating": 5,
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "id": uuidv4(),
      "Title": "The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Reating": 2,
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "id": uuidv4(),
      "Title": "Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Reating": 3,
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "id": uuidv4(),
      "Title": "The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Reating": 4,
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  }
 ])
 const addMovie = (newmovie) => {
  setMovies([...movies, newmovie]);
  
};
const [testSearch, setTestSearch]=useState(false);
const [searchList, setSearchList]=useState(movies);
const [rateSearch, setRateSearch]=useState(0);
function searchByName(searchByName) {
  setSearchList(movies.filter(el => el.Title.toUpperCase().includes(searchByName.toUpperCase()) && el.Reating>=rateSearch ));
setTestSearch(!testSearch)
}
// function searchByRate(rateSearch) {
//   setSearchList(movies.filter(el => el.Reating == rateSearch));
//   setTestSearch(true);
// }
  return (
    <div className="App">
      <Filter searchByName={searchByName}/>
      <Rat setRateSearch={setRateSearch} rateSearch={rateSearch} />
      <MovieList movies={testSearch ? movies : searchList} />
      <Adds addMovie={addMovie}/>
    </div>
  );
}

export default App;
