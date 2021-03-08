"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
// const numbersCollection = new NumbersCollection([3, 0, -1, 2])
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('string');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
