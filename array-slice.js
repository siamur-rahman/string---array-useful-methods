const numbers = [3, 4, 6, 8, 19, 15, 21, 45, 39];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);

const numbers2 = [3, 4, 6, 8, 19, 15, 21, 45, 39];
// console.log(numbers2);
const numberSliced2 = numbers2.splice(4, 8);
// console.log(numberSliced2);
// console.log(numbers2);

const numbers21 = [3, 4, 6, 8, 19, 15, 21, 45, 39];
console.log(numbers21);
const numberSliced21 = numbers21.splice(4, 3, 99, 777, 66, 777, 888, 444);
console.log(numberSliced21);
console.log(numbers21);