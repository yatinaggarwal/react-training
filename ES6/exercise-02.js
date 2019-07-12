// Write a simple destructuring expression to find the value of title, author firstname and publisher web url from the given object

const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};

const { title: doc, authors: [ { firstname: name } ], publisher: { url: web } } = meta;
console.log(doc, name, web);