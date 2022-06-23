///1////Create a function to get the intersection of two arrays.
function toGetTheIntersection(arr1, arr2) {
    let result = []
    for (let i of arr1) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    } return result
} console.log(toGetTheIntersection([1, 2, 3, 4], [3, 4, 5, 6]))
/////2///Create a function to get the sum of each positive element from the given array. If there are
//no positive values in the array, return 0
const arr = [1, 2, 3, 4]
const positiveArr = arr.filter(function (item, arr) {
    return item > 0
})
const sum = 0;
const sumOfEachPositiveElement = positiveArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, sum);
console.log(sumOfEachPositiveElement);
///3//Create a function that takes an array and returns the sum of all numbers in the array. If there
//are no numbers in the array, return 0
const arr = [1, 2, 3, 4, "Arev", true, "123"]
const newArr = arr.filter(function (item, arr) {
    if (typeof item === "number") {
        return item
    }
})
const sum = 0;
const sumOfNumbers = newArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, sum);
console.log(sumOfNumbers)
4/*Create a function that performs an even-odd transform to an array, n times. Each even-odd
transformation:
            ● Adds two(+2) to each odd integer.
            ● Subtracts two(-2) from each even integer*/
const arr = [1, 2, 3, 0]
const n = 4
const evenOddTransform = arr.map(function (item, index, arr) {
    if (item % 2 === 0) {
        return item - n * 2
    } return item + n * 2
})
console.log(evenOddTransform)
///5/ /*Create a function that takes an array of numbers nums as an argument. Square each
// number in the array if the number is even and square root the number if it is odd.Return the
// sum of the new array rounded to two decimal places
const arr = [2, 4, 9]
const transformArr = arr.map(function (item) {
    if (item % 2 === 0) {
        return Math.pow(item, 2)
    } return Math.sqrt(item)
})
const sumOfTransform = transformArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
})
console.log(sumOfTransform)
 //6//Create a function that takes in an array and returns an array of the accumulating sum.
//note.An empty array input should return an empty array
const arr = [1, 2, 3, 4]
const result = []
var sum = 0
const arrayOfTheAccumulatingSum = arr.forEach(function (item, index, arr) {
    if (arr.length === 0) {
        return result
    }
    for (let i = 0; i <= index; i++) {
        sum += arr[i]
    } result.push(sum)
    sum = 0
})
console.log(result)
///sa teri exav
const arr = [1, 2, 3, 4]
const arrayOfTheAccumulatingSum = arr.map(function (item, index, arr) {
    if (arr.length === 0) {
        return []
    }
    return arr.slice(0, index)
        .reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
        }, arr[0])
})
console.log(arrayOfTheAccumulatingSum)