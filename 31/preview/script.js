let btn = document.querySelector('.button');
let btns = document.querySelectorAll('button');
let overlay = document.querySelector('.overlay');
/* btn.onclick = function () {
    alert('Click!');
} */

btn.addEventListener('click', () => {
    alert('Click');
});

const deleteElement = (e) => {
  //  e.target.remove();
    console.log(e.target);
    console.log(e.type);
};
    
/* btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);  */

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

/* btn.addEventListener('mouseenter', (e) => {
    console.log(e);
   // console.log('Qqqq');
}); */

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});

