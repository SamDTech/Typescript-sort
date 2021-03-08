import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";



const numbersCollection = new NumbersCollection([3, 0, -1, 2])
const sorter = new Sorter(numbersCollection);

sorter.sort()


console.log(numbersCollection.data);
