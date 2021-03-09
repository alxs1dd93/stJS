/* Задания на урок:
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки+

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"+

5) Фильмы должны быть отсортированы по алфавиту */+


// Возьмите свой код из предыдущей практики

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const delRek = document.querySelectorAll('.promo__adv img');
const text = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const btn = document.querySelector('.btn');
const addInput = document.querySelector('.adding__input');
const addForm = document.querySelector('.add');
const checkbox = document.querySelector('[type="checkbox"]');
let promo = document.querySelector('.promo__interactive-list');
const del = document.querySelectorAll('.delete');
const item = document.querySelector('.promo__interactive-item');




//Удаление попробуй сделать сам. Ничего там сложного. Подсказка. От элемента(корзина) можно обратиться к его родительскому блоку и его удалить.

//Удаление
//Тебе нужно написать querySelectorAll к классу корзинок
//Пройтись в цикле по ним и повешать обработчик клик на каждую с функцией



function delInfo(arr) {
    arr.forEach(item => {
        item.remove();
    }); 
}
delInfo(delRek);



function changes() {
    text.innerHTML = 'драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
} 
changes();


btn.addEventListener('click', function (event) {
    event.preventDefault();
 
    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    MovieList(movieDB.movies, promo);
    addForm.reset();

    if (favorite == true) {
        console.log('Добавляем любимый фильм!');
    }

    if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
    }

});




function sortArr(arr) {
    arr.sort();
}
sortArr(movieDB.movies);



function MovieList(films, block) {
    block.innerHTML = '';
    films.forEach((film, i) => {
        block.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
}
MovieList(movieDB.movies, promo);







/* const changes = () => {
    text.innerHTML = 'драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
};
changes(); */

/* for (let i = 0; i < delRek.length; i++) {
    delRek[i].remove();
    console.log('Удалено');
} */



//Добавить объекту новый метод , внутри этого метода должен быть
//

//Добавить объекту метод add(строка), который добавляет строку к массиву movies. В конце которой массив должен сортироваться. Или сортаровку сделать отдельным методом
//Создаем функцию refresh/fill или как угодно, который будет из массива movies обновлять хтмл код с фильмами. Этот код есть на 55-64 строке
//Выполнить задачу с галкой любимого фильма. Чел описал, нужно просто добавить условие для бутона 
//Как работает бутон, блоксхема:
//Берем валью инпута, проверяем длину строки, и если длинее 21, то обрезаем и ставим знак троеточия. Возможно это стоит добавить в метод add, смотри сам
//Отправляем строку в метод add.
//Запускаем refresh.
//Результатом должен быть обновленный блок на странице и возможно запись в консольлог о любимом фильме. 
//Удаление попробуй сделать сам. Ничего там сложного. Подсказка. От элемента(корзина) можно обратиться к его родительскому блоку и его удалить.

//Удаление
//Тебе нужно написать querySelectorAll к классу корзинок
//Пройтись в цикле по ним и повешать обработчик клик на каждую с функцией




let sum = 0;
for (let i = 0; i < 100; i++) {
    console.log(sum += 1);
}

function kekw(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(kekw(0, -10));



function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
            return false;
        }
}


//console.log(isEven(50));
// → true
console.log(isEven(-1));
// → false








//console.log(sum(range(1, 10)));