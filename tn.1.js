homework 1
/*1//CarConstructor creates cars but what if someone decides to call it without new keyword,
write a logic inside the CarConstructor function so it checks if the CarConstructor is
called without new keyword it logs "please call me with new keyword" if not it
creates a car*/
function CarConstructor(year, model) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (year) === "number" && typeof (model) === "string") {
                let result = {}
                result.year = year;
                result.model = model;
                resolve(result)
            } else {
                reject("please call me with new keyword")
            }
        }, 100)
    })
}
console.log(CarConstructor(2015, "bmw")
    .then(r => { console.log(r) })
    .catch(err => {
        console.log(err)
    }))
/* 2//  Create 3 function decorators:
    1. loggerDecorator (should output the function name and the date when it is called)
    2. cachingDecorator (should cache the results of the functions which are called
    with numbers as arguments)
     3rd decorator you have to come up with yourself :) */
// 1 
function loggerDecorator(fn) {
    let date
    function smth(...args) {
        date = Date.now()
        return fn(...args)
    }
    smth.getInfo = function () {
        console.log(date, fn.name)
    }
    return smth
}
function minus(a, b) {
    return (a - b);
}
minus = loggerDecorator(minus);
let a = minus(1, 2);
console.log(a)
console.log(minus.getInfo())
let b = minus(13, 4);
console.log(b)
console.log(minus.getInfo())
// 2
function cachingDecorator(fn) {
    let results = []
    function smth(...args) {
        if (args.every(el => typeof el == "number")) {
            results.push(fn(...args))//???
        }
        return fn(...args)
    }
    smth.getAllResults = function () {
        return results
    }
    return smth
}
function f(a, b) {
    return (a + b);
}
let a = f(1, 7);
f = cachingDecorator(f)
console.log(a)
console.log(f.getAllResults())
    // 3 get count arguments
function decorator3(fn) {
    let countArg

    function smth(...args) {
        countArg = args.length
        return fn(...args)
    }
    smth.getCount = function () {
        return countArg
    }
    return smth
}
function f(a, b) {
    return (a * b);
}
f = decorator3(f);

let a = f(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(a)
console.log(f.getCount())

/*3The following code does not work. Тurn it into working code */
const flights = {
    flights: [],
    priorityFlights: [],
    scheduleFlight(flight) {
        this.flights.push(flight);
        return this.flights
    },
    removeFlight(flight) {
        this.flights = this.flights.filter(flightFilter);
        function flightFilter(f) {
            if (flights.flights.includes(f)) {
                let a = flights.flights.indexOf(f)
                return flights.flights.splice(a, 1)
            }
        } return this.flights
    },
    makePriorityFlight(flight) {
        this.priorityFlights.push(flight);
        return this.priorityFlights
    }
}
console.log(flights.scheduleFlight('1'))
console.log(flights.scheduleFlight('2'))
console.log(flights.makePriorityFlight('3'))
console.log(flights.removeFlight('1'))
console.log(flights.flights)
/* 4 Abstract classes are base classes from which other classes may be derived. In other
words, you can’t create an instance with that class, you can only extend from it.
Create a class, which will throw an error if you try to create an instance with it, but you can
extend from it*/
function AbstractClass() {
    this.name = "abstractclass";
    if (this.constructor === AbstractClass) {
        throw new Error(" Instance of Abstract class cannot be instantiated");
    }
}
AbstractClass.prototype.display = function () {
    return "Class name is: " + this.name;
}
function Class1(fullName) {
    this.name = fullName;
}
Class1.prototype = Object.create(AbstractClass.prototype);
let classs = new Class1("java script");
console.log(classs.display())
let abstract = new AbstractClass()
/* 5.1 Implement the described class hierarchy: the Character class is the parent class for all
the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
Zombie inherit from it, setting their own characteristics.
1.  Properties that instances of the Character class should have:
name - name
type - type
health - standard of living
level - character level
attack - attack
defense - protection
2. The class constructor must meet the following requirements:
name - string, min - 2 characters, max - 10
type - one of the types (string): Bowman, Swordsman, Magician, Daemon,
Undead, Zombie
If incorrect values   are passed, an error should be thrown
throw new Error(...)
3. Your function should automatically set the following fields:
health: 100
level: 1
Attack / Defense:
● Bowman: 25/25
● Swordsman: 40/10
● Magician: 10/40
● Undead: 25/25
● Zombie: 40/10
● Daemon: 10/40 
///////5.2 Implement the levelUp method in the Character class, which works like this:
● Raises the level field by 1
● Increases attack and defense by 20%
● Sets health to 100
The method should work only if the life indicator is not equal to 0. Otherwise, an error is
generated (you cannot increase the level of the deceased).
Implement the damage(points) method in the Character class, which changes the
internal state of the object (points is the damage done to the character). The
damage(points) method does not return anything and calculates the final change in the
character's health (health) according to the formula:
health -= points * (1 - defense / 100),
given that the value of health >= 0. */*/
class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        if (typeof name != "string") {
            throw new Error("name must be string")
        }
        if (1 > name.length || name.length > 11) {
            throw new Error("name must be contain [2,10] letters")
        }
        let arr = ["Bowman", "Swordsman", "Magician", "Daemon",
            "Undead", "Zombie"]
        if (!arr.includes(type){
         throw new Error("value must be one of this-Bowman, Swordsman, Magician, Daemon,Undead, Zombie")
        } */
    }
    setFields() {
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        if (this.level > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2
        } else {
            console.error("you cannot increase the level of the deceased")
        }
    }
    damage(point) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}
class Bowman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        super.attack = 25;
        super.defence = 25
    }
}
class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        this.attack = 40;
        this.defence = 10
    }
}
class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        this.attack = 10;
        this.defence = 40
    }
}
class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        this.attack = 10;
        this.defence = 40
    }
}
class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        this.attack = 25;
        this.defence = 25
    }
}
class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
    }
    setFields() {
        this.attack = 40;
        this.defence = 10
    }
}
let bowman = new Bowman("bowman", "Bowman", 4, 5, 6, 7)
console.log(bowman)
bowman.levelUp()
console.log(bowman)
let zombie=new Zombie(5)
//console.log(zombie)
//let undied=new Undead("a","Undead",4,5,6)
//console.log(undead
//let daemon=new Daemon("daemon","Daemon",4,5,6)
//console.log(daemon.setFields())
 /* ays exanakov chhaskaca inchu,chi linum kes@*/
class Character {
name=null
type=null
health=null
level=null
attack=null
defence=null
constructor(){
return new Proxy(this,{
get:(target,prop)=>{
return target[prop]
},
set:(target,prop,value)=>{
switch(prop){
case "name":
if(typeof value=="string"&& 1<value.length<11)
target[prop]=value
else
throw new Error("name must be string and contain [2,10] letters")
break;
    case "type":
     let arr = ["Bowman", "Swordsman", "Magician", "Daemon",
            "Undead", "Zombie"]
        if (arr.includes(value)
target[prop]=value
else
throw new Error("value must be one of this-Bowman, Swordsman, Magician, Daemon,Undead, Zombie")
break;
case "health":
target[prop]=value
break;
case "level":
target[prop]=value
break;
case"attack":
target[prop]=value
break;
case "defence":
target[prop]=value
break;
default:
throw new Error("${prop}doesn't exist")
}
 }
})
}
   setFields (){
      this.health=100;
      this.level=1;
    }
    levelUp() {
        if (this.level > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2
        } else {
            console.error("you cannot increase the level of the deceased")
        }
    }
    damage(point) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}
class Bowman extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=25;
super.defence=25
}
}
class Swordsman extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=40;
super.defence=10
}
}
class Magician extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=10;
super.defence=40
}
}
class Daemon extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=10;
super.defence=40
}
}
class Undead extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=25;
super.defence=25
}
}
class Zombie extends Character{
constructor(name,type,health,level,attack,defence){
super(name,type,health,level,attack,defence)
}
setFields() {
super.attack=40;
super.defence=10
}
}
let zombie=new Zombie(5)
console.log(zombie.setFields())
console.log(zombie)
/* 6 Let's imagine that we have the following classes
● City
● Building
● Hospital
● PoliceDepartment
● Car
● PoliceCar
● AmbulanceCar
Please decide on the inheritance hierarchy.
You have to decide which class will be a parent class and which should
be a child class by correctly extending classes from each other.
Example:
PoliceCar extends Car {...}
Also please implement the following conditions.
Condition 1.
The City has many buildings. It may be an array property of the City class named
buildings. It can include different Objects of the Building type
Example:
const nairiHospital = new Hospital();
...
const erebuniHospital = new Hospital();
...
const centralPoliceDepartment = new PoliceDepartment()
city.buildings = [nairiHospital, erebuniHospital,
centralPoliceDepartment]
Condition 2.
Is similar to Condition 1. Buildings can have many cars.
For example, a Hospital may have 10 AmbulanceCars or a police department may
have police cars
      */class City {
    constructor() {
        this.cars = [];
        this.buildings = [];
    }
    show() {
        console.log("cars  ", this.cars);
        console.log("buildings  ", this.buildings);
    }
    add(something) {
        if (something.form === "Car") {
            this.cars.push(something);
        } else if (something.form === "Building") {
            this.buildings.push(something);
        }
    }
}
class Building {
    constructor(name) {
        this.form = "Building";
        this.car = [];
        this.name = name
    }
}
class Car {
    constructor() {
        this.form = "Car"
    }
}
class Hospital extends Building {
    constructor(name) {
        super(name);
    } push(CAR) {
        if (CAR.type == "ambulanceCar") {
            this.car.push(CAR)
        }
    }
}
class PoliceDepartment extends Building {
    constructor(name) {
        super(name);
    } push(CAR) {
        if (CAR.type == "policeCar") {
            this.car.push(CAR)
        }
    }
}
class PoliceCar extends Car {
    constructor() {
        super()
        this.type = "policeCar"
    }
}
class AmbulanceCar extends Car {
    constructor() {
        super()
        this.type = "ambulanceCar"
    }
}
const city = new City();
const erebuniHospital = new Hospital("erebunihospital");
const centralPoliceDepartment = new PoliceDepartment("centralpolicedepartment");
city.add(erebuniHospital);
city.add(centralPoliceDepartment);
console.log(city.buildings)
const ambulanceCar = new AmbulanceCar();
const ambulanceCar1 = new AmbulanceCar();
const policeCar = new PoliceCar();
city.add(ambulanceCar);
city.add(policeCar);
console.log(city.show());
erebuniHospital.push(ambulanceCar);
erebuniHospital.push(ambulanceCar1);
console.log(erebuniHospital);
console.log(policeCar)


/* 7 Write a function which returns a Promise object that is resolved with the string 'Hooray!!!
She said "Yes"!', if true is passed, resolved with the string 'Oh no, she said
"No".' if false is passed, and rejected with an error 'Wrong parameter is
passed! Ask her again.', if the passed value type is not boolean. */
function foo(boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof boolean == "boolean") {
                resolve(boolean)
            } else {
                reject("'Wrong parameter is passed! Ask her again.")
            }
        }, 500)
    })
}
foo(15) //foo(true)
    .then(r => {
        if (r == true) {
            console.log("Hooray!!! She said 'Yes!'")
        } else {
            console.log("Oh no, she said'No'.")
        }
    })
    .catch(err => {
        console.log(err)
    })
/* 8 First research some info about fetch API. After it write a program to fetch the posts data
from the following URL https://jsonplaceholder.typicode.com/users, and show it to the
document */
let url = " https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(r => r.json())
    .then(r => console.log(r))
/* 9  Complete all levels of this game :)
https://flexboxfroggy.com/ */
1   justify - content: flex - end
2  justify - content: center;
3  justify - content: space - around;
4  justify - content: space - between;
5  align - items: flex - end;
6  justify - content: center; align - items: center;
7  align - items: flex - end;
justify - content: space - around;
8  flex - direction: row - reverse;
9  flex - direction: column;
10  flex - direction: row - reverse;
justify - content: flex - end;
11  align - items: flex - start;
justify - content: flex - end;
flex - direction: column;
12  justify - content: space - between;
13  align - items: flex - end;
flex - direction: row - reverse;
justify - content: center;
14  order: 1;
15  order: -3;
16  align - self: flex - end;
17  align - self: flex - end;
order: 2;
18  flex - wrap: wrap;
19  flex - direction: column;
flex - wrap: wrap;
20  flex - direction: column;
flex - wrap: wrap;
21  align - content: flex - start;
22  align - content: flex - end;
23  flex - direction: column - reverse;
align - content: center;
24  flex - direction: column - reverse;
flex - wrap: wrap - reverse;
align - items: flex - start;
align - content: space - between;
justify - content: center;
