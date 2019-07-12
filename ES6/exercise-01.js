// Create a function that list out all the number divisible by 3 from given array of numbers

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function checkDivisiblityBy3 (numberList) {
    return numberList.filter(number => number % 3 === 0 );
}

checkDivisiblityBy3(array);