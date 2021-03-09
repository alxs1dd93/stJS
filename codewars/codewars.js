// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

// function SeriesSum(n) {
//     let sum = 1,
//         result = 1;
//     if (n === 0) {
//         return '0.00';
//     }
//     for (let i = 0; i < (n - 1); i++) {
//         sum += 3;
//        result = result + (1 / sum);
//     }

//     return String(result.toFixed(2));
// }
// console.log(SeriesSum(0));


// let numb = 5.5555555555555;
// numb = numb.toFixed(2);
// console.log(typeof(numb));




// Test.describe("GetMiddle", function() {
//     Test.it("Tests", function() {
//       Test.assertEquals(getMiddle("test"),"es");
//       Test.assertEquals(getMiddle("testing"),"t");
//       Test.assertEquals(getMiddle("middle"),"dd");
//       Test.assertEquals(getMiddle("A"),"A");
//     });
//   });


// function getMiddle(s) {
//     if (s.length % 2 === 0) {
//         return s[s.length / 2 - 1] + s[s.length / 2];
//     } else {
//         return s[Math.floor(s.length / 2)];
//     }
// }
// console.log(getMiddle('test'));

// let arr  = [1, 2, 3, 4, 6, 7, 8, 9];
// console.log(arr[2]);



// function paperwork(n, m) {
//     let result = n * m;
//     if (n < 0 || m < 0) {
//         return 0;
//     }
//     return result;
// }
// console.log(paperwork(10, -5));



// function problem(x){
//     //your code here
//     if (isNaN(x) || x === '') {
//       return 'Error';
//     }
//     return (x * 50 + 6);
// }
// console.log(problem(0));


// function odds(values) {
//     let newArr = [];
//     for (let i = 0; i < values.length; i++) {
//         if (values[i] % 2 != 0) {
//             newArr.push(values[i]);
//        }
//     } 
//     return newArr;
// }
  
// console.log(odds([1, 2, 3, 4, 5]));




// let arr = [1, 2, 3];
// arr.push(2, 7, 4);
// console.log(arr);



// odds([1,2,3,4,5]) #=> [1,3,5]

// function bmi(weight, height) {
//     let bmi = weight / Math.pow(height, 2);
//     if (bmi <= 18.5) {
//         return 'Underweight';
//     } else if (bmi <= 25.0) {
//         return 'Normal';
//     } else if (bmi <= 30.0) {
//         return 'Overweight';
//     } else {
//         return 'Obese';
//     }
// }
  
// console.log(bmi(80, 1.8));




// function findDifference(a, b) {
//     let sumA = a[0];
//     let sumB = b[0];
//     let sumAB = 0;

//     for (let i = 0; i < a.length - 1; i++) {
//         sumA = sumA * a[i + 1]; 
//     }

//     for (let i = 0; i < b.length - 1; i++) {
//         sumB = sumB * b[i + 1]; 
//     }

//     if (sumA > sumB) {
//         sumAB = sumA - sumB;
//     } else {
//         sumAB = sumB - sumA;
//     }
//     return sumAB;
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));


// let a = [3, 2, 5];
// let sumA = a[0];

// for (let i = 0; i < a.length - 1; i++) {
//     sumA = sumA * a[i + 1];
// }
// console.log(sumA);

// Test.assertEquals(getAge("4 years old"), 4);

// function getAge(inputString){
//     let num = inputString.split(' ');
//     return +num[0];

// }

// console.log(getAge('44 years old'));



// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Test.describe("Basic tests",() => {
//     Test.assertEquals(toCsvText([
//                                   [ 0, 1, 2, 3, 45 ],
//                                   [ 10,11,12,13,14 ],
//                                   [ 20,21,22,23,24 ],
//                                   [ 30,31,32,33,34 ]
//                                  ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');


// function toCsvText(array) {
//     let str = '';   
    
//     for (let i = 0; i < array.length; i++) {
//     str = str + array[i].join(',') + '\n';
//     }
//     str.substring(0, str.length - 2);

//     return str;
// }
 
// console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
//                     [ 10,11,12,13,14 ],
//                     [ 20,21,22,23,24 ],
//                     [30, 31, 32, 33, 34]]));





// const arr = [[ 0, 1, 2, 3, 4 ],
//              [ 10,11,12,13,14 ],
//              [ 20,21,22,23,24 ],
//              [30, 31, 32, 33, 34]];
// let str = '';    
// for (let i = 0; i < arr.length; i++) {
    
//     str = str + arr[i].join(',') + '\n';
// }
// console.log(str);

// console.log(arr);
// let str = arr.join('');
// console.log(str);



// arr[1];
// let str = arr.join();
// console.log(str);


// var str = "abcdef";

// console.log(str.substring(0, str.length - 1));


// CSV representation of array

// function index(array, n){
//     if (n > array.length) {
//         return -1;
//     }
//     return Math.pow(array[n], n);
// }
// console.log(index([1, 2, 3, 4], 2));


// Test.describe("Basic tests",()=>{
//     Test.assertEquals(index([1, 2, 3, 4],2),9);
//     Test.assertEquals(index([1, 3, 10, 100],3),1000000);
//     Test.assertEquals(index([1, 2],3),-1);
//     Test.assertEquals(index([1,1,1,1,1,1,1,1,1,1], 9),1);
//     Test.assertEquals(index([1,1,1,1,1,1,1,1,1,2], 9),512);
//     Test.assertEquals(index([29,82,45,10], 3),1000);
//     Test.assertEquals(index([6,31], 3),-1);
//     Test.assertEquals(index([75,68,35,61,9,36,89,0,30], 10),-1);
//   });






// function aspectRatio(x,y){
//     const index = 16 / 9;
//     return [Math.ceil(y * index), y];
// }
// console.log(aspectRatio(640, 480));


// Test.assertSimilar(aspectRatio(640, 480), [854,480]);
// Test.assertSimilar(aspectRatio(960, 720), [1280,720]);
// Test.assertSimilar(aspectRatio(1440, 1080), [1920,1080]);
// Test.assertSimilar(aspectRatio(1920, 1440), [2560,1440]);

// ppg - ochko, mpg - min
// function pointsPer48(ppg, mpg) {
//     let ppm = ppg / mpg;
//     let conclusion = ppm * 48;
//     return conclusion.toFixed(1);
// }
// numObj.toFixed(6)
// Test.assertEquals(pointsPer48(12, 20), 28.8)
// Test.assertEquals(pointsPer48(10, 10), 48.0)
  
// Your task is to sum the differences between consecutive pairs in the array in descending order.----------------------------------------------------------------------------

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// Test.describe("sumOfDifferences([1, 2, 10]", function() {
//     Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
//   });

// function sumOfDifferences(arr) {
    
//     let sum = 0;
//     arr.sort((a, b) => b - a);
//     sum = arr[0] - arr[1] + arr[1] - arr[2];
//     return sum;

// }




// function sumOfDifferences(arr) {
    
//         let sum = 0;
//         arr.sort((a, b) => b - a);
//     for (let i = 0; i < arr.length - 1; i++) {
//         sum = sum + arr[i] - arr[i + 1];
//     }
//     return +sum;
//     }
// console.log(sumOfDifferences([1, 2, 10]));

// let a = [1, 2, 10];
// console.log(a.sort((a, b) => b - a));



// let a = [1, 2, 10];
// console.log(a.sort());

// function kek(a, b) {
//     return b - a; 
// }

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log( arr );



// Test.describe('Fixed Tests', _ => {
//     Test.it("Tests", __ => {
//       Test.assertDeepEquals(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
//       Test.assertDeepEquals(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
//       Test.assertDeepEquals(pipeFix([6,9]),[6,7,8,9]);
//       Test.assertDeepEquals(pipeFix([-1,4]),[-1,0,1,2,3,4]);
//       Test.assertDeepEquals(pipeFix([1,2,3]),[1,2,3]);
//     });
//   });





// console.log((pipeFix([1, 2, 3, 5, 6, 8, 9])));
// let a = [1, 2, 3, 5, 6, 8, 9];
// let b = Math.max(...a);

// console.log(typeof(b));


// function pipeFix(numbers){
//     let newNumbers = [];
//     let min = Math.min(...numbers);
//     let max = Math.max(...numbers);
//     for (let i = 0; i < max - min + 1; i++) {
//         newNumbers[i] = i + min;
//     }
//     return newNumbers;
// }
// console.log((pipeFix([-1,4])));


// function pipeFix(numbers){
//     let newNumbers = [], j = 0;

//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i + 1] === numbers[i] + 1) {
//             newNumbers.push(numbers[i]);
//             continue;
//         } else {
//             let temp = numbers[i];
//             newNumbers.push(temp);
//             for (let k = 0; k < numbers[i + 1] - numbers[i] - 1; k++) {
//                 temp++;
//                 newNumbers.push(temp);
//             }
//         }
//       j++;
//     }
//     newNumbers.push(numbers[numbers.length - 1]);
//     return newNumbers;
// }

// console.log((pipeFix([-1,4])));

// Lario and Muigi Pipe Problem


// function even_or_odd(number) {
 
//     if(number % 2 === 0) {
//         return 'Even';
//     } else {
//         return 'Odd';
//     }
//   }

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum = sum + arr[i];
//         }
//     }
  
//     return sum;
// }


// console.log(positiveSum([1,2,3,4,5, -5]));



// function past(h, m, s){
    
//     return h * 1000 * 60 * 60 + m * 60 * 1000 + s * 1000;

// }

// console.log(past(0, 1, 1));


// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


// function peopleWithAgeDrink(old) {
//     if (old < 14) {
//         return 'drink toddy';
//     } else if (old < 18) {
//         return 'drink coke';
//     } else if (old < 21) { 
//         return 'drink beer';
//     } else {
//         return 'drink whisky';
//     }
// }
  
// console.log(peopleWithAgeDrink(14));

// function howMuchWater(water, load, clothes){ //5, 14, 10
//     if (clothes > load * 2) {
//         return 'Too much clothing';
//     } else if (clothes < load) {
//         return 'Not enough clothes';
//     } else {
//         let totalP = water * Math.pow(1.1, load - clothes);
//         // let NextTotalP = totalP.toFixed(2);
//         return totalP;
//     }
// }
// numb = numb.toFixed(2);
// console.log(howMuchWater(10, 11, 20));


// let testWater = 10;
// let testLoad = 11;
// let testClothes = 20;

// let p = testWater * 1.1;
// let s = testLoad - testClothes;
// let total = Math.pow(p, s);
// console.log(total);

// let P = Math.pow(testWater * 1.1, testLoad - testClothes);
// console.log(P);


// function arr(N) {
//     const newArr = [];
//     if (typeof N == 'number') {
//         for (let i = 1; i < N; i++) {
//             newArr.push([i - 1] + 1);
//         }
//     }
//     return newArr;
// }

// console.log(arr(5));






// function arr(N) { 
//     const newArr = [];
//     if (N == 0) {
//         return newArr;
//     } else {
//         for (let i = 0; i < N; i++) {
//             newArr.push(i + 1);
//         }
//         return newArr;
//     }
// }

// console.log(arr());

// const arr = N => {
//     const arr = [];
    
//     for(let i = 0; i < N; i+=1) {
//       arr.push(i);
//     }
    
//     return arr;
//   };


// const newArr = [];
// newArr.push(0);
// console.log(newArr);




// function usdcny(usd) {
//     let uan = usd * 6.75;
//     uan = uan.toFixed(2);
//     return uan + ' Chinese Yuan';
// }

// console.log(usdcny(15));

// numb = numb.toFixed(2);
// Test.assertEquals(usdcny(15), '101.25 Chinese Yuan');


// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1;
//     } else if (month <= 6) {
//         return 2;
//     } else if (month <= 9) {
//         return 3;
//     } else {
//         return 4;
//     }
// };


// function sumStr(a,b) {
//     // let numA = Number(a);
//     // let numB = Number(b);
//     // let c = numA + numB;
//     return String((+a) + (+b));
// }

// console.log(typeof(sumStr(1, 1)));