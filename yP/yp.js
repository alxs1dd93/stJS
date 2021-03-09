// const data = [
// { name: "Саша", age: 19 },
// { name: "Катя", age: 21 },
// { name: "Миша", age: 17 },
// { name: "Федя", age: 23 },
// { name: "Клава", age: 22 }
// ];

// let sum = 0;
// for (var i = 0; i < data.length; i++) {
//   sum = sum + data[i].age ;
// }
// let sumInfo = sum / 5;
// console.log(sumInfo);

// function calcAvgAge(array) {
//     // Напишите код здесь
//     let sum = 0;
//     for (var i = 0; i < array.length; i++) {
//       sum = sum + array[i].age ;
//   }
//     let sumInfo = sum / 5;
//     return sumInfo;
//   }
//   console.log(calcAvgAge(data));

// const arr = [17, 23, 31, 44, 59];


// var doubles = arr.map(function(num) {
//   return num * 2;
// });
// console.log(doubles);


// const arr = [17, 23, 31, 44, 59];



// function doubleNumber(array) {
//   // Ваш код
//   let newArr = arr.map(item => {
//     return item * 2;
//   });
//     return newArr;
// }
// console.log(doubleNumber(arr));


// const arr = [17, 23, 31, 44, 59];

// // doubleNumber(arr); // возвращает [34,46,62,88,118];
// console.log(doubleNumber(arr));
// function doubleNumber(array) {
//   // Ваш код
//    let newArr = arr.map(item => {
//     return item * 2;
//   });
//       return newArr;
// }

// const arr = [17, 23, 31, 44, 59];

// console.log(doubleNumber(arr)); // возвращает [34,46,62,88,118];

// function doubleNumber(array) {
//   // Ваш код
//    let newArr = arr.map(item => {
//     return item * 2;
//   });
//       return newArr;
// }



const arr = [17, 23, 31, 44, 59];

function doubleNumber(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}


console.log(doubleNumber(arr));