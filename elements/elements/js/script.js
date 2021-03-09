'use strict';

const box = document.getElementById('box');
//console.log(box);

const buttons = document.getElementsByTagName('button');
//console.log(buttons[1]);

const circles = document.getElementsByClassName('circle');
//console.log(circles);

const hearts = document.querySelectorAll('.heart');
//console.log(hearts);
const wrapper = document.querySelector('.wrapper')
/* ;
hearts.forEach(item => {
    console.log(item);
}); */

const OneHeart = document.querySelector('.heart');
//console.log(OneHeart);

//box.style.backgroundColor = 'blue';
box.style.width = '500px';

buttons[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px;';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
/* hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
}); */


const div = document.createElement('div');
document.body.append(div);
div.classList.add('black');
//wrapper.append(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//circles[0].remove();
//hearts[0].replaceWith(circles[0]);

//div.innerHTML = '<h1>Hello world</h1 >';  
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');