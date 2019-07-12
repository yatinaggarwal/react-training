// Write a function that returns an array from a given string
// Write a function that takes an array of string and returns plain string

function wrap (str) {
    return [ str ];
}

function unwrap ([arr]) {
    return arr;
}

wrap('package');
unwrap(['package']);