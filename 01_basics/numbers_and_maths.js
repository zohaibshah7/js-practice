// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 33;
// const max = 40;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// let num1 = 10
// let num2 = 20

// let sum = num1 + num2

// console.log("",sum);

let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

let num1 = 20
// let num2 = 30

// if (num1 > num2) {
//     console.log(num1, "is greater");
// } else {
//     console.log(num2, "is greater");
// }

// for (let i = 1; i <= 10; i++) {
// //     console.log(num + " x " + i + " = " + (num * i));
// // }

// // for (let i = 1; i <= 10; i++) {
// //     console.log(num1 + " x " + i + " = " + (num1 * i));
// // }

try {
    let result = 10 / 0; // Yeh error nahi dega, par maan lo koi aur error hota
    console.log(result);
    let a = b + 10; // Yeh error dega kyunki b defined nahi hai
  } catch (error) {
    console.log("Error aagaya bhai!", error.message); // Yeh error ko pakad lega
  }