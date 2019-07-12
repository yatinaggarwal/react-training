// Open the developer tools on your favorite news site.
// Locate the first character of all headings, and log the concatenation of the first characters.

let text = '';
let nodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
for ( let node of nodes ) {
    text += node.textContent[0];
}
console.log( text );