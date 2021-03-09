"use strict"; //1 урок

/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50,
};

obj.a = 10;
console.log(obj);

let myName = "Alx";
console.log(name);

{
    var result = 50;
}

console.log(result);  */
/* console.log(-4 / 0);
console.log("string" * 9);

const persone = 'Alex';
console.log(persone);

const bool = false;

let und;
console.log(und);

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj.isMarried);
//console.log(obj['name']);


let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[1]); */
//3 урок

//4 урок
//alert('Hello!');

/* const result = confirm('A you here?');
console.log(result); */

/* const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5); */

/* const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] =  prompt('Как ваша фамилия?', '');
answers[2] = prompt('Как ваше отчество?', '');

document.write(answers); */

//5 урок

/*  const category = "toys";

console.log(`https://someurl.com/${category}/5`); */

/* const user = "Ivan"; 

alert(`Привет, ${user}`); */

//6yrok

//console.log(5 + + '5');

/* let incr = 10,
    decr = 10;

 incr++;
decr--; 

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(2 * 4 === 8);


const isChecked = true,
    isClose = true;
console.log(isChecked || isClose); */

/* 
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    } */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* //!!!условия

if (4 == 2) {
    console.log("Ok!");
} else {
    console.log("NOT OK!");
}

const num = 0;
if (num < 49) {
    console.log("Error");
} else if (num > 50) {
    console.log("MNOGO");
} else {
    console.log("оба ответа не подходят");
}


const num = 10;
switch (num) {
    case 10:
        console.log('YES');
        break;
    case 20:
        console.log('NO1');
        break;
    case 30:
        console.log('NO1');
        break;
    default:
        console.log('NOT TO DAY');
        break;
} */





/* //!!!!Циклы


let num = 50; */

/* while (num < 55) {
    console.log(num);
    num++;
} */

/* 
do {
    console.log(num);
    num++;
}
while (num < 55); 

let i = 1;
for (i; i < 8; i++) {
    console.log(i);
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue; 
    }
    console.log(i);
} */

/* //!!!FUNCTION


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello World! Учись Сашкаааа!');
console.log(num);




function showSecondMessage() {
    console.log('Тестовый тест');
}
showSecondMessage();


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(7, 3));
console.log(calc(2, 3));

function ret() {
    let num = 50;
    return num;
}

const many = ret();
console.log(many); */


/* // !!!методы и свова строк и чисел

 let str = 'text'; 

console.log(str.toLocaleUpperCase());
console.log(str);


const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg);

console.log(logg.substr(6, 5));


const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';
//console.log(parseInt(test));
console.log(parseFloat(test));  */


//!!! callback

/* function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second(); */


/* function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); */


//!!! object


const options = {
    name: 'test',
    width: 1024,
    heighr: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

/* options.makeTest(); */

const { border, bg } = options.colors; 
console.log(border.toUpperCase());




/* let num = 5;
let numTwo = '5';
options.colors.num = 'numTwo';
console.log(options.colors); */
/* console.log(options.name);
delete options.name;
console.log(options); */

console.log(Object.keys(options).length);


//счетчик своййств внутири объекта

/* let counter = 0;




for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
}
console.log(counter); */

/* for (let key in options.colors) {
    console.log(`${key} = ${options.colors[key]}`);
} */


//!!! massivi

/* const arr = [1, 2, 6, 8, 10];
let num = 11;
arr.push(num);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */


/* let str = prompt('Введите продукты', '');

const products = str.split(', ');
console.log(products); */

/* //!! peredacha po ssilke, spread operator

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

newNumbers.a = 10; 
console.log(newNumbers);
console.log(numbers); */

//!!! OOP

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const john = {
    health: 100
};
/* 
john.__proto__ = soldier; */
Object.setPrototypeOf(john, soldier);
/* john.sayHello(); */

console.log(john.sayHello());//??