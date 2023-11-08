import { LinkedList } from "./singly-linked-list/list.js";

// Create a new linked list
const linkedList = new LinkedList();

// Test the append method
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.toString()); // Expected: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Test the prepend method
linkedList.prepend(0);

console.log(linkedList.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Test the size method
console.log(linkedList.size()); // Expected: 4

// Test the getHead method
console.log(linkedList.getHead()); // Expected: Node { value: 0, next: Node { value: 1, next: ... } }

// Test the getTail method
console.log(linkedList.getTail()); // Expected: Node { value: 3, next: null }

// Test the at method
console.log(linkedList.at(2)); // Expected: Node { value: 2, next: Node { value: 3, next: ... } }

// Test the pop method
linkedList.pop();

console.log(linkedList.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 2 ) -> null

// Test the contains method
console.log(linkedList.contains(2)); // Expected: true
console.log(linkedList.contains(4)); // Expected: false

// Test the find method
console.log(linkedList.find(1)); // Expected: 1 (the index of the value)

// Test the insertAt method
linkedList.insertAt(2, 5);

console.log(linkedList.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 5 ) -> ( 2 ) -> null

// Test the removeAt method
linkedList.removeAt(1);

console.log(linkedList.toString()); // Expected: ( 0 ) -> ( 5 ) -> ( 2 ) -> null
