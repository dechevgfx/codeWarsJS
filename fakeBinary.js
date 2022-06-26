//Given a string of digits, you should replace any digit below 5 with '0' and 
//any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string


function fakeBin(x) {
    let array = x.split("");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < 5) {
            array[index] = 0;
        } else {
            array[index] = 1;
        }
    }
    console.log(array.join(""));
}

fakeBin("");
