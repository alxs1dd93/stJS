'use strict'
// const num = new Function(3);
// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(this.name + ' hello!');
//     };
// }

// const alx = new User('Alx', 28);
// const ivan = new User('Ivan', 22);
// ivan.hello();
// alx.hello();

// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} покинул нас...`);
// };
// ivan.exit();

// console.log(alx);
// console.log(ivan);

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 22);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);


// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = '#fff';
    
// });

// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this.num);
//         };

//         say(); 

//     }
// };

// obj.sayNumber();


// klassi


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    } 

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const colorRect = new ColoredRectangleWithText(20, 20, 'Кукумбер', 'red');
colorRect.showMyProps();
console.log(colorRect.calcArea());



// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(long.calcArea());