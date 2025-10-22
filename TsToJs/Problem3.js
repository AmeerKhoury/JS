function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
function maximumProfit(array) {
    if (array.length === 0)
        return 0;
    let minPrice = array[0];
    let maxProfit = 0;
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let profit = current - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        if (current < minPrice) {
            minPrice = current;
        }
    }
    return maxProfit;
}
const price1 = [100, 80, 120, 130, 70, 60, 100, 125];
const price2 = [100, 80, 70, 65, 60, 55, 50];
console.log(maximumProfit(price1)); // Output: 65
console.log(maximumProfit(price2)); // Output: 0
export {};
