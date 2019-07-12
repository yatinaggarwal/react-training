// Write a function that returns all elements of array except first element

function expectFirst (elements) {
    const [ , ...rest ] = elements;
    return rest;
}

expectFirst([1,2,3,4,5,6,7,8,9,10]);