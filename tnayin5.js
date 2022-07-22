///task1
class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    fullname() {
        return this.firstName + " " + this.lastName
    }
    initials() {
        return this.firstName[0] + " . " + this.lastName[0]
    }
}
let name = new Name("Lusine", "Minasyan")
console.log(name.fullname())
console.log(name.initials())
//task 2
class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize
        this.page = this.items.slice(0, pageSize)
    }
    getVisibleItems() {
        return this.page
    }
    prevPage() {
        if (this.items.indexOf(this.page[0]) + 1 > this.pageSize) {
            this.page = this.items.slice(this.items.indexOf(this.page[0]) - this.pageSize, this.items.indexOf(this.page[0]))
        }
    }
    nextPage() {
        if (this.items.indexOf(this.page[0]) + this.pageSize < this.items.length) {
            this.page = this.items.slice(this.items.indexOf(this.page[0]) + this.pageSize, this.items.indexOf(this.page[0]) + 2 * this.pageSize)
        }
    }
    firstPage() {
        this.page = this.items.slice(0, this.pageSize)
    }
    lastPage() {
        this.page = this.items.slice(-(this.items.length % this.pageSize))
    }
    goToPage(num) {
        this.page = this.items.slice(num * this.pageSize, (num + 1) * this.pageSize)
    }
}
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4)
console.log(p.getVisibleItems())
p.nextPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.lastPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.goToPage(1)
console.log(p.getVisibleItems())
p.firstPage();
console.log(p.getVisibleItems());
//3

class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 0
    }
    sound() {
        this.energy = this.energy - 3
    }
    eat(food) {
        this.energy = this.energy + 5
    }
    sleep() {
        this.energy = this.energy + 10
    }
}
class Food {
    constructor(name) {
        this.name = name
    }
}
class Tiger extends Animal {
    constructor(name) {
        super(name)
    }
    sleep() {
        this.energy = this.energy + 5
    }
    eat(food) {
        if (food.name = "grain") {
            console.log("I can’t eat that")
        } else {
            this.energy = this.energy + 5
        }
    }
}
class Monkey extends Animal {
    constructor(name) {
        super(name)
    }
    play() {
        if (this.energy < 0) {
            console.log("I’m too tired")
        } else {
            console.log("Oooo Oooo")
            this.energy = this.energy - 8
        }
    }
    eat() {
        this.energy = this.energy + 2
    }
    sound() {
        this.energy = this.energy - 4
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name)
    }
}
class Fish extends Food {
    constructor(name) {
        super(name)
    }
}
class Grain extends Food {
    constructor(name) {
        super(name)
    }
}
class Meat extends Food {
    constructor(name) {
        super(name)
    }
}
class Jungle {
    constructor(tiger, monkey, snake) {
        this.tiger = tiger;
        this.monkey = monkey;
        this.snake = snake
    }
    soundOff() {
        this.tiger.sound();
        this.monkey.sound();
        this.snake.sound();
        console.log(`${this.tiger.energy} + tiger energy; ${this.monkey.energy} monkey energy; ${this.snake.energy} snake energy `)
    }
}
const t1 = new Tiger("tiger");
const m1 = new Monkey("monkey");
const s1 = new Snake("snake")
const jungle = new Jungle("tiger", "meat", "snake")
const f1 = new Fish("fish")
const g1 = new Grain("grain")
const meat1 = new Meat('meat')