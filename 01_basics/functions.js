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
        console.log("Please enter username first");
        return
    }
    return `${username} user is logged in`
}
console.log(loginUserMessage());
// console.log(loginUserMessage("Zohaib"));
