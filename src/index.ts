import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([3, 0, -1, 2])
// const sorter = new Sorter(numbersCollection);

// sorter.sort()

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('string');

// const sorter = new Sorter(charactersCollection);

// sorter.sort();

// console.log(charactersCollection);

const linkedList = new LinkedList()

linkedList.add(-50)
linkedList.add(4)
linkedList.add(43)
linkedList.add(8)

const sorter = new Sorter(linkedList)

sorter.sort()