// Define a function that concatenates several strings
// – Function should take a separator and list of arguments
// – Function should return list of arguments concatenated and separated by separator

function concatStrings (separator, ...rest) {
    return rest.join(separator);
}

concatStrings(',', 'ricky', 'michael', 'john');

// Define a function that creates HTML lists
// – Creates a string containing HTML for a list
// – Only formal argument for a function is a string that is “u” for unordered list and “o” for ordered list

function createHtmlList (listType = 'u') {
    const listTag = listType === 'u' ? 'ul' : 'ol'
    return `<${listTag}>
                <li></li>
            </${listTag}>`;
}

createHtmlList('u');

// Create a factorial calculator
function calcFactorial (number) {
    if(number <= 1) {
        return 1;
    }
    return number * calcFactorial(number - 1);
}

calcFactorial(5);