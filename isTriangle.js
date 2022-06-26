//Implement a function that accepts 3 integer values a, b, c.
//The function should return true if a triangle can be built with the sides of given
//length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (a > 0 && 
        b > 0 && 
        c > 0 && 
        b + c > a &&
        A > 0) {
        return true;
    } else {
        return false;
    }
}
isTriangle(1, 2, 2);
