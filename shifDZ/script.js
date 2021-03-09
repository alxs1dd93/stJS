
const btn = document.querySelector('.btn');
const textInput = document.querySelector('.text__input');
const out = document.querySelector('.text__out');
const abc = {
	'А': 'Г',
	'Б': 'Д',
	'В': 'Е',
	'Г': 'Ё',
	'Д': 'Ж',
	'Е': 'З',
	'Ё': 'И',
	'Ж': 'Й',
	'З': 'К',
	'И': 'Л',
	'Й': 'М',
	'К': 'Н',
	'Л': 'О',
	'М': 'П',
	'Н': 'Р',
	'О': 'С',
	'П': 'Т',
	'Р': 'У',
	'С': 'Ф',
	'Т': 'Х',
	'У': 'Ц',
	'Ф': 'Ч',
	'Х': 'Ш',
	'Ц': 'Щ',
	'Ч': 'Ъ',
	'Ш': 'Ы',
	'Щ': 'Ь',
	'Ъ': 'Э',
	'Ы': 'Ю',
	'Ь': 'Я',
	'Э': 'А',
	'Ю': 'Б',
	'Я': 'В',
	' ': ' ',
	
	'а': 'г',
	'б': 'д',
	'в': 'е',
	'г': 'ё',
	'д': 'ж',
	'е': 'з',
	'ё': 'и',
	'ж': 'й',
	'з': 'к',
	'и': 'л',
	'й': 'м',
	'к': 'н',
	'л': 'о',
	'м': 'п',
	'н': 'р',
	'о': 'с',
	'п': 'т',
	'р': 'у',
	'с': 'ф',
	'т': 'х',
	'у': 'ц',
	'ф': 'ч',
	'х': 'ш',
	'ц': 'щ',
	'ч': 'ъ',
	'ш': 'ы',
	'щ': 'ь',
	'ъ': 'э',
	'ы': 'ю',
	'ь': 'я',
	'э': 'а',
	'ю': 'б',
	'я': 'в',
	' ': ' ',
};
const cba = {
	'Г': 'А',
	'Д': 'Б',
	'Е': 'В',
	'Ё': 'Г',
	'Ж': 'Д',
	'З': 'Е',
	'И': 'Ё',
	'Й': 'Ж',
	'К': 'З',
	'Л': 'И',
	'М': 'Й',
	'Н': 'К',
	'О': 'Л',
	'П': 'М',
	'Р': 'Н',
	'С': 'О',
	'Т': 'П',
	'У': 'Р',
	'Ф': 'С',
	'Х': 'Т',
	'Ц': 'У',
	'Ч': 'Ф',
	'Ш': 'Х',
	'Щ': 'Ц',
	'Ъ': 'Ч',
	'Ы': 'Ш',
	'Ь': 'Щ',
	'Э': 'Ъ',
	'Ю': 'Ы',
	'Я': 'Ь',
	'А': 'Э',
	'Б': 'Ю',
	'В': 'Я',
	' ': ' ',

	
	'г': 'а',
	'д': 'б',
	'е': 'в',
	'ё': 'г',
	'ж': 'д',
	'з': 'е',
	'и': 'ё',
	'й': 'ж',
	'к': 'з',
	'л': 'и',
	'м': 'й',
	'н': 'к',
	'о': 'л',
	'п': 'м',
	'р': 'н',
	'с': 'о',
	'т': 'п',
	'у': 'р',
	'ф': 'с',
	'х': 'т',
	'ц': 'у',
	'ч': 'ф',
	'ш': 'х',
	'щ': 'ц',
	'ъ': 'ч',
	'ы': 'ш',
	'ь': 'щ',
	'э': 'ъ',
	'ю': 'ы',
	'я': 'ь',
	'а': 'э',
	'б': 'ю',
	'в': 'я',
	' ': ' ',
};


btn.addEventListener('click', function (event) {

	//console.log(textInput.value);
	let str = textInput.value; // помещаем данные из инпута в str
	let secondStr = '';
	for (let i = 0; i < str.length; i++) {
		secondStr += abc[str[i]];
		//out.innerHTML = secondStr;
	}
	out.textContent = secondStr;
	if(str === '') {
		alert('Дружок, инпут пустой! Введи символы! (желательно русские, иначе получишь underfined!)');
	}
	

});

out.style.cssText = 'margin: 100px auto; border-radius: 10px';

const secondBtn = document.querySelector('.btn--second');
const secondTextInput = document.querySelector('.text__input--second');
const secondOut = document.querySelector('.text__out--second');

secondBtn.addEventListener('click', function (event) {

	//console.log(textInput.value);
	let str = secondTextInput.value; // помещаем данные из инпута в str
	let secondStr = '';
	for (let i = 0; i < str.length; i++) {
		secondStr += cba[str[i]];
		//out.innerHTML = secondStr;
		secondOut.textContent = secondStr;
	}
	if(str === '') {
		alert('Дружок, инпут пустой! Введи символы! (желательно русские, иначе получишь underfined!)');
	}
	

});

secondOut.style.cssText = 'margin: 100px auto; border-radius: 10px';