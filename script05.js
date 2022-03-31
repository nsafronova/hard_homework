let arr = ['34', '22', '67', '54', '43', '89', '66'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {

    console.log(item);
  }
});

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i, 'Делители числа: 1 и', i);
  }
}