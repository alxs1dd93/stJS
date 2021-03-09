const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');


// console.log(btns[0]);
// console.log(btns[0].classList.length);
// btns[1].classList.add('red');
// btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');

// if (btns[1].classList.contains('red')) {
//     console.log('red');
//  }

btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }   
    btns[1].classList.toggle('red');
});


wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello!');
    }
});