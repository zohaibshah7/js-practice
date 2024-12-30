//////// Immediately Invoked Function Expressions //////// global scope ky pollution se problem huti hai kayi bar to
//////// global scope ky variables or jo bhi waha declarations hain inky pollution ko hatany k liye IIFY ka use karty hain

(function soldier() {
  console.log(`DB connented`);
})(); ////// agar hum 2 iife execute karyngy to semicolon nhi lagaye to error ayega q k isko pata hi nhi chaly ga kaha rukna hai

((name) => {
  console.log(`${name} connented to DB`);
})('Zohaib');
