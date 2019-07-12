// Create a 10 x 10 matrix of null values

// Using iteration
let arrayMatrix = [];
for(let row = 0; row < 10; row++) {
    arrayMatrix[row] = [];
    for(let column = 0; column < 10; column++) {
        arrayMatrix[row][column] = null;
    }
}
console.log(arrayMatrix);

// Using Array().fill() method
let matrix = Array(10).fill(null).map(() => Array(10).fill(null));
console.log(matrix);