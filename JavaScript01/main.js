//#region vriables
// alert('Hello World');
// console.log('Hello World (in console)');
// console.error('error here');
// console.warn('warning here');

// let startage ;
// const addage = 10;

// startage = 45;
// console.log(startage);
// startage = startage + addage;
// console.log(startage);
//#endregion

//#region vriables and types
//string. Number, Boolean, null, undefined, Symbol
// const name = 'Vladimir';
// const age = 55;
// const rating = 3.62;
// const isCool = true;
// const x = null;
// const y = undefined;

// let z;//undefined

// console.log(typeof name);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log('z: ' + typeof z);//old patern
//#endregion

//#region Strings
//template String
//console.log(`My name is ${name}`);//back ticks insted of quites

// const s = 'Vladimir';
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.substring(0, 4));
//console.log(s.split(''));//chars

// const sentence = 'my fist js app';
// console.log(sentence.split(' '));
// const csv = '1, 2, 3, 4, 5, 6';
// console.log(csv.split(', '));
//#endregion

//#region  arrays

//const numbers = new Array(1,2,3,4,5,6,7);
//console.log(numbers)

// const fruits = ['apples','peaches','plumps', 3.62, true];
// console.log(`Fruits is an array: ${Array.isArray(fruits)}`);
// console.log(fruits);
// console.log(fruits[1]);//peaches
// fruits[1] = 'pears';
// console.log(fruits[1]);//pears

// fruits.push('mangos');//adds to the end
// console.log(fruits[fruits.length - 1]);//mangos
// fruits.unshift('grapes');//adds to the start
// console.log(fruits[0]);//grapes
// fruits.pop();//takes the last one off the array
// console.log(fruits[fruits.length - 1]);//true
// console.log(fruits.indexOf('apples'));//1
//#endregion

//#region Objects
const person = {
    firstName:  'Vlad',
    lastName: 'Andrenkov',
    age: 55,
    hobbies: ['cacti','fishing'],
    address: {
        street: '2075 Waterbridge',
        city: 'Burlington',
        province: 'ON'
    }
}
    console.log(person);

    if (person.hasOwnProperty('address')){
        console.log(address);
    }

    
//     console.log(person.firstName, person.lastName);
//     console.log(person.hobbies[0]);

//     const {firstName, lastName} = person;
//     console.log(firstName);

//     person.email = 'vald@gmail.com';//add property
//     console.log(person.email);
   
    //array of objects
//     const todos = [
//         {
//             id: 1,
//             text: 'take out trash',
//             isCompleted: true
//         },
//         {
//             id: 2,
//             text: 'water plants',
//             isCompleted: false
//         }
//     ];
// console.log(todos);
//#endregion

//#region Json

    // const todos = [
    //     {
    //         id: 1,
    //         text: 'take out trash',
    //         isCompleted: true
    //     },
    //     {
    //         id: 2,
    //         text: 'water plants',
    //         isCompleted: false
    //     }
    // ];

    // const todoJson = JSON.stringify(todos);
    // console.log(todoJson);
//#endregion

//#region For loop
// for (let i = 0; i <= 10; i++)
// {
//     console.log(`For Loop: ${i}`);
// }
// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'water plants',
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: 'water garden',
//         isCompleted: true
//     }    
// ];
//  for (let i = 0; i < todos.length; i++)
//  {
//      console.log(`Todo: ${todos[i].text}`);
//  }

//  for(let item of todos)
//  {
//     console.log(`Todo: ${item.text}`);
//  }

// todos.forEach(
//     function(todo)
//     {
//         console.log(`Todo: ${todo.text}`);
//     }    
// );

// const todoText = todos.map(
//     function(todo)
//     {
//         return todo.text;
//     }    
// );
// console.log(todoText);

// const todoCompleted = todos.filter(
//     function(todo)
//     {
//         return todo.isCompleted === true;
//     }    
// );
// console.log(todoCompleted);

// const todoCompleted = todos.filter(
//     function(todo)
//     {
//         return todo.isCompleted === true;
//     }    
// ).map(function(todo)
// {
//     return todo.text
// })
// console.log(todoCompleted);
//#endregion

//#region While loop
// let i = 0;
// while(i < 5)
// {
//     console.log(`While Loop: ${i}`);
//     i++;
// }
//#endregion

