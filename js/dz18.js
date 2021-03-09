'use strict'; // строгий режим
 

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания







const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // задаем вопрос пользователю

const personalMovieDB = { // создаем объект
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы */
function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Нет доступа!');
    }
}

/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

function writeYourGenres(count) {
    if (isNaN(count) || count < 1) { //!
        console.log('Error!');
    } else {
        for (let i = 0; i < count; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
            personalMovieDB.genres.push(genre); // запись через push
        }
    }
}

//1) В функцию indicateRecentFilms передавать количество фильмов, введенных пользователем. А не countOfFilms, мать его. 

function indicateRecentFilms(count) {
    for (let i = 0; i < count; i++) {
        const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''), // задаем пользователю вопросы
              secondQuestion = prompt('На сколько оцените его?', '');
        
        if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion; // помещаем данные из вопросов в объект movies 
            console.log('Done!');
              // если пользователь отменит prompt, то мы получим значение null ( проверка не нажал ли он отмену)( инфа почему null)
             //a,b не являются пустой строкой и длина данных в переменной а не больше 50,
             //то мы заносим эти данные в объект
        } else {
            console.log('Error');
            i--; // при ошибке возвращаем пользователя назад к вопросам
        } 
    }   //!! номер 1
}

function showYourLevel() {
    const middleLevel = 10;
    const hightLevel = 30;


    if (personalMovieDB.count < middleLevel) {
        console.log('Просмотрено довольно мало фильмов');
     } else if (personalMovieDB.count >= middleLevel && personalMovieDB.count < hightLevel) {
        console.log('Вы классический зритель');
     } else if (personalMovieDB.count >= hightLevel) {
         console.log('Вы киноман');
     } else {
         console.log('Произошла ошибка');
    }  //!! 3 номер
}



let countOfGenres = 3;

/* let countOfFilms = numberOfFilms; */





/* showYourLevel(); */
/* indicateRecentFilms(numberOfFilms); */
/* writeYourGenres(countOfGenres); */
/* showMyDB(); */


