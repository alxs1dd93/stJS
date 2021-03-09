const btns = document.querySelectorAll('button');
const testBnt = document.querySelector('.btn__test');
const overlay = document.querySelector('.overlay')
let i = 0;




//console.log(btn);

// btn.addEventListener('click', (deleteElement) => {
//     alert('Click');
//     //event.target.style.backgroundColor = 'green';
// });
// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     //event.target.style.backgroundColor = '#000';
//     event.target.remove();
//     console.log('Click');
// });



const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // console.log(i);
    // if (i == 1) {
    //     testBnt.removeEventListener('click', deleteElement);
    // }
}; 
    
//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});