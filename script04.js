let str = prompt('Введите значение');


let getCleanString = function (str) {
  str = str.trim();
  if (typeof str !== 'string') {
    alert('Тип не "строка"!');
  } else if (str.length <= 30) {
    return str;
  } else {
    str = str.slice(0, 30) + '...';
    return str;
  }
};

console.log(getCleanString(str));