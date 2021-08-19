const products = [
   'Dell hardcore i29 200GB laptop',
   'iphone 1TB camera flashlight phone',
   'yellow laptop with black camera dell',
   '1X59 Lenovo commercial yoga laptop',
   'dell LG low price Phone',
   'purple color phone with Laptop'
];

const searching = 'dell';
// 
const output = [];

for (const product of products) {
   if (product.toLowerCase().endsWith(searching.toLowerCase())) {
      output.push(product);
   }
}
console.log(output);


/////////////////////......... SYSTEM-1...INDEXof.......... ///////////////
// const searching = 'laptop';
// // 
// const output = [];

// for (const product of products) {
//    if (product.indexOf(searching) != -1) {
//       output.push(product);
//    }
// }
// console.log(output);

/*

/////////////////////......... SYSTEM-2.....IndexOf........ ///////////////
const searching = 'laptop';
//
const output = [];

for (const product of products) {
   if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
      output.push(product);
   }
}
console.log(output); */

/////////////////////......... SYSTEM-3.....Includes........ ///////////////
/*
const searching = 'laptop';
//
const output = [];

for (const product of products) {
   if (product.toLowerCase().includes(searching.toLowerCase())) {
      output.push(product);
   }
}
console.log(output);*/
/////////////////////......... SYSTEM-3.....Includes........ ///////////////
/*
const searching = 'dell';
//
const output = [];

for (const product of products) {
   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
      output.push(product);
   }
}
console.log(output);*/


/////////////////////......... SYSTEM-3.....Includes........ //////////////
/*
const searching = 'dell';
//
const output = [];

for (const product of products) {
   if (product.toLowerCase().endsWith(searching.toLowerCase())) {
      output.push(product);
   }
}
console.log(output);*/