function addNumbers(num1, num2) {
   console.log(arguments);
   let result = 0;
   for (const num of arguments) {
      result = result + num;
   }
   // const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 100);
// console.log(sum);

// function getFullName(firstName, lastName) {
//    const fullName = firstName + ' ' + lastName;
//    return fullName;
// }
// const name = getFullName('Omuk','Bin', 'Hanif', 'Sonket');
// console.log(name);

function getFullName(firstName, lastName) {
   let fullName = ' ';
   for (const part of arguments) {
      fullName = fullName + part + ' ';
   }
   // const result = num1 + num2;
   return fullName;
}

const name = getFullName('Omuk', 'Bin', 'Hanif', 'Sonket', 'bbin', 'binnn', 'somuk');
console.log(name);



























/*
function addNumbers(num1, num2) {
   console.log(arguments);
   let result = 0;
   for (const num of arguments) {
      result = result + num;
   }
   // const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 100);
console.log(sum);*/

/*function addNumbers(num1, num2) {
   console.log(arguments);
   for (const num of arguments) {
      console.log(num);
   }
   const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 13, 50, 100, 450);
console.log(sum);*/


/*function addNumbers(num1, num2) {
   console.log(arguments);
   // arguments.push[45];
   const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 13, 50, 100);
console.log(sum);*/

/*function addNumbers(num1, num2) {
   console.log(arguments[3]);
   const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 13, 50, 100);
console.log(sum);*/

/*function addNumbers(num1, num2) {
   console.log(arguments);
   const result = num1 + num2;
   return result;
}
const sum = addNumbers(23, 13, 50, 100);
console.log(sum);*/