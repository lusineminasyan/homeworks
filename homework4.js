//homework 4
///task 1///tarberak 1
Object.prototype.freeShipping = function () {
    return Boolean(Object.values(this).reduce((curr, acc) => curr + acc, 0) > 50)
}
const obj1 = { "Shampoo": 5.99, "Rubber Ducks": 15.99 }
const obj2 = { "Flatscreen TV": 399.99 }
const obj3 = {
    "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":
        13.99
}
console.log(obj1.freeShipping())
console.log(obj2.freeShipping())
console.log(obj3.freeShipping())
////tarberak 2
function freeShipping(obj) {
    var result = false
    const shopping = Object.values(obj).reduce((curr, acc) => curr + acc, 0)
    if (shopping > 50) {
        result = true
    }
    return result
}

console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
console.log(freeShipping({ "Flatscreen TV": 399.99 }))
console.log(freeShipping({
    "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":
        13.99
}))
///task 2
class MapLetters {
    constructor(word) {
        for (let i = 0; i < String(word).length; i++) {
            if (this.hasOwnProperty(word[i])) {
                this[word[i]] = this[word[i]].concat([i])
            } else {
                this[word[i]] = [i]
            }
        }
    }
    mapLetters() {
        return this
    }
}
const word1 = new MapLetters("dodo")
console.log(word1.mapLetters())
const word2 = new MapLetters("froggy")
console.log(word2.mapLetters())
const word3 = new MapLetters("grapes")
console.log(word3.mapLetters())
//???
String.prototype.mapLetters = MapLetters
function MapLetters(word) {
    for (let i = 0; i < word.length; i++) {
        if (this.hasOwnProperty(word[i])) {
            this.word[i] = this.word[i].concat(i)
        } else {
            this.word[i] = [i]
        }
    } return this
}
const word1 = "dodo"
const word2 = "froggy"
const word3 = "grapes"
console.log(word1.mapLetters())
console.log(word2.mapLetters())
console.log(word3.mapLetters())
///3//
function TV(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume
}
TV.prototype.increase = function () {
    if (this.volume < 100) {
        this.volume++
        console.log(this.volume)
    }
}
TV.prototype.decrease = function () {
    if (this.volume > 0) {
        this.volume--
        console.log(this.volume)
    }
}
TV.prototype.toSetTheChannel = function (num) {
    if (num > 0 && num < 50) {
        this.channel = num
        console.log(this.brand + " at channel " + this.channel + ",volume " + this.volume)
    } else {
        console.log(this.brand + " at channel " + this.channel + ",volume " + this.volume)
    }
}
TV.prototype.reset = function () {
    this.channel = 1,
        this.volume = 50
    console.log("channel is " + this.channel + " and volume is " + this.volume)
}
const tv = new TV("Panasonic")
tv.increase()
tv.decrease()
tv.decrease()
tv.toSetTheChannel(18)
tv.toSetTheChannel(70)
tv.reset()
//4.//
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    getC() {
        console.log((2 * this.radius * Math.PI).toFixed(2))
    }
    getA() {
        console.log((Math.PI * this.radius ^ 2).toFixed(2))
    }
    diameter() {
        console.log(Math.pow(this.radius, 2))
    }
}
const circle = new Circle(7)
console.log(circle.radius)
circle.diameter()
circle.getC()
circle.getA()
//5//kisat e sa
function ItemOfMenu(name, type, price) {
    return [this.name = name, this.type = type, this.price = price]
}
const orangeJuice = new ItemOfMenu("orange juice", "drink", 700)
const lemonade = new ItemOfMenu("lemonade", "drink", 100)
const cranberryJuice = new ItemOfMenu("cranberry juice", "drink", 600)
const pinappleJuice = new ItemOfMenu("pinapple juice", "drink", 700)
const lemonIcedTea = new ItemOfMenu("lemon iced tea", "drink", 400)
const vanillaChaiLatte = new ItemOfMenu("vanilla chai latte", "drink", 1000)
const hotChocolate = new ItemOfMenu("hot chocolate", "drink", 500)
const icedCoffee = new ItemOfMenu("iced coffee", "drink", 200)
const tunaSendwich = new ItemOfMenu("tuna sendwich", "food", 900)
const hamAndCheeseSendwich = new ItemOfMenu("ham and cheese sendwich", "food", 650)
const bacon = new ItemOfMenu("bacon", "food", 4000)
function Menu() {
    var cank = { ...arguments }
    return cank
}
function CoffeeShop(nameOfShop, menu, orders) {
    this.nameOfShop = nameOfShop;
    this.menu = new Menu()
    this.orders = []
}
CoffeeShop.prototype.addOrder = function (nameItem) {
    if (this.name === nameItem) {
        this.orders.push(nameItem)
        return "Order added!"
    } else {
        return 'This item is currently unavailable'
    }
}
CoffeeShop.prototype.fulFillOrder = function (nameItem) {
    if (this.orders.length !== 0) {
        return 'The {nameItem} is ready!'
    } else {
        return "All orders have been fulfilled!"
    }
}
CoffeeShop.prototype.listOrders = function () {
    return this.orders
}
CoffeeShop.prototype.dueAmount = function () {