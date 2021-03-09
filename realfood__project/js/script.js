
// Tab
document.addEventListener('DOMContentLoaded', () => {
    
    const tabs = document.querySelectorAll('.tabheader__item'),// "кнопки" для перекл
          tabsContent = document.querySelectorAll('.tabcontent'),//img + descr
          tabsParent = document.querySelector('.tabheader__items'); //площадка для дел событий

          function hideTabContent() {
        
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    
        function showTabContent(i = 0) { // i = 0 => ES 6  стандартная настройка таба при загрузке
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
        
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i); // номер класса по порядку
                    }
                });
            }
        });

    // Timer 

    const deadline = '2021-03-10';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

// Modal
    
    const modalTrigger = document.querySelectorAll('[data-modal]'); // кнопка для нажатия(вызова_модалки)
    const modal = document.querySelector('.modal'); // modalka
    const modalCloseBtn = document.querySelector('[data-close]'); // закрыв кнопка
   
    function openModal() { // f для открытия модального окна
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; // убираем прокрутку со стр

        // clearInterval(modalTimerId); // если пользователь сам октрыл модалку, то мы не повторим таймер автоматически

    }

    modalTrigger.forEach(item => { // перебираем всем rкнопки  
       
        item.addEventListener('click', openModal);
    });

    function closeModal() { // f для закрытия модального окна
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = ''; // возвращаем прокрутку
   }

    modalCloseBtn.addEventListener('click', closeModal); // нет () тк я не вызываю f,  а передаю


    modal.addEventListener('click', (event) => { //???
        if (event.target === modal) { // если то куда тыкнул пользователь === модальное окно
            closeModal();// вызываем, тк она выполняется после выполнения условия
        }
    });
 

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) { // если нажали Esc и если модальное окно имеет клас show
            closeModal();
        }
    });

    //  const modalTimerId = setTimeout(openModal, 3000); // вызов openModal через 3 сек

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= // проверка долистал ли пользователь до конца стр
            document.documentElement.scrollHeight) { //  прокрутка справа + видимый клиентом контент и они становятся равны с полной прокруткой
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // удаляем обр событий чтобы про прокрутке модалка выкатилась только 1 раз
            }
    }

    window.addEventListener('scroll', showModalByScroll);


// klassi dlya kartochek 
    
   class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => {
                    element.classList.add(className);  
                });
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const oneCard = new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    

}); 




