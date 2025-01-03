const allMovies = [
    { name: "Inception", releaseDate: 2010, genre: "Sci-Fi", language: "English" },
    { name: "The Dark Knight", releaseDate: 2008, genre: "Action", language: "English" },
    { name: "3 Idiots", releaseDate: 2009, genre: "Comedy", language: "Hindi" },
    { name: "Avatar", releaseDate: 2009, genre: "Sci-Fi", language: "English" },
    { name: "Dangal", releaseDate: 2016, genre: "Drama", language: "Hindi" },
    { name: "Parasite", releaseDate: 2019, genre: "Thriller", language: "Korean" },
    { name: "Avengers: Endgame", releaseDate: 2019, genre: "Action", language: "English" },
    { name: "PK", releaseDate: 2014, genre: "Comedy", language: "Hindi" },
    { name: "Joker", releaseDate: 2019, genre: "Drama", language: "English" },
    { name: "Interstellar", releaseDate: 2014, genre: "Sci-Fi", language: "English" },
    { name: "The Wolf of Wall Street", releaseDate: 2013, genre: "Biography", language: "English" },
    { name: "Shutter Island", releaseDate: 2010, genre: "Thriller", language: "English" },
    { name: "Bahubali: The Beginning", releaseDate: 2015, genre: "Action", language: "Telugu" },
    { name: "Bahubali: The Conclusion", releaseDate: 2017, genre: "Action", language: "Telugu" },
    { name: "RRR", releaseDate: 2022, genre: "Action", language: "Telugu" },
    { name: "Black Panther", releaseDate: 2018, genre: "Action", language: "English" },
    { name: "The Revenant", releaseDate: 2015, genre: "Drama", language: "English" },
    { name: "Zindagi Na Milegi Dobara", releaseDate: 2011, genre: "Adventure", language: "Hindi" },
    { name: "Spider-Man: No Way Home", releaseDate: 2021, genre: "Action", language: "English" },
    { name: "The Batman", releaseDate: 2022, genre: "Action", language: "English" }
  ];
/************************** Filter *************************/
  
allMovies.filter( (movies) => {
  // console.log(movies.genre);
})

// let searchMovies = allMovies.filter((movies) => movies.genre === "Drama")

let searchMovies = allMovies.filter((movies) => {
  return movies.releaseDate >= 2005 && movies.genre === "Action" && movies.language === "English"
})

// console.log(searchMovies);

/************************** Map *************************/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = numbers.map((nums) => nums + 1)

// hum multiple maps or filter bhi ek sath use kar sakty hai
let newNums = numbers.map((nums) => nums * 10)
                     .map((nums) => nums + 1)
                     .filter((nums) => nums >= 50)
// console.log(newNums);

/************************** Reducer *************************/

const myNums = [1, 2, 3, 4, 5, 6]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const items = [
  { name: "Laptop", price: 60000 },
  { name: "Mechanical Keyboard", price: 4500 },
  { name: "Gaming Mouse", price: 2000 },
  { name: "Monitor", price: 15000 },
  { name: "External Hard Drive", price: 5000 },
  { name: "Graphics Card", price: 25000 },
  { name: "Processor", price: 20000 },
  { name: "RAM (16GB)", price: 8000 },
  { name: "Motherboard", price: 12000 },
  { name: "Headphones", price: 3000 }
];

const itemsBill = items.reduce( (acc, items) => {
  return acc + items.price
}, 0)
console.log(itemsBill);
