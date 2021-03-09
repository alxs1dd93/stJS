



'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};







//start();
//rememberMyFilms();
//detectPersonalLevel();
//showMyDB();
//writeYourGenres(); 







// const obj = {
//     1: 2,
//     3: 4,
// };

// const copy = Object.assign({}, obj);

// copy[1] = 5;

// console.log(obj);
// console.log(copy);





















//musor

/* function showMessage() {
    console.log('Hello World!');
}

showMessage();



function sumcalc(a, b) {
    return a + b;
}

console.log(sumcalc(2, 5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); */

/* const calc = (a, b) => {
    return a + b;
};

console.log(calc(5, 5));

let str = 'kek';
console.log(str[0].toLocaleUpperCase());
console.log(str);

const some = 'Some fruit';

console.log(some.indexOf('Some')); */


/* 
function first() {
    // Do something

    setTimeout(function () {
        console.log(1);
    }, 500);

}

function second() {
    console.log(2);
}
first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); */

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
}; */
//delete options.name;
//console.log(options);

/* for (let key in options) {
    console.log(`Свойства ${key} имеет значение ${options[key]}`);
} */

/* let sum = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            sum++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        sum++;
    }
}
console.log(sum); */

//console.log(Object.keys(options).length);

/* const arr = [1, 2, 30, 26, 14, 12, 7];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} */




/* let kek = 'lol';
arr.push(kek);
console.log(arr); */

/* arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */





/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} */

/* const str = prompt('', '');
const products = str.split(', ');

console.log(products.join(';')); */

//peredacha dannih po ssilke i po znach

/* let a = 5,
    b = a;

b += 5;

console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
}; */
/* const copy = obj;// ssilka
copy.a = 10;
console.log(obj);
console.log(copy); */
/* function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
} */
/* const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}; */
//const newNumbers = copy(numbers);
/* newNumbers.a = 4;
newNumbers.c.x = 10;
console.log(numbers);
console.log(newNumbers); */


/* const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));
clone.d = 1;
console.log(add);
console.log(clone); */

/* const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[0] = '22222';
console.log(oldArr);
console.log(newArr); */

/* const video = ['youtube', 'video', 'rutube'],
      blogs = ['wordpress', 'live', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      
console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); */

/* const arr = ['a', 'b'];

const newArr = [...arr];
console.log(newArr);


const obj = {
    a: 'b',
    c: 'd'
};
const newObj = { ...obj };

console.log(newObj);
 */

/* let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof (strObg));

console.dir([1, 2, 3]); */

/* const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello!');
    }
};

const john = Object.create(soldier);

john.sayHello(); */


/* const john = {
    health: 100,
}; */

//john.__proto__ = soldier;
/* 
Object.setPrototypeOf(john, soldier);//dinamic

john.sayHello();
console.log(john.armor); */

console.log(typeof (parseInt('15px', 10)));

let a = [];
let b = false;
let c = a + b;
console.log(c - null + true);