'use strict';

const checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');


if (localStorage.getItem('isChacked' === true)) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.background = '#fff';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChacked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.background = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.background = 'red';
}
});
