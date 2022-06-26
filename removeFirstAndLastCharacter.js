//It's pretty straightforward.
//Your goal is to create a function that removes the first and last characters
//of a string. You're given one parameter, the original string. You don't
//have to worry with strings with less than two characters.
function removeChar(str) {
    let array = str.split("");
    array.shift();
    array.pop();
    return array.join("");
}
removeChar("ivaov");

// Second way to solve:
function removeChar(str) {
    console.log(str.slice(1, -1));
}
removeChar("ivaov");