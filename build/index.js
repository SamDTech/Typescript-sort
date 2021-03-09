"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([3, 0, -1, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('string');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection);
// const linkedList = new LinkedList()
// linkedList.add(-50)
// linkedList.add(4)
// linkedList.add(43)
// linkedList.add(8)
// const sorter = new Sorter(linkedList)
// sorter.sort()
