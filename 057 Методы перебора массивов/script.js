//filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(item => {
//     return item.length > 2;
// });
// console.log(result);

//map

// const words = ['sprФy', 'Limit', 'elite', 'exusdfgHNGFNKrant', 'destHBFTJUtion', 'present'];
// const result = words.map((item) => {
//     return item.toLocaleLowerCase();
// });
// console.log(result);
// console.log(words);


// every/some
// const words = ['sprФy', 'Limit', 'elite', 4, 2, 'present'];
// console.log(words.some((item) => {
//     return typeof (item) === 'number';
// }));

//reduce
// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => {
//     return sum + current;
// });
// console.log(res);

// const arr = [4, 5, 1, 3, 2, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// arr.forEach((item) => {
//     return sum += item;
// });

// console.log(sum);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const res = words.reduce((sum, current) => {
//     return `${sum}, ${current}`;
// });

// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};






// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
  
  
// console.log(getKeyByValue(obj, "persone"));
  


// function objectKeyByValue (obj, val) {
//     return Object.entries(obj).find(i => i[1] === val);
//   }


//   console.log(objectKeyByValue(obj, "persone"));