//      agar {} ye brackets functiob, if else or loops me use hungy to yeh scope kehlata hai otherwise yeh object hai

{
  let ghost = "Ghost";
  const zohaib = "Zohaib";
  var soldierBoy = "Sodier boy"; // scope me isy use nhi karna
}

// console.log(ghost);
// console.log(zohaib);
// console.log(soldierBoy);

/////////   scope in fuctions

// console.log(addone()); ///// yeh error nhi dega bhaly ye declaration se pehle execute hu

function addone() {
  return +1;
}

// console.log(addTwo()); ///// yeh error dega q ky yeh variable me hold hai or declaration se pehle execute nhi huga

const addTwo = function () {
  return +5;
};

