function getMaxOfArray(numArray: number[]): number {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray: number[]): number {
    return Math.min.apply(null, numArray);
}

function maximumProfit(array: number[]): number {
    if (array.length === 0) return 0;

    let minPrice: any = array[0];
    let maxProfit: number = 0;

    for (let i = 1; i < array.length; i++) {
        const current: any = array[i];
        const profit: number = current - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (current < minPrice) {
            minPrice = current;
        }
    }

    return maxProfit;
}

const price1: number[] = [100, 80, 120, 130, 70, 60, 100, 125];
const price2: number[] = [100, 80, 70, 65, 60, 55, 50];

console.log(maximumProfit(price1)); // Output: 65
console.log(maximumProfit(price2)); // Output: 0
