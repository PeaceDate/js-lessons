"use strict";

/* Создать переменную numberOfFilms, и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' 
*/

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

/* Создать объект personalMovieDB со свойствами (сount, movies, actors, genres, privat) */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман!");
    } else {
        alert("Something happend...");
    }
}

detectPersonalLevel ();


/*Задать пользователю вопросы и поместить их в переменные */
function rememberMyFiilms () {
    for (let i = 0; i < numberOfFilms; i++) {
        const a = prompt('Один из последних просмотреных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFiilms ();

// Запись жанров в БД
function writeYourGenres () {
    for (let i = 1; i <= 3 ; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// Функция показывания БД
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);