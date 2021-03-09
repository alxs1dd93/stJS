const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();//переменная-запрос
//методы
    request.open('GET', 'js/current.json');//сбор настроек для запроса
    request.setRequestHeader('Content-type', 'application/json charset=utf-8');//устанавливает значения HTTP заголовков
    request.send(); //отправляем запрос

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);// превращаем джсон в объект чтобы добраться до своства с числом
            // console.log(data);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }
        else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
//свойства
    
    //status(404 i td),
    //statusText(примиска к комеру),
    //response(otvet), readyState(возвр состоянии объекта)

//события 
    //readystatechange - готово ли событие в этот момент, load - действие когдла что-то загруз
    
});




