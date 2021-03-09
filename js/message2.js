"use strict";
//!!! На будущее найти в гугле функцию для случайных чисел. rand(min, max). Функция выдает случайное число в заданном диапозоне от min, до max, включая оба. 


/* function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
console.log(randomInteger(1, 100)); */
  


//!!! Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
//!!! Сделать с помощью сортировки. Reverse. Выводом с конца с помощью цикла.

/* const arr = [1, 2, 3];
const secondArr = []; */
/* let last = arr.length - 1; */  // определяем номер последнего элемента( чтобы найти последний элемент мы  
//проверяем кол - во элементов массива и отнимаем от неё  1(т.к нумерация эл - ов в массиве идет с[0]))
/*  arr.reverse();
console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    secondArr.push(arr[last]);
    last--;

    console.log(secondArr);
} */

/* for (let i = arr.length - 1; i >= 0; i--) {
    secondArr.push(arr[i]);
    console.log(secondArr);
} */

/* let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );//!!! 


///!!! Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
//!! С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Не знает что такое break; continue;++

/* const arr = [1, 2, 5, 9, 4, 13, 4, 10]; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log('Ежжи, число есть в наличии, мамой клянусь!');
        break;
    }
} 

/* for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        continue;// прерывает все что ниже
    }
    console.log(arr[i]);  
} */

//!!! Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
//!!! let str = 'var_test_text';

/* let str = 'var_test_text';
let arr = str.split('_');
let newArr = ''; */

//newArr.push(arr[0]);
/* newArr =arr[0] + arr[1][0].toUpperCase() + arr[1].substring(1) + arr[2][0].toUpperCase() + arr[2].substring(1); */

/*  for (let i = 0; i < arr.length; i++) {
    newArr = newArr + arr[i][0].toUpperCase() + arr[i].substring(1);
    console.log(newArr);
}

console.log(newArr);  */



//!!-Напишите цикл, который выводит такой треугольник:
//!!Kappa
//!!Kappa Kappa
//!!Kappa Kappa Kappa 
//!!Kappa Kappa 
//!!Kappa
//!!Цикл обернуть в функцию. Добавить параметр, который отвечает за максимальное количество капп. В примере 3.

/*  function createTriangle(n) {
    let str = '';
    let secondStr = 'Kappa';
    for (let i = 0; i < n; i++){
        str = str + secondStr;
        console.log(str);
    }
    let newStr = '';
    let newSecondStr = 'KappaKappa';
    for (let i = 0; i < n; i++){
        newStr = newStr + newSecondStr;
        console.log(newStr);
        break;
    }


}
createTriangle(10);  */

/*  const arr = [];

function createTriangle(n) { 
    for (let i = 0; i < n; i++) {
        arr.push('Kappa');
        console.log(arr.join(''));
    }


    for (let i = 0; i < n - 1; i++) {
        arr.pop();
        console.log(arr.join(''));
    } 

 }
createTriangle(1);  */


//!! Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.


/*  const arr = [1, 7, 5, 71, 2, 9];
let flag = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        flag = 1;
        break;
    }

}
if (flag === 1) {
    console.log('Да!');
} else { 
    console.log('Нет!');
}  */ /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//!! Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

const arr = [1, 7, 71, 2, 9, 5, 5];
let flag = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) { //!! схуяли это работает
        flag = 1;
        break;
    }
}
if (flag === 1) {
    console.log('Да!');
} else { 
    console.log('Нет!');
} 


//!!! Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

/* function letsSum(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
    
}

console.log(letsSum(3, 2)); */

//!! Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

/*  function letsSum(n) {
    if (n < 0) {
        return true;
    } else {
        return false;
     }
}
console.log(letsSum(2)); */

//!! Написать функцию arrayFill(size), где size размер квадратной матрицы. Функция должна возвращать двумерный массив заполненный случайными числами в диапозоне 1-10.

/*  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);//выдает случайное число
  }
  
function arrayFill(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(randomInteger(1, 10));
    }
    return arr;
}
let sum = arrayFill(4);
console.log(sum);  */




/* function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
function arrayFill(size) {
    let bigArr = [];
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr = [];
        for (let a = 0; a < size; a++) {
            arr.push(randomInteger(1, 10));
        }
        bigArr.push(arr);
    }
    
    return bigArr;
}
let sum = arrayFill(4);
console.log(sum); 
console.log(sum[3][0]);  */

//!!! Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
//!!! Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.

/*  let arr = [1, 4, 6, -3, 4, -5];

let newArr = [];

function isPositive(n) {
    return n >= 0;
}


for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);  */

//!!! Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/* let arr = [1, 4, 6, 3, 4];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > 10) {
        console.log('Колличество попыток равно ' + (i + 1));
        break;
    }
    
}  */

/*  - Написать функцию, которая принимает параметром год. Проверить является ли год високосным. 
Условие:
Если год не делится на 4, значит он обычный.+
Иначе надо проверить не делится ли год на 100.+
Если не делится, значит это не столетие и можно сделать вывод, что год високосный.+
Если делится на 100, значит это столетие и его следует проверить его делимость на 400.
Если год делится на 400, то он високосный.
Иначе год обычный. 
https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4 */


/*  function leapYear(year) {
    if (year % 4 !== 0) {
        console.log('Это обычный год!');
    } else if (year % 100 !== 0 || year % 400 == 0 ) {
        console.log('Этот год високосный!');
    }
      else {
        console.log('Это обычный год!');
    }
}
    
leapYear(400);
 */
/* 
 function leapYear(year) {
    if ((year % 100 !== 0 || year % 400 == 0) && year % 4 == 0) {
        console.log('Этот год високосный!');
    } else {
        console.log('Это обычный год!');
    }
}
leapYear(100);  */





// year % 400 == 0; //как засунуть, подумой!

//!!! Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
//!! Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.Функция должна возвращать true или false.
/* let arr = ['мая', 'октябрь', 'ноябрь', 'декабрь', 'январь', 'февраль'];

function inArray(text, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == text) {
            return true;
        }
    }
    return false;
}


console.log(inArray('сентябрь', arr)); */ 


/* Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
Напишите функцию checkTicket(number) которая проверяет счастливость билета.
Примеры
checkTicket('005212') === true
checkTicket('133700') === true
checkTicket('123032') === false */

/*  function checkTicket(number) {
    if ((Number(number[0]) + Number(number[1]) + Number(number[2])) == (Number(number[3]) + Number(number[4]) + Number(number[5]))) {
        return true;
    }
    return false;
}
console.log(checkTicket('123032'));  */

/* let number = '133212';
console.log(sum = (Number(number[0]) + Number(number[1]) + Number(number[2]))); */

/* Напишите функцию isPalindrome(value) определяющую, является ли переданная строка палиндромом, то есть строкой, которая одинаково читается слева направо и справа налево.
Примеры
isPalindrome('121') === true
isPalindrome('boob') === true
isPalindrome('true') === false */



/*  function isPalindrome(value) {
    for (let i = 0; i < value; i++) {
        if (value.split("").reverse().join("") == value) {
            return true;
       }    
    }
    return false;
}

console.log(isPalindrome('boob'));  *///!!!!!!!!!!!!!!!!
/* let arr = [];
    
    for (let i = 0; i < 5; i++) {
    arr.push(Math.random());
    }
    console.log(arr);  */

  /*   Напишите код, выполнив задание из каждого пункта отдельной строкой:

    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта. */

/*  let user = {

};
    user.name = 'John';
    user.surname = 'Smith';
    console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);  */


//!! Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//!! Должно работать так:
/* let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

/* let schedule = {};
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule) ); */



/* const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete"; */
  //da


  //У нас есть объект, в котором хранятся зарплаты нашей команды:
  //Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390
  //Если объект salaries пуст, то результат должен быть 0.



/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(x) { 
    let sum = 0;
    for (let key in salaries) {// выведи все ключи из обекта
        sum = sum + salaries[key];
    }
    return sum;
}
console.log(sumSalaries(salaries));  */





/* function sumSalaries(x) {
    console.log(Object.values(x));
    for (let i = 0; i < salaries.length; i++)

}

sumSalaries(salaries); */


/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

 до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

 после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */



/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
    }
}
}
multiplyNumeric(menu);
console.log(menu); */



/* let menu = [200, 300, "My menu"];

function multiplyNumeric(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arr[i] = arr[i] * 2;
        } else {
             arr.splice(i);
        }
    }
}
multiplyNumeric(menu);
console.log(menu); */

/* console.log(menu.length); */

/* function DNAStrand(dna){
    //your code here
    let arr = dna.split('');
    let newArr =[];
    
    for (let i=0; i < arr.length; i++) {
      if (arr[i] == 'A') {
        newArr.push('T');
      }
      if (arr[i] == 'T') {
        newArr.push('A');
      }
      if (arr[i] == 'G'){
          newArr.push('C');
          }
       if (arr[i] == 'C'){
          newArr.push('G');
          }
    }
    return newArr.join('');  
  }
console.log(DNAStrand("ATTGC")); */



function number(x) {
    let arr = [];
    for (let i = x; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

console.log(number(5));





//Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

//Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

//В чём ошибка? Исправьте её. Результат должен быть 3.

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
let c;
c = alert(Number(a) + Number(b)); // 12 */






/* function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let newSq = Math.pow(Math.sqrt(sq) + 1, 2);
    console.log(newSq);
    // создаем новую переменную возводит в степень (корень квардратный из sq + 1)
    if (Number.isInteger(Math.sqrt(sq))) { //если корень квадратный из sq являются целым числом, то
        return newSq;
    } else {
        return -1;
    }

}
  
console.log(findNextSquare(121)); */

//findNextSquare(121) --> returns 144
//findNextSquare(625) --> returns 676
//findNextSquare(114)-- > returns - 1 since 114 is not a perfect



/* console.log(Number.isInteger(11)); */


/* squareDigits(9119);
function squareDigits(num){
    //may the code be with you
    let str = num;
    /* console.log(typeof(str)); */
/*     for (let i = 0; i < str.length; i++) {
        console.log(str.split(''));
    }  */
    
    
    
    
    
    /* for (let i = 0; i < num; i++) {
        console.log(str.split(''));
    }
    return num; */


/* squareDigits(9119); */




/* Test.assertEquals(squareDigits(9119), 811181); */


squareDigits(9119);

```
function squareDigits(num) {
    let number = num;
    let digits = num.toString().split('');
    let realDigits = digits.map(Number)
    console.log(realDigits);
    
    let array = realDigits; //массив, можно использовать массив объектов
    let size = 1; //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i <Math.ceil(array.length/size); i++){ // округляем к целом числу длину массива и делим на 1
        subarray[i] = array.slice((i*size), (i*size) + size);
    }
    console.log(subarray);
    return Number(subarray.map(function (x) { // создаем новый массив с результатом указанной функции 
        return Math.pow(x, 2);
    }).join(''));
    
    
}
console.log(squareDigits(9119));
```
//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.

/* let kek = prompt('Введите число!', ''); 

if (kek > 0) {
    alert(1);
} else if (kek < 0) {
    alert(-1);
} else {
    alert(0);
} */

//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

//«Включительно» означает, что значение переменной age может быть равно 14 или 90.

/* let age = 89;

if (age > 14 && age <= 90) {
    console.log('Включено!');
} else {
    console.log('Не включено!');
} */


/* let user = { name: 'SSSSS', name1: 'Иван', name2: 'Иван' }; */
/* let kek = user;
kek.name = 'keka'; */

/* 
console.log(user); */



/*  let john = Object.create(user);
console.log(john.name);   */

/* function copy(mainObject) {
    let ObjectCopy = {};
    for (let key in mainObject) {
        ObjectCopy[key] = mainObject[key];
    }
    return ObjectCopy;
}
let copyObject = copy(user);
console.log(copyObject);  */

/* let user = {
    name: "Иван",
    age: 30
  };
  
let clone = Object.assign({}, user);
console.log(clone); */

/* let soldier = {
    height: 200,
    armor: 100
}
let john = {};

Object.setPrototypeOf(john, soldier);
console.log(john.height); */


/* let user = {
    name: "Джон",
    age: 30,
    sayHi: function() {
        console.log("Привет " + this.name + '!');
      }
};
  
user.sayHi(); */


/* let user = {
    name: "Джон",
    age: 30,
  
    sayHi() {
      console.log( this.name ); // приведёт к ошибке
    }
  
  };
  
  
  let admin = user;
  user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
  
admin.sayHi(); */

/* let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
  alert( this.name );??
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)??
admin.f(); // Админ  (this == admin)??

admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)??? 
?? ---- Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.
*/


/* let user = {
    name: "Джон",
    go: function () {
        console.log(this.name);
    }
};
  
console.log(user.go()); */


/* Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */


/* const calculator = {
     read: function (a, b) {
        this.a = a;
        this.b = b;
    }, 
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
};
calculator.read(2,3); 
console.log(calculator.sum());
console.log(calculator.mul());

console.log(calculator); */

/* let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log(this.step);
    }
}; */
  
/* ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 */


/* let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;

    },
    down() {
        this.step--;
        return this;

    },
    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); // 1 */
/* let str = "12342345345464645645";
console.log(typeof str); 
let num = Number(str[0]); 
console.log(typeof num);
console.log(num); */

/* Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true */

/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */


function sum(a, b) {
    let c = a + b;
    console.log(c);
}

sum(12, 1922);