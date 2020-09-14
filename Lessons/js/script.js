"use strict";

/* Создать переменную numberOfFilms, и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' 
*/

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms)
/* Создать объект personalMovieDB со свойствами (сount, movies, actors, genres, privat) */

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

console.log(personalMovieDB);