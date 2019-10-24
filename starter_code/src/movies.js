/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (moviesArray) {
    let ratesCount = 0;
     for (let i = 0; i < moviesArray.length; i++)
      {
        ratesCount += moviesArray[i].rate;
      
    
};
let ratesDivided = ratesCount/arrayOfMovies.length;
    return ratesDivided
}
      
     


// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate (array) {
const dramaArray = array.filter((movie) => {
  return movie.genre.includes("Drama") 
       
    })
  return calculateAverageMovieRate(dramaArray) || 0
  };

  

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear (array) { 
    let orderedArray = array.sort((a, b) => { 
        if(a.year === b.year && a.title > b.title){ 
            return 1;
        } else if(a.year === b.year && a.title < b.title) { 
            return -1;
        } else if (a.year > b.year) { 
            return 1;
        } else if (a. year < b.year){ 
            return -1;
        } else { 
            return 0; 
        } 
        });
    return orderedArray;
    } 
     
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (arraySpilb) {
    let spilbMovies = arraySpilb 

}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


