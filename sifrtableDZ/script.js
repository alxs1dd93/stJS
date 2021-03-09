
const btn = document.querySelector('.btn');
const textInput = document.querySelector('.text__input');
const out = document.querySelector('.text__out');
const abc = {
	'А': 0.062,
	'Б': 0.014,
	'В': 0.038,
	'Г': 0.013,
	'Д': 0.025,
	'Е': 0.072,
	'Ж': 0.007,
	'З': 0.016,
	'И': 0.062,
	'Й': 0.010,
	'К': 0.028,
	'Л': 0.035,
	'М': 0.026,
	'Н': 0.053,
	'О': 0.090,
	'П': 0.023,
	'Р': 0.040,
	'С': 0.045,
	'Т': 0.053,
	'У': 0.021,
	'Ф': 0.002,
	'Х': 0.009,
	'Ц': 0.004,
	'Ч': 0.012,
	'Ш': 0.006,
	'Щ': 0.003,
	'Ъ': 0.014,
	'Ы': 0.016,
	'Ь': 0.014,
	'Э': 0.014,
	'Ю': 0.006,
	'Я': 0.018,
	' ': 0.037,
	
};
btn.addEventListener('click', function (event) {

	//console.log(textInput.value);
	let str = textInput.value; // помещаем данные из инпута в str
	let secondStr = '';
	for (let i = 0; i < str.length; i++) {
		secondStr += abc[str[i]] + ' ';
	}
	out.textContent = secondStr;

});

out.style.cssText = 'margin: 100px auto; border-radius: 10px';



/* 
let str = 'ПРИВВЕТТ';
let secondObj = {};

for (let i = 0; i < str.length; i++) {
	if (str[i] in secondObj) {
		secondObj[str[i]] += abc[str[i]].value;
	} else {
		secondObj[str[i]] = abc[str[i]].value;
	}
}
for (let key in secondObj) {
	console.log(secondObj[key].value);
} */

