let numberOfFilms = prompt('Nece kinoya baxmisan?');

const personalMovieDB = {
    count: umberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Axrinci baxdiginiz film hansidir?');
let b = prompt('Bu filmi nece balla qiymetlendirirsiniz?');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
