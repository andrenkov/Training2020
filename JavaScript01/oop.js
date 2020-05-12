//#region OOP
// console.log('OOP testingperson1');
// //constraction funtion
// function Person (firstName, lastName, dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function () {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate object
// const d = new Date();
// const n = d.getTimezoneOffset();
// console.log(n);

// const person1 = new Person('vlad','andrenkov', '11/17/1964 10:00');
// const person2 = new Person('tatiana','andrenkova', '06/23/1964 10:00');
// console.log(person1, person2);

//#endregion

//#region Prototypes - prototype is itself an object instance
//constraction funtion
// function Person (firstName, lastName, dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// console.log('Prototype: ' + Person.prototype);
//add methods into the parent class (pro classes)
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName= function () {
//     return `${this.firstName} ${this.lastName}`;
// }

/* converted to a class
//constraction funtion
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    //add methods into the parent class
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
*/
//Instantiate object
// const person1 = new Person('vlad','andrenkov', '11/17/1964 10:00');
// const person2 = new Person('tatiana','andrenkova', '06/23/1964 10:00');
// console.log(person1, person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
//#endregion

//#region Classes
// class Person{
//     constructor (firstName, lastName, dob)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }    
// }

//Instantiate class
// const person1 = new Person('vlad','andrenkov', '11/17/1964 10:00');
// const person2 = new Person('tatiana','andrenkova', '06/23/1964 10:00');
// console.log(person1, person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());


// class cactusPerson extends Person {
//     constructor (firstName, lastName, dob, collectionsSize)
//     {
//         super(firstName, lastName, dob);
//         this.collectionsSize = collectionsSize;
//     }
// }

// collector = new cactusPerson('vlad','andrenkov', '11/17/1964 10:00', 345);
// console.log('collector');
// console.log(collector);
//#endregion