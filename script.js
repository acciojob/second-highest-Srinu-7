//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }

    return secondHighest === -Infinity ? -Infinity : secondHighest;
}

// Example Usage:
console.log(secondHighest([5, 1, 2, 3, 4]));  // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5]));  // Output: -2
console.log(secondHighest([]));  // Output: -Infinity
console.log(secondHighest([1]));  // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));  // Output: -Infinity
