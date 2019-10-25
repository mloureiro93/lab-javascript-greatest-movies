/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (array){ 
    let rates = array.reduce((accumalator, value) => { 
    return accumalator + value["rate"]; 
    },0); 
    let average = rates/array.length; 
    return average;
}
calculateAverageMovieRate(MOVIES);



// Iteration 2: Drama movies - Get the average of Drama Movies
function calculateAverageDramaRate(newArray) {
    const filteredArray = newArray.filter((value) => {
        return value.genre.includes("Drama")
    }) 
  return calculateAverageMovieRate(filteredArray) || 0; 
}; 
 
 calculateAverageMovieRate(MOVIES); 

  

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear (array) { 
    let orderedArray = array.sort((a, b) => { 
        if(a.year === b.year && a.title.toLowerCase() > b.title.toLowerCase()){ 
            return 1;
        } else if(a.year === b.year && a.title.toLowerCase() < b.title.toLowerCase()) { 
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

function countSpielbergDramaMovies (arraySpilb){
    const stevenArray = arraySpilb.filter((value) => {
        if(value.director === 'Steven Spielberg' && value.genre.includes("Drama")) {
            return true;
        } else {
     return false;
}
    });
    return stevenArray.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) { 
    array.sort((a, b) => {
        if(a.title > b.title) { 
            return 1;
            } else if (a.title < b.title) { 
            return -1;
            } else {
            return 0;
            } 
    }); 
        const titles = array.map((value) => { 
            return value.title
        }); 
        const topTwenty = titles.slice(0, 20); 
        return topTwenty; 
    }
        
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movies) {
    return movies.map((movie) => {
        const duration = movie.duration.split('');
        let minutes = 0;
        for (let time of duration) {
            if (time.includes('h')) {
                minutes += parseInt(time)*60;
            } else {
                minutes += parseInt(time)
            }
        }

        return {
            ...movie,
            duration: minutes
        };
    });


}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

//following along in class not complete

function bestYearAvg () {
    if 
    
  const moviesRateYearly = movies.reduce((acccumulator,movie) =>
  {
      const { year, rate} = movie;
      if (!acccumulator[year]) {
          acccumulator[year]=[];
      }
      acccumulator[year].push(rate);
      return accumalator;
  }) {});
  Object.entries(moviesRateYearly).map((item => {
      const year = item[0];
      const rateArray = item[1];
      const avarageRte = rateArray.reduce ((sum,value) => sum + (value/array.length, 0);
      return { year, avarageRate};
  })
.reduce ((bestItem, Item) => )
}
}


