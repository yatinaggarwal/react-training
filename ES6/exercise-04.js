// Write a function that calculates the prices after tax calculation for each price element in the prices array

var prices = [1.1, 2.32, 3.68, 4.9];

function calculatePricesWithTax (prices, tax = 0.07) {
    return prices.map(price => {
        return (price + (price * tax)).toFixed(2);
    })
}

calculatePricesWithTax(prices);