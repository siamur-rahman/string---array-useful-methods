const numbers = [6, 4, 7, 1, 8, 3, 9, 2, 5];

const sortedNumber = numbers.sort();
// console.log(sortedNumber);


const friends = ['kabil', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
const reversedFriends = friends.sort();
// console.log(reversedFriends);

const friends2 = ['eabil', 'cosim', 'fazzak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends2.reverse();
// console.log(sortedFriends);

const friends3 = ['kabil', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
const sortedFriends2 = friends3.sort().reverse();
// console.log(sortedFriends2);


// numbers sorting fun
const bigNumbers4 = [66, 58, 81, 9, 6, 2, 13, 23, 33, 47, 67];
const sortedBigNum4 = bigNumbers4.sort();
// console.log(sortedBigNum4);


const bigNumbers = [66, 58, 81, 9, 6, 2, 13, 23, 33, 47, 67];
const sortedBigNum = bigNumbers.sort(function (a, b) {
   return a - b;
});
// console.log(sortedBigNum);
