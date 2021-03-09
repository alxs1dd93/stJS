//!!! Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
//!!! Сделать с помощью сортировки. Reverse. Выводом с конца с помощью цикла.

// const arr = [1, 2, 3];
// const secondArr = [];
// const reverse = arr.reverse();
// console.log(reverse);

// let last = arr.length - 1; 
// console.log(last);
// for (let i = 0; i < arr.length; i++) {
//     secondArr.push(arr[last]);
//     last--;
// }

// console.log(secondArr);
    

///!!! Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
//!! С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// arr.forEach(item => {
//     if (item === 4) {
//         console.log('true');
//     }
// });

//!! Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6, 7, 8, 9];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

//!! Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы [1, 2, 3].

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));

//!! Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

// !!  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//! Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//!! {js:'test', jq: 'hello', css: 'world'}

// const obj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


//!! Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4]; 

// arr.forEach(item => {
//     if (item > 3 && item < 10) {
//         console.log(item);
// }
// });


//!!Дан массив с числами.Числа могут быть положительными и отрицательными.
//!!Найдите сумму положительных элементов массива.Массив должен быть заполнен случайными числами

// const arr = [];

// arr.push(4, 5, 7, -8, 2, -12);
// // console.log(arr);
// let sum = 0;
// arr.forEach(item => {
//     if (item > 0) {
//         sum = sum + item;
// }
// });
// console.log(sum);


//!! Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

// let string = 'aaa@bbb@ccc';
// let reString = /@/gi;
// string = string.replace(reString, '!');

// console.log(string);



//!! Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

// let string = 'aaa bbb ccc';
// console.log(string.substr(0, 3) + string.substr(7));
// console.log(string.substr(0, 3) + string.substr(6));
// console.log(string.slice(0, 3) + string.slice(7));

// Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел, расположенных между 1 и n включительно.

// function sum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sum(5));


//!!Напишите цикл,  выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// Обернуть в функцию. Через аргумент задавать количество строк треугольника 

// function triangle(n) {
//     let tag = '';
//     for (let i = 0; i < n; i++) {
//         tag = tag + '#';
//         console.log(tag);
//     }
// }
// triangle(7);

//!!Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
//!!Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.
//!!Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5
//!!Математические функции есть на learn javascript. 

// for (let i = 1; i < 101; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log('‘FizzBuzz’');
//     } else {
//         console.log(i);
//     }
// }

// Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.На каждой позиции либо пробел, либо #.
// В результате должна получиться шахматная доска.
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # # 

// let tag = '# # # #';
// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(' ' + tag);
//     } else {
//         console.log(tag);
//    }
// }


//!! Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них. 
//!!max по аналогии. 

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2, -7));


//!!-Напишите цикл, который выводит такой треугольник:
//!!Kappa
//!!Kappa Kappa
//!!Kappa Kappa Kappa 
//!!Kappa Kappa 
//!!Kappa
//!!Цикл обернуть в функцию. Добавить параметр, который отвечает за максимальное количество капп. В примере 3.




// function kappa(n) {
//       let makeKappa = '';
//       for (let i = 0; i < n; i++) {
//             console.log(makeKappa += 'Kappa');
//       }
// }
// console.log(kappa(3));


// const arr = [];

// function createTriangle(n) { 
//     for (let i = 0; i < n; i++) {
//         arr.push('Kappa');
//         console.log(arr.join(''));
//     }


//     for (let i = 0; i < n - 1; i++) {
//         arr.pop();
//         console.log(arr.join(''));
//     } 

//  }
// createTriangle(3);


//!! Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.


const arr = [1, 7, 5, 71, 2, 9];

// arr.forEach(item => {
//       if (item == 5) {
//             console.log('Yes!');
//             break;
//       } else {
//             console.log('NO!');   
//  }
// });


// for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 5) {
//             console.log('Yes');
//             break;
//       } else {
//             console.log('NO!'); 
//       }
// }

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
}  */