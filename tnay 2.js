/*1Create a function that is receiving a collection of employees and using
  toString() returns a string with comma - separated full names*/
function fullName(arr) {
    let result = ""
    for (let elm of arr) {
        result += [elm.firstName + " " + elm.lastName].toString() + " , "
    } return result
}
console.log(fullName(employees))
//kam
function fullName(arr) {
    for (let elm of arr) {
        console.log([elm.firstName, elm.lastName].toString())
    }
}
fullName(employees)
/* 2  Create a function that is receiving a collection of employees
and using toString() returns a string with comma-separated
`email: salary` with the following format
hloyley5@uol.com.br: $1368.00, ldoige2@mashable.com: $1873.56 */
function emailSalary(arr) {
    let result = ""
    for (let elm of arr) {
        result += [elm.email + ": " + elm.salary].toString() + ",  "
    } return result
}
console.log(emailSalary(employees))
/*3 Create a custom Array.prototype.myToString it should work
similarly to Array.prototype.toString*/
Array.prototype.myToString = function () {
    let result = ""
    for (let elm of this) {
        if (this.indexOf(elm) < this.length - 1) {
            result += elm + ", "
        } else {
            result += elm
        }
    } return result
}
const arr = [1, 2, "Lus", "Arev"]
console.log(arr.myToString())
//kam sa,chnayac djvar te senc primitiv ban duq tayiq)))
Array.prototype.myToString = function () {
    return this.toString()
}
const arr = [1, 2, "Lus", "Arev"]
console.log(arr.myToString())
/*4Create a function that is receiving a collection of employees
and returns a string containing emails in the following format
email1@example.com//email2@example.com//email3@example.com*/
function emails(arr) {
    return arr.map(elm => elm.email)
        .join('// ')
}
console.log(emails(employees))
//kam
function emails(arr) {
    let result = []
    for (let elm of arr) {
        result.push(elm.email)
    } return result.join('// ')
}
console.log(emails(employees))
/*5  Create a function that is receiving a collection of employees
and returns a string with comma-separated email: salary*/
 function emailSalary(arr){
return arr.map(elm=>elm.email+': '+ elm.salary)
          .join()
}
console.log(emailSalary(employees))
//
function emailSalary(arr) {
    let result = []
    for (let elm of arr) {
        result.push(elm.email + ": " + elm.salary)
    } return result.join()
}
console.log(emailSalary(employees))
/*6 Create a custom Array.prototype.myJoin should work similarly
to Array.prototype.join*/
     Array.prototype.myJoin = function () {
    return this.join()
}
//kam
Array.prototype.myJoin = function (a) {
    let result = ""
    if (a === undefined) {
        for (let elm of this) {
            if (this.indexOf(elm) != this.length - 1) {
                result += elm + ","
            } else {
                result += elm
            }
        }
    }
    else {
        for (let elm of this) {
            if (this.indexOf(elm) != this.length - 1) {
                result += elm + a
            } else {
                result += elm
            }
        }

    } return result
}
const arr = [1, 2, "Lus", "Arev", true]
console.log(arr.myJoin("/"))
console.log(arr.myJoin())
/*7Create a function that is receiving an array and returns
reversed one using pop()*/
 function reversedArr(arr){
let result=[];
let i=0;
while(arr.length!=0){
    result[i] = arr.pop();
    i++
}return result
}
console.log(reversedArr([1, 2, 3, 4]))
    /*  8. Create a function that is receiving a sting argument and checks
if it is a palindrome using pop()*/
function isPalindrome(str) {
    let arr = str.split('')
    for (let a of arr) {
        if (a != arr.pop()) {
            return false
        }
    } return true
}
console.log(isPalindrome("asfxsdgsa"))
console.log(isPalindrome("naan"))
/*9Create a custom Array.prototype.myPop should work similarly to
Array.prototype.pop*/
Array.prototype.mypop = function () {
    return this.pop()
}
//
Array.prototype.myPop = function () {
    let result = this[this.length - 1];
    this.length = this.length - 1
    return result
}
let arr = [1, 2, 3]
console.log(arr.myPop())
console.log(arr)
/*10Create a function that is receiving a number and returns an
array which is containing all even digits. Use push method*/
     function evenDigits(num){
let result=[]
while(num!=0){
let digit=num%10
if(digit%2==0){
result.push(digit)
}
num=(num-digit)/10
}return result
}
console.log(evenDigits(123456))
/*11.Create a function that will receive two collections of
employees and adds the items of the second collection to the
first collection. Use push method*/
 let obj1=[{
"firstName": "Rouvin",
"lastName": "Gillcrist",
"email": "rgillcrist6@aol.com",
"salary": "$7.29",
"isEngineer": true,
"gender": "Male"
}]
let obj2={
"firstName": "Flemming",
"lastName": "Scroggins",
"email": "fscroggins7@msu.edu",
"salary": "$7.54",
"isEngineer": false,
"gender": "Male"
}
function addsCollection(obj1,obj2){
obj1.push(obj2)
return obj1
}
console.log(addsCollection(obj1, obj2))
/*12.  Create a custom Array.prototype.myPush should work
similarly to Array.prototype.push*/
//mi hat undefined ka,chgitem inchi?
Array.prototype.myPush = function (...a) {
    for (let i = 0; i < a.length; i++) {
        this[this.length + i] = a[i]
    } console.log(this)
    return this.length
}
console.log([1, 2, 3, 4].myPush(5, 6))
/* 13. * Create a custom Array.prototype.myShift should work
similarly to Array.prototype.shift*/
Array.prototype.myShift = function () {
    let result = this[0];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    } this.length = this.length - 1
    //console.log(this)
    return result
}
console.log([1, 2, 3, 4].myShift())
/*14Create a custom Array.prototype.myUnshift should work
similarly to Array.prototype.unshift*/
Array.prototype.myUnshift = function (...a) {
    let res = [...this]
    let l = this.length + a.length
    for (let j = 0; j < a.length; j++) {
        this[j] = a[j]
    }
    for (let i = a.length; i < l; i++) {
        this[i] = res[i - a.length]
    }
    console.log(this)
    return l
}
console.log([1, 2, 3, 4].myUnshift(5, 6))
/*15 Using concat compute the union of two arrays and then remove
all duplicated items if they exist*/
function concatArray(arr1, arr2) {
    let arr = arr1.concat(arr2)
    return arr.filter((elm, index) => {
        if (arr.indexOf(elm) == index) {
            return elm
        }
    })
} console.log(concatArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
/*16 Create a custom Array.prototype.myConcat should work
similarly to Array.prototype.concat*/
Array.prototype.myConcat = function (arr) {
    let l = this.length
    for (let i = 0; i < arr.length; i++) {
        this[l + i] = arr[i]
    } return this
}
console.log([1, 2, 3].myConcat([4, 5]))
/* 17 Using the splice method, write a function that will fill the
missing numbers of a sorted array of numbers, to make it
consecutive.
Example: [1,2,3,6] should become [1,2,3,4,5,6]*/
function makeConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        m = arr[i + 1] - arr[i]
        if (m > 1) {
            for (let j = 1; j < m; j++) {
                arr.splice(i + j, 0, arr[i] + j)
            }
        }
    } return arr
}
console.log(makeConsecutive([1, 4, 7, 11]))
/* 18 Using the splice method, create a function which is removing
duplicated numbers from a sorted array of numbers*/
 * function uniqueNumbers(arr){
for(let i=0;i<arr.length-1;i++){
if(arr[i]==arr[i+1]){
arr.splice(i,1)
}
}return arr
}
console.log(uniqueNumbers([1, 2, 2, 3, 5, 6, 6, 8]))
/* 19 Create a custom Array.prototype.mySplice should work
similarly to Array.prototype.splice*/
Array.prototype.mySplice = function (index, count, newEl) {
    this.push(newEl)
    let result = [...this]
    if (count == undefined) {
        return this
    } else {
        for (let i = 0; i < this.length; i++) {
            if (index <= i < index + count) {
                continue
            } else {
                this[i] = result[i]
            }
        }
        return this.slice(index, index + count)
    }
}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].mySplice(1, null, 25))
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].mySplice(1, 3, 25))

    /*20Using slice, write a JavaScript function to clone an array*/
     * function clone(arr){
let result=arr.slice(0)
return result
}
console.log(clone([1,2,3,4,5]))
     /*21  Using slice, Write a JavaScript function to get the last
element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array*/
      function lastElements(arr,n){
if(n==undefined){
return arr[arr.length-1]
}else
{
let result=arr.slice(arr.length-n)
return result
}
}
console.log(lastElements([1,2,3,4,5],3))
console.log(lastElements([1,2,3,4,5]))
 /*22 Using slice, Write a JavaScript function to get the first
element of an array. Passing a parameter 'n' will return the
first 'n' elements of the array*/
  function firstElements(arr,n){
if(n==undefined){
return arr[0]
}else
{
let result=arr.slice(0,n)
return result
}
}
console.log(firstElements([1,2,3,4,5],3))
console.log(firstElements([1, 2, 3, 4, 5]))
/*23 Create a custom Array.prototype.mySlice should work
similarly to Array.prototype.slice*/
Array.prototype.mySlice = function (a, b) {
    let arr = [];
    for (let i = 0; i < b - a; i++) {
        arr[i] = this[a + i]
    } return arr
}
console.log([1, 2, 3, 4, 5, 6].mySlice(1, 4))
    /*24 Using sort, Write a JavaScript function to get the max
element of an array of numbers*/
     * function maxElement(arr){
let result=arr.sort((a,b)=>a-b)
return result[arr.length-1]
}
console.log(maxElement([5,1,8,3,4,11,-20]))
/* 25 Using sort, Write a JavaScript function to get the min
element of an array of numbers*/
 * function minElement(arr){
let result=arr.sort((a,b)=>a-b)
return result[0]
}
console.log(minElement([5, 1, 8, 3, 4, 11, -20]))
/* 26 Using sort, Write a JavaScript function to sort the
collection of employees by their name*/
 function sortByName(arr){
let result=arr.sort((a,b)=>a.firstName.localeCompare(b.firstName))
return result
}
console.log(sortByName(employees))
/* 27 Create a custom Array.prototype.mySort should work
similarly to Array.prototype.sort*/
Array.prototype.mySort = function (fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i]) == true) {
            this[i] = fn(this[i])
        } return this
    }
    console.log([1, 5, 9, 2, 7, 3, 6, 0].mySort((a, b) => a - b))
    /* 28 Using reverse, write a function that checks if the string is
a palindrome*/
function isPalindrome(str) {
    return [...str].reverse().join("") == str
}
console.log(isPalindrome("Lusine"))
console.log(isPalindrome("naan"))
/* 29 Using the map, write a function to clone an array
*/function clone(arr) {
    return arr.map((elm => elm))
}
console.log(clone([1, 2, 3, 4, 5, 6]))
/* 30 Using the map write a function that returns an array
containing only firstNames of all  employees*/
function foo(arr) {
    return arr.map((elm => elm.firstName))
} console.log(foo(employees))
  /* 31 Using the filter, write a JavaScript function to clone an
array*/
function clone(arr) {
    return arr.filter((elm => elm))
}
console.log(clone([1, 2, 3, 4, true]))
/*32 Write a function that will return only employees with salary
greater than*/
function foo(arr, n) {
    return arr.filter(elm => {
        let salary = [...elm.salary];
        return (+salary[1]) > n
    })
}
console.log(foo(employees, 4))
/*33 Create a custom Array.prototype.myFilter should work
similarly to Array.prototype.filter*/
Array.prototype.myFilter=function(fn){
let result=[]
for(let i=0;i<this.length;i++){
if(fn(this[i])){
result.push(this[i])
}
}return result
}
console.log([1,2,3,4,5,6].myFilter(elm=>elm%2==0))
/* 34 Using reduce write a function that returns the total salary
of all employees*/
function totalSalary(arr) {
    return arr.reduce((a, b) => { a + b.salary })
}
console.log(totalSalary(employees))//@ndhanrapes senca,bayc mer orinakum salary-i valuen stringa..petqe number sarqenq,nor//
function totalSalary(arr) {
    let result = arr.map(elm => elm.salary);
    for (let i = 0; i < result.length; i++) {
        result[i] = Number(result[i].substring(1))
    }
    return "$ " + result.reduce((a, b) => a + b).toFixed(2)
}
console.log(totalSalary(employees))
/*35Using reduce create a function that is receiving a collection
of employees and returns a string containing emails in the
following format
email1@example.com//email2@example.com//email3@example.com*/
 function emails(arr){
let result=arr.map(elm=>elm.email)
return result.reduce((a,b)=>a+" // "+b)
}console.log(emails(employees))
/* 36 Using every() create a function that is checking if all
employees have a salary of more than n*/
function foo(arr, n) {
    return arr.every(elm => elm.salary > n)
} console.log(foo(employes,1)
//ay sa ashxatoxn e
    function foo(arr, n) {
        let arrr = arr.map(elm => elm.salary.substring(1))
        return arrr.every(elm => {
            return Number(elm).toFixed(0) > n
        })
    }
console.log(foo(employees, 0))
console.log(foo(employees, 5))
/*37 Using every() create a function that is checking if all
employees are engineers*/
function allIsEngineer(arr) {
        return arr.map(elm => elm.isEngineer)
        .every(elm => elm == true)
    }
console.log(allIsEngineer(employees))
/* 38 Write a function to check if all employees are Male */
function allIsMale(arr) {
        return arr.map(elm => elm.gender)
             .every(elm => elm == "Male")
    }
console.log(allIsMale(employees))
/* 39 Write a function that will ensure that there are Females in
the list of employees*/
function areFemale(arr) {
        return arr.map(elm => elm.gender)
        .some(elm => elm == "Female")
    }
console.log(areFemale(employees))
/*40 Write a function that will ensure that there are engineers in
the list of employees*/?
function fun1(arr) {
        return arr.map(elm => elm.isEngineer)
            .some(elm => elm == true)
    }
console.log(fun1(employees))
/* 41 Write a function which is checking if a given element
contains inside an array*/
function areContain(arr, el) {
        return arr.indexOf(el) == -1 ? false : true
    }
console.log(areContain([1, 2, 3, 4, 5, 6], 7))
console.log(areContain([1, 2, 3, 4, 5, 6], 5))
/* 42Create a function that will find the employee by the provided
name*/
function findEmployee(arr, name) {
        return arr.find(a => a.firstName == name)
    }
console.log(findEmployee(employees, "Sallee"))
/* 43 Create a function that will find the employee by filter.
Example: findEmployee(
employees,
{firstName: `Flemming`, lastName: `Scroggins`)
) */
function findEmployee(arr, obj) {
        return arr.find(a => a.firstName == obj.firstName || a.lastName == obj.lastname)
    }
console.log(findEmployee(employees, { firstName: `Flemming`, lastName: `Scroggins` }))
/* 44 Using from, write a JavaScript function to clone an array */
function clone(arr) {
        return Array.from(arr)
    }
console.log(clone(arr1))
/* 45 Using from, and Set create a function that is removing
duplicates from an array */
function uniqueElm(arr) {
        let set = new Set()
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) == i) {
                set.add(arr[i])
            }
        }
        return Array.from(set)
    }
console.log(uniqueElm([1, 2, 3, 4, 5, 5, 3, 4, true, "Arev"]))
/* 46 Using from, turn the string into an array*/
function fun1(str) {
        return Array.from(str)
    }
console.log(fun1("Arevik"))
/*  47 Create a custom Array.prototype.myIncludes should work
similarly to Array.prototype.includes*/
Array.prototype.myIncludes = function (el) {
        if (this.indexOf(el) == -1) {
            return false
        } return true
    }
 console.log([1, 2, 3, 4, 5, 6].myIncludes(0))
 console.log([1, 2, 3, 4, 5, 6].myIncludes(5))
/* 48 Write a function to check whether an `input` is an array or
not. Provide 2 different solutions */
 function checks(arr) {
        return Array.isArray(arr)
    }
console.log(checks([4, 5]))
//sa el erkrord@
function checks(arr) {
        return arr.constructor.name == "Array"
    }
console.log(checks([4, 5]))
console.log(checks({ 4: 5 }))
console.log(checks(45))
/* 49 Write a function to find the difference of two arrays*/
    function differenceOfTwoArray(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return "they have different lengths"
        } else if (arr1.length == arr2.length) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return "they have different values"
                }
            }
        } return "they are some"
    }
console.log(differenceOfTwoArray([1, 2, 3, 4, 5], [4, 5, 6]))
console.log(differenceOfTwoArray([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))
console.log(differenceOfTwoArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))
/*50. Write a function that will receive the length and the value
and will return a pre-filled array
Example: prefillArray(2, ‘Bla Bla`)
should return [‘Bla Bla`, ‘Bla Bla`] */
    function prefillArray(length, value) {
        let result = [];
        for (let i = 0; i < length; i++) {
            result[i] = value
        }
        return result
    }
console.log(prefillArray(2, "Bla Bla"))