/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        console.log('Yes, done')
    } else {
        console.log('No, ERROR');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Введите число");
}

console.log(personalMovieDB); *///!! функции

/* let firstNumber = +prompt('Введите первое число', '');
let secondNubmber = +prompt('Введите второе число', '');
let threeNum = +prompt('Введите 3 число', '');

function sum(one, two) {
    let result = one + two;
    return result;  
}

 let answer = sum(firstNumber, secondNubmber);
console.log(answer);  */



/* let firstQuestion = +prompt('Введите ваше любимое число', '');

function check(num) {
    if (num > 10) {
        return true;
    } else {
        return false;
}
}

let trueCheck = check(firstQuestion);

if (trueCheck) {
    console.log('Число больше 10 и равно ' + firstQuestion);
} else {
    console.log('Ваше число ниже 10 и равно '  + firstQuestion);
} */

/* const a = 5,
      b = 3,
      c = 3;
      
function perimetr(one, two, three) {
    let sum = (one + two + three);
    return sum;
}

let answer = perimetr(a, b, c);
console.log(answer); */