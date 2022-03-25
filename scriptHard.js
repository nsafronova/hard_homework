let num = 266219;

let array = ([num].toString().split(''));
let res = array.reduce((acc, rec) => acc * rec);
console.log(res);

let multi = (res ** 3);
console.log(multi);

let result = multi.toString().substr(0, 2);
console.log(result);