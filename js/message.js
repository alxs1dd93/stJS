
//!Услвовия 

/* //!1
let a = -3;

if (a == 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
} */


//2

/* let a = -3;

if (a > 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}  */

//3

//!Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.


/*  let a = -3;

if (a >= 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}   */

//! Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3;
/* let a = 'test';

if (a == 'test') {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}    */

//!Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
/* 
let a = 2;


if (a > 0 && a < 5) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}  */

//!!Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
//!!Выведите новое значение переменной на экран.
//!!Проверьте работу скрипта при a, равном 5, 0, -3, 2.

/* let a = 0;

if (a === 0 || a === 2) {
    a = a + 7;
} else {
    a = a / 10;
}
alert(a); */


//! Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность(результат вычитания);
//!Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

/* let a = 0;
let b = 6;
let c;


if (a <= 1 && b >= 3) {
    c = a + b;
} else {
    c = a - b;
}

console.log(c); */

//!Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

/* let a = 0;
let b = 0;


if (a > 2 && a < 11 || b >= 6 && b < 14) { // у кого проиритет ? нужны ли скобки?
    console.log('Верно!');
} else {
    console.log('Не верно!');
} */


//Переменная num может принимать 4 значения: 1, 2, 3 или 4.
//Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
//Решите задачу через switch-case.

/* let num = 11;
let result;

switch (num) {
    case 1:
       console.log(result = 'зима');
      break;
    case 2:
        console.log(result = 'весна');
      break;
    case 3:
        console.log(result = 'лета');
        break;
    case 4:
        console.log(result = 'осень');
        break;
    default:
      console.log( "Нет таких значений" );
  } */

  //!В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

/* let day = 22;

let first = 'Число попадает в 1 декаду';
let second ='Число попадает в 2 декаду';
let three = 'Число попадает в 3 декаду';

if (day <= 11) {
    console.log(first);
} else if (day < 21) {
    console.log(second);
} else {
    console.log(three);
} */

//! В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

/* let month = 1;

if (month >= 1 && month < 4) {
    console.log('Это зимний период!');
} else if (month >= 4 && month <= 6) {
    console.log('Это весенний период!');
} else if (month >= 7 && month <= 9) {
    console.log('Это летний период!');
} else {
    console.log('Это осенний период!');
} */


//! Создайте массив и заполните его случайными числами. Выведете на экран. (Math.Random гугли на мсдн);
/* 
let arr = [];
let num = 1;
 */

/* while (num < 10) {
    num++;
    arr.push(num);
}
console.log(arr); */

/* arr.push(1, 3, 5, 8);

console.log(arr); */

/* let arr = [];
let num = 1;

while (num < 10) {
    arr.push(Math.random()); // возвращает случайное число от 0 до 1
    num++;
}
console.log(arr); */

/*
//!!Создайте массив arr с элементами 2, 5, 3, 9. 
//!Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//!Результаты сложите, присвойте переменной result.Выведите на экран значение этой переменной. 

let arr = [2, 5, 3, 9];
let result;

let sum1;
let sum2;

sum1 = arr[0] * arr[1];
sum2 = arr[2] * arr[3];
result = sum1 + sum2;
console.log(result); */





/* //!! Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
 let obj = { Коля: '1000', Вася: '500', Петя: '200' }; 


 let arr = [{Коля: '1000'},{Вася: '500'}, {Петя: '200'}];

console.log(arr[0].Коля);
console.log(arr[2].Петя);  */


//!Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
/*  const obj = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье',
};

console.log(obj[4]);  */

//!Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day. Продолжение предыдущего задания
//!Многомерные массивы 


/* let day = 3;

const obj = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};

console.log(obj[day]);  */

//!!Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

/* let arr = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]];
           
console.log(arr[1][0]); */

//! Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

/* let obj = {
    js: ['jQuery', 'Angular'], php: 'hello', css: 'world'
};

console.log(obj.js[0]); */

//!! Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/* 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, 8, 9];

//arr1.push(arr2[0], arr2[1], arr2[2]); 

//console.log(arr1); 

for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
}
console.log(arr1); */


/* //!! Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
 let arr = [1, 2, 3]; 
let arr2 = [];
// reverse? 
// sort? 
for (; ;) { // вывести элементы с конца
    arr2.push(arr1[i]);
} */
/* arr.pop();
arr.push(1);
arr.shift();
arr.unshift(3);



console.log(arr); */

/* let kek = arr.shift();
console.log(kek);

let lel = arr.pop();
console.log(lel);

arr.unshift(lel);
arr.push(kek);
console.log(arr); //2 */

//!! Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы [1, 2, 3].

/* let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3)); */

//!! Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

/* let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(3));  */


// !!  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

/* let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);
console.log(arr); */

//! Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/* 
let arr = [1, 2, 3, 4, 5];

arr.splice(3, 0, 'a', 'b', 'c');

console.log(arr); */

//!! Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

/* let arr = [3, 4, 1, 2, 7];           
arr.sort();
console.log(arr);   */

// !! Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. (Подсказка Object.keys)

/* let obj = {
    js: 'test', jq: 'hello', css: 'world'
};

console.log(Object.keys(obj));
console.log(Object.values(obj)); */

//!! Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

/* let arr = [2, 5, 9, 15, 0, 4]; */
/* 
let num = arr.length;
console.log(num); */

/* for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
} */

//!!Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
//!!Если есть - выведите на экран 'Есть!' и выйдите из цикла.Если нет - ничего делать не нужно.

/* let arr = [1, 2, 5, 9, 4, 13, 4, 10];



for (let i = 0; i < arr.length; i++) {
    // Арр итая означает то что я беру итый элемент массива  
    if (arr[i] === 4) { 
        console.log('Жи есть!');
        break;
     
    } else {
        console.log('Ничего не делаю!');
    }
    
} */

//!! Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

/* let arr = [10, 20, 30, 50, 235, 3000];
let test; 
//console.log(typeof(test));

for (let i = 0; i < arr.length; i++) {
    test = arr[i].toString();
    
    if (test[0] == 1 || test[0] == 2 || test[0] == 5) {
        console.log(arr[i]);
    }

} */


//!!Дан массив с числами.Числа могут быть положительными и отрицательными.
//!!Найдите сумму положительных элементов массива.Массив должен быть заполнен случайными числами

/* const arr = [];

arr.push(4, 5, 7, -8, 2, -12);
console.log(arr);

let sum = 0; // старотовая точка для счета( обязательный элемент в решении задачи)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i];// добавляет по условию только положительные элементы в старотовую точку для счета
    }
}
console.log(sum); */


//!!Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
//!!Какое число получится ?
//!!Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

/* let n = 1000;
let num = 0;

while(n >= 50) { // работай пока n больше или равен 50.
    n = n / 2;   // дели н на 2.
    num++;
}

console.log(n);
console.log(num); */


//!!! СТРОКИ


//!! Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

// let string = 'aaa@bbb@ccc';
// let reString = /@/gi;
// string = string.replace(reString, '!');

// console.log(string);

//!! Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

/* let string = 'aaa bbb ccc'; */


/* console.log(string.substr(0, 3) + string.substr(7)); */

/*  console.log(string.substring(0, 3) + string.substring(7)); */ 

/*   console.log(string.slice(0, 3) + string.slice(7)); */

//!! Дана строка 'js'. Сделайте из нее строку 'JS'.

/* let js = 'js';

console.log(js.toLocaleUpperCase()); */


//!! Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

/* let string = 'я учу javascript!';

console.log(string.length);  */


//!! Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

/* let string = 'я учу javascript учу !';

console.log(string.indexOfAll('учу')); */


//!! Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.


/* let string = 'Я-учу-javascript!';
let reString = /-/gi;
string = string.replace(reString, '!');

console.log(string); */

//!! Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

/* let str = 'я учу javascript!';
const re = str.split(" ");
console.log(re); */


//!! Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

/* let arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+')); */

//!! Преобразуйте первую букву строки в верхний регистр.

/*  let string = 'aaa@bbb@ccc'; */

/*let reString = /@/gi;
string = string.replace(reString, '!');

console.log(string); */


/* let str = 'я учу javascript!'; */
/* str = str[0].toUpperCase() + str.substring(1);


/* let str = 'я учу javascript!'; */

/* let string = 'I am  the code'; */

/* console.log(
    str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);  */// ОБОЖАЮ СТРОКИ И ГУГЛ ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ

/* // !!! Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let string = 'var_test_text';
let arr = string.split('_');

let str = 'var_test_text'; *///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//!! Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел, расположенных между 1 и n включительно.


/* function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) { 
        sum = sum + i;
    }
    return sum;
}

console.log(sum(5));

sum = 0 + 0 = 0;
sum = 0 + 1 = 1;
sum = 1 + 2 = 3;
sum = 3 + 3 = 6;
sum = 6 + 4 = 10;
sum = 10 + 5 = 15; */ // на 6 повроте цикла итератор донал n  и цикл остановился */

/* //!!Напишите цикл,  выводит такой треугольник:
#
##
###
####
#####
######
#######
Обернуть в функцию. Через аргумент задавать количество строк треугольника */

/* function funSim(n) {
    let sim = '';
   
    for (let i = 0; i < n; i++) {
        sim = sim + '#';
        console.log(sim);
    }
}

funSim(6); */




//!!Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
//!!Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.
//!!Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5
//!!Математические функции есть на learn javascript. 

/* for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('‘Fizz’');
    } else if (i % 5 === 0) {
        console.log('‘Buzz’');
    } else {
        console.log(i);
    }
}  */
/* 
 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0 ) {
        console.log('«FizzBuzz»');
    } else {
        console.log(i);
    }
} */

/*  Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.На каждой позиции либо пробел, либо #.
В результате должна получиться шахматная доска.
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # # */

/* let sim = '# # # #';

for (let i = 0; i <= 7; i++) {
    if (i % 2 == 0) {
        console.log(sim); 
    } else {
        console.log(' ' + sim);
    }
} */

//!! Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них. 
//!!max по аналогии. 

/* function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
console.log(min(13, 12));

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(13, 12)); */




function isOdd(num) {
    return num % 2 == 0;
}

console.log(isOdd(3));

console.log(5 > 3 > 2);