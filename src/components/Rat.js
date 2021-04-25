import React , {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Rat = ({setRateSearch,rateSearch}) => {   
    const  onStarClick= (nextValue) =>{
       setRateSearch(nextValue)
      }
       
        return (
            <div>
             <StarRatingComponent starCount={5} value={rateSearch} onStarClick={onStarClick}/>
            </div>
        )
    };
    export default Rat

