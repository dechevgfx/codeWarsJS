// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function mumbling(string) {
    let arrayFromString = string.split("");
    let finalResult = [];
    for (let index = 0; index < arrayFromString.length; index++) {
        finalResult.push(
            `${arrayFromString[index].toUpperCase()}${arrayFromString[index]
                .repeat(index)
                .toLowerCase()}`,
        );
    }
    return finalResult.join("-");
}
mumbling("abcd");
