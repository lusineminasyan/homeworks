///1////Write a function that takes two numbers as arguments and returns an array containing all the
even numbers between the arguments.If there are no even numbers between the
arguments the function should return “There are no even numbers”

function evenFrom(num1, num2) {
    let result = 'There are no even numbers'
    let arr = []
    for (let i = num1 + 1; i < num2 - 1; i += 2) {
        if (i % 2 === 0) {
            arr.push(i)
        } else {
            arr.push(i + 1)
        } result = arr
    }
    return result
}
console.log(evenFrom(12, 20))
console.log(evenFrom(1, 12))
console.log(evenFrom(2, 4))
///2///Write a function that takes a number as an argument. Return an array containing the two
halves of the number.If the number is odd, make the rightmost number higher

function numberSplit(number) {
    let arr = []
    if (number % 2 === 0) {
        arr.push(number / 2, number / 2)
    } else {
        arr.push((number - 1) / 2, (number + 1) / 2)
    } return arr
}
console.log(numberSplit(6))
console.log(numberSplit(8))
console.log(numberSplit(-5))

////3////Write a function that takes an array of numbers as an argument. The function  should
reverse the array and return it

function getReverse(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}
console.log(getReverse([1, 5, 9, 11, 20]))
console.log(getReverse([1, 1, 5, 6, 6]))
console.log(getReverse([8]))


////////4//////Write a function that takes an array as an argument. The function should return true if the
array includes positive numbers more than negatives, and it should return false otherwise

function isPositive(arr) {
    let result = false
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count1 += 1
        } else if (arr[i] < 0) {
            count2 += 1
        }
    }
    if (count1 > count2) {
        result = true
    }
    return result
}
console.log(isPositive([2, 3, -2, 0, 1]))
console.log(isPositive([-2, -5, 0, 1]))
console.log(isPositive([0, 0, 0,]))

//////5/////Write a function that takes two sorted arrays of numbers and returns an array of numbers
which are common to both the input arrays

function getCommonElements(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result
}
console.log(getCommonElements([-1, 3, 4, 5, 6, 9], [1, 3]))
console.log(getCommonElements([1, 3, 5, 7, 9, 11], [1, 2, 3, 4, 5, 6]))
console.log(getCommonElements([2, 4, 6, 8], [10, 12, 14, 16]))
