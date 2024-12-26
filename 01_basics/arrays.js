/************* Arrays *************/

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// const myArr = [0, 1, 2, 3, 4, 5, 6];

// console.log('A ', myArr);

// const myArr1 = myArr.slice(1, 3)
// console.log(myArr1);
// console.log('B', myArr);

// const myArr2 = myArr.splice(1, 3)
// console.log(myArr2);
// console.log('C', myArr);

const marvelSuperHeroes = [
  "Iron-man",
  "Captain America",
  "Thor",
  "Doctor Strange",
  "Spider-man",
];

const DcSuperHeroes = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Aquaman",
  "Flash",
];

// const AllSuperHeroes = marvelSuperHeroes.concat(DcSuperHeroes)
// console.log(AllSuperHeroes);

const AllSuperHeroes = [...marvelSuperHeroes, ...DcSuperHeroes];
// console.log(AllSuperHeroes);

const array = [1, 2, 3, 4, [1, 2, 3], [1, 2, 3, [1, 2, 3]], 5, 6];

const anotherArray = array.flat(Infinity)

// console.log(anotherArray);

// console.log(Array.isArray('Zohaib'));
// console.log(Array.from('Zohaib'));
// console.log(Array.from({name: 'Zohaib'}));
// console.log(Array.of('Zohaib'));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
