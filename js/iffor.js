'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
//rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
} //функция проверят сколько фильмов я посмотрел и выдает результат в зав от значения

//detectPersonalLevel();

/* function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); */

function showMyDB() { // создаем функцию
    if (personalMovieDB.privat == true) { //функция проверяем приват, если там стоит тру, то выводит базу данных в консоль и наоборот
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i}`); // задаем пользователю вопрос
        personalMovieDB.genres[i - 1] = question; // добавляем каждый ответ в массив данных
    }
}
writeYourGenres();