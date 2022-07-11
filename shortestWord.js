// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let splitted = s.split(" ");
    let shortest = splitted[0];
    for (const word of splitted) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest.length
  }