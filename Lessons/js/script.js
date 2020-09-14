"use strict";

/* Создать переменную numberOfFilms, и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' 
*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

/* Создать объект personalMovieDB со свойствами (сount, movies, actors, genres, privat) */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман!");
} else {
    alert("Something happend...");
}

/*Задать пользователю вопросы и поместить их в переменные */

for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    console.log(personalMovieDB);
}