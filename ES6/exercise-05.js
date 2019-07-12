// Create an mapper function using arrow symantics that returns an object having following attribute when operating on array

const mapperFns = (number) => {
    return {
        isEven: number % 2 === 0,
        number,
        squared: number * number
    }
}

console.log([1,2,3].map(mapperFns));