let input = "PW Skills";

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function reverseWithDelay(inputtring) {
    setTimeout(function () {
       let reversed = reverseString(inputtring);
       console.log("Reversed String: " + reversed);
    }, 2000);
}

reverseWithDelay(input);