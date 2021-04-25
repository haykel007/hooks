import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
const MovieList = (props) => {
	return (
    <div className="ss">
    	{props.movies.map((movie, index) => (
        
    <Card style={{ width: '19rem' }} className="sb">
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body className="de" style={{backgroundColor:"white"}} >
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
            Year : {movie.Year}<br/>
            imdbID : {movie.imdbID}<br/>
            Type : {movie.Type}<br/>
            <StarRatingComponent value={movie.Reating}/>
    </Card.Text>
  </Card.Body>
</Card>))}
</div>
)};
export default MovieList;