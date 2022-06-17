//homework 2
//1... Write a JavaScript function to print an integer with commas as thousands separators????
function thousandsSeparators(num) {
    let result = (num - num % 1000) / 1000
    if (num < 1000) {
        return "" + num % 1000
    }
    else if (num > 999 && num < 1000000) {
        if (num % 1000 === 0) {
            return result + "," + 0 + 0 + 0
        } else if (num % 1000 < 100 && num % 1000 > 9) {
            return result + "," + 0 + num % 10
        } else if (num % 1000 < 10) {
            return result + "," + 0 + 0 + num % 10
        } else if (num % 1000 > 99) {
            return result + "," + num % 1000
        }
    }
    else if (num > 999999) {
        return thousandsSeparators((num - num % 1000) / 1000) + "," + thousandsSeparators(num % 1000)
    }
}
console.log(thousandsSeparators(25486))
console.log(thousandsSeparators(10000))
console.log(thousandsSeparators(1000))
console.log(thousandsSeparators(1))
console.log(thousandsSeparators(1234056789))
///sa teri e grvac
let num = 123456
let arr = Array.from(String(num))
let result = arr.map(function (item, index, arr) {
    if (-index % 3 === 0) {
        return "," + item
    } if (-index % 3 !== 0) {
        return item
    }
})
let num1 = result.join("'")
console.log(num1)
////2.Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
let array = [2, 3, 4, 5, 6, -9, -8]
let positiveNumbers = array.filter(elm => elm > 0)
let findPositiveLowestElement = Math.min(...positiveNumbers)
let arr = positiveNumbers.filter(function (item, index, positiveNumbers) {
    return item > findPositiveLowestElement
})
let findPositiveSecondLowestElement = Math.min(...arr)
let sum = findPositiveLowestElement + findPositiveSecondLowestElement
console.log(sum)
////kam hin ancacov klini ayspes
function positiveNumbers(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result.push(array[i])
        }
    } return result
}
function findPositiveLowestElement(array) {
    let arr = positiveNumbers(array)
    let min = arr[0]
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j]
        }
    } return min
}
function findPositiveSecondLowestElement(array) {
    let minElement = findPositiveLowestElement(array)
    let newArr = positiveNumbers(array)
    let newArr2 = []
    for (let k = 0; k < newArr.length; k++) {
        if (newArr[k] !== minElement) {
            newArr2.push(newArr[k])
        }
    } return findPositiveLowestElement(newArr2)
}
function sumOfTheTwoLowestNumbers(array) {
    let num1 = findPositiveLowestElement(array)
    let num2 = findPositiveSecondLowestElement(array)
    let product = num1 + num2
    return product
}
console.log(sumOfTheTwoLowestNumbers([-2, -6, 8, 0, 3, 1]))
//3.Create a function that, given a number, returns the corresponding value of that index in the
/// Fibonacci series.
/// The Fibonacci Sequence is the series of numbers:
///       1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function valueOfFibonacciSeries(num) {
    let result = [1, 1]
    for (let i = 2; i < (2 ^ 50); i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[num]
}
console.log(valueOfFibonacciSeries(3))
console.log(valueOfFibonacciSeries(7))
console.log(valueOfFibonacciSeries(12))
////4////Create a function that takes a number as an argument and returns true or false
//depending on whether the number is symmetrical or not.A number is symmetrical when it
//is the same as its reverse

function isSymmetrical(num) {
    let arr = Array.from(String(num))
    for (let i in arr) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false
        }
    } return true
}
console.log(isSymmetrical(23456))
console.log(isSymmetrical(123321))
//kam  sa,bayc chgitem inchu chashxatec
let num = 123321
let arr1 = Array.from(String(num))
console.log(!!arr1 === arr1.reverse())
///5///Write a function that returns all the elements in an array that are strictly greater than their
//adjacent left and right neighbors
function greaterThanNeighbors(arr) {
    let result = []
    for (let i of arr) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            result.push(arr[i])
        }
    } return result
}
console.log(greaterThanNeighbors([1, 7, 3, 4, 6, 2, 0]))
console.log(greaterThanNeighbors([1, 2, 2, 0, 4, 5, 6]))
console.log(greaterThanNeighbors([1, 8, 3, 4, 23, 2, 0]))
////// 5. .filter -ov
let arr = [1, 8, 3, 4, 6, 9, 0]
let result = arr.filter(function (item, index, arr) {
    if (item > arr[index + 1] && item > arr[index - 1]) {
        return item
    }
})
console.log(result)

////6////For each number in an array, check if that number is greater than the sum of all numbers
///that appear before it in the array.If all numbers in the array pass this test, return true.
///Return false otherwise
function greaterThanTheSum(arr) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] <= sumOfElements(j, arr)) {
            return false
        }
    }
    return true
}
function sumOfElements(num, arr) {
    let sum = 0
    for (let i = 0; i < num; i++) {
        sum += arr[i]
    } return sum
}
console.log(greaterThanTheSum([2, 3, 7, 13, 28]))
console.log(greaterThanTheSum([1, 2, 4, 6, 13]))
//kam .every ov
function sumOfElements(num, arr) {
    let sum = 0
    for (let i = 0; i < arr.indexOf(num); i++) {
        sum += arr[i]
    } return sum
}
let arr = [2, 3, 7, 13, 28]
let result = arr.every(function (num) {
    return num > sumOfElements(num, arr)
})
console.log(result)