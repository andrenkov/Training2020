// import { capitalizeString } from './stringFunc.js';//or import the default use 'capitalizeString' without {}
// const cap = capitalizeString('hello');
// console.log(cap);

//or import everything

import * as capitalizeStrings from './stringFunc.js';
const cap = capitalizeStrings.capitalizeString('hello');
console.log(cap);


// console.log('Hello World (\'in console\')');

// const person = {
//     firstName:  'Vlad',
//     lastName: 'Andrenkov',
//     age: 55,
//     hobbies: ['cacti','fishing'],
//     address: {
//         street: '2075 Waterbridge',
//         city: 'Burlington',
//         province: 'ON'
//     }
// }
//     //console.log(person);
//     if (person.hasOwnProperty('address')){
//         console.log(person.address);
//     }
//     else {
//         console.log('Propert \'addresses\' not present');
//     }

// class catalogItem {
//     constructor(ItemName){
//         this._itemName = ItemName;
//         this._itemSpecies = 'NA';
//     }
//     //getter
//     get itemName (){
//         return this._itemName;
//     }
//     //setter
//     set itemName (updatedItemName){
//         this._itemName = updatedItemName;
//     }
// }
// const _item = new catalogItem('Gymno');
// console.log(_item.itemName);
// _item.itemName = 'gymno';
// console.log(_item);

// class Thermostate {
//     constructor(temp){
//         this._temp = 5/9 * (temp - 32);
//     }
//     get temperature(){
//         return this._temp;
//     }
//     set temperature(updatedTemp){
//         this._temp = updatedTemp;
//     }
//     //return Thermostate;
// }

// const thermos = new Thermostate(76);
// let temp = thermos.temperature;
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp);

    // const myCollection = [
    //     {
    //         id: 0,
    //         'name': 'Astrophytum asterias',
    //         'genus': 'Astrophytum',
    //         catalognumber: 123
    //     },
    //     {
    //         id: 1,
    //         'name': 'Parodia nivosa',
    //         'genus': 'Parodia',
    //         catalognumber: 456,
    //         synonyms: [
    //             'Notocactus',
    //             'Parodia',
    //             'Echiniocactus'
    //         ]
    //     }
    // ];

    // console.log(myCollection);
    // console.log(myCollection[1].synonyms);

    // var myCoolectionCopy = JSON.parse(JSON.stringify(myCollection));
    // function updateCollection(id, prop, value){
    //     if (value === ''){
    //         delete myCollection[id][prop];
    //     }
    //     else{
    //         if (prop === 'name'){
    //             myCollection[id][prop]  = myCollection[id][prop]  || [];
    //             myCollection[id][prop] .push(value);
    //         }
    //         else{
    //             myCollection[id][prop] = value;
    //         }
    //     }
    //     return myCollection;
    // }
    // //console.log(myCollection[1]['name']);

    // updateCollection(0, 'catalognumber', 987);
    // //updateCollection(1, 'catalognumber', '123');//insert
    // console.log(myCollection);

    // function lookupCactus (cNum, prop){
    //     for (var i = 0; i < myCollection.length; i++){
    //         if (myCollection[i].catalognumber === cNum){
    //             return myCollection[i][prop] || 'no such property';
    //         }
    //     }
    //     return 'No cactus found';
    // };

    // var data = lookupCactus(987, 'genus');
    // console.log(data);

    