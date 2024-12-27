function kingsman() {
    console.log('A');
    console.log('R');
    console.log('T');
    console.log('H');
    console.log('U');
    console.log('R');
}

// kingsman()

function numbers(numb1, numb2) {
    return numb1 + numb2
    // console.log(numbers); After return console won't work
}

const result = numbers(15, 5)
// console.log("Result: ", result);

function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter username first");
    //     return
    // }
    if (!username) {
        // console.log("Please enter username first");
        return
    }
    // return `${username} user is logged in`
}
console.log(loginUserMessage());
// console.log(loginUserMessage("Zohaib"));

function calculateCartPrice(val1, val2, ...val) {
    return val
}
// console.log(calculateCartPrice(100));
// console.log(calculateCartPrice(100, 200, 3000, 400, 500, 600));

const user = {
    username: 'Zohaib',
    price: 999
}

function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: 'Soldier boy',
    price: 499
})

const myNewArray = [100, 200, 300, 4000, 5000]

function returnSecondValue(getArray) {
    return getArray
    // console.log(getArray);
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));
