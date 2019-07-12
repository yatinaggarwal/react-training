// Write following code using object literal expression

const first = 'Mohan';
const last = 'Singh';
// const person = new Object();
// person.first = first;
// person.last = last;
// person.favouriteColor = 'blue';
// person.address = new Object();
// person.address.city = 'Gurgaon';
// person.address.street = 'Sector 21';
// person.address.state = 'HR';

const person = {
    first,
    last,
    favouriteColor: 'blue',
    address: {
        city: 'Gurgaon',
        street: 'Sector 21',
        state: 'HR'
    }
}

console.log(person);