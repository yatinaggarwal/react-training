// Create an array that contains the last four characters of another array

let inputArray = [1,2,3,4,5,6,7,8,9];

function last4ArrayItems (arr) {
    return arr.filter((arrayItem, index, array) => {
        if(index >= array.length - 4) {
            return arrayItem;
        }
    });
}

last4ArrayItems(inputArray);