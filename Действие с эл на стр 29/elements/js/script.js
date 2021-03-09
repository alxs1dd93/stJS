'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = '#000';
box.style.width = '500px';

btns[1].style.borderRadius = '30px';
//circles[0].style.backgroundColor = 'red';

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'red';
}

box.style.cssText = 'background-color: red; width: 700px;';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');
document.body.append(div);
//wrapper.append(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
//hearts[0].replaceWith(circles[0]);


div.innerHTML = '<h1>Hello world!</h1>';
div.insertAdjacentHTML('beforebegin', '<h1>Hello!</h1>');

