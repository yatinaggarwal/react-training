// Parse the day, month and year from the date ('2025-09-26')

const date = '2025-09-26';

function formatDate (date) {
    const [ year, month, day ] = date.split('-');
    return `year: ${year}, month: ${month}, day: ${day}`;
}

formatDate(date);