let lang = prompt('en or ru?');
let langArray = ['ru', 'en'];
langArray.ru = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
langArray.en = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(langArray[lang]);


if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday');
} else if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else {
  console.log('Choose another language');
}

switch (lang) {
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday');
    break;
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  default:
    console.log('Choose another language');
    break;
}

let namePerson = prompt('Назовите имя:');
let message = (namePerson === 'Артем') ? 'Директор' :
  (namePerson === 'Александр') ? 'Преподаватель' :
  'Студент!';

console.log(message);