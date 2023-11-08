import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(value, null);
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      const firstNode = this.head;
      this.head = new Node(value, firstNode);
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    } else {
      let total = 1;
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
        total += 1;
      }

      return total;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  at(index) {
    if (index < 0 || this.head === null) {
      return null;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentIndex === index) {
          break;
        }
        currentNode = currentNode.next;
        currentIndex += 1;
      }

      return currentNode;
    }
  }

  pop() {
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = null;
    }
  }

  contains(value) {
    if (this.head === null) {
      return false;
    } else {
      let isFound = false;
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.value === value) {
          isFound = true;
          break;
        }
        currentNode = currentNode.next;
      }

      return isFound;
    }
  }

  find(value) {
    if (this.head === null) {
      return false;
    } else {
      let isFound = false;
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          isFound = true;
          break;
        }
        currentNode = currentNode.next;
        currentIndex += 1;
      }

      return isFound === true ? currentIndex : null;
    }
  }

  toString() {
    if (this.head === null) {
      return null;
    } else {
      let string = "";
      let currentNode = this.head;

      while (currentNode !== null) {
        string += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.next;
      }

      return string + "null";
    }
  }

  insertAt(index, value) {
    if (index < 0) {
      return "Error: Invalid index input";
    } else if (this.head === null) {
      return null;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      let previousNode = undefined;
      let nextNode = undefined;

      while (currentNode !== null) {
        if (currentIndex === index) {
          nextNode = currentNode.next;
          if (index === 0) {
            this.head = new Node(value, nextNode);
          } else {
            previousNode.next = new Node(value, nextNode);
          }
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex += 1;
        }
      }
    }
  }

  removeAt(index) {
    if (index < 0) {
      return "Error: Invalid index input";
    } else if (this.head === null) {
      return null;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      let previousNode = undefined;
      let nextNode = undefined;

      while (currentNode !== null) {
        if (currentIndex === index) {
          nextNode = currentNode.next;
          if (index === 0) {
            this.head = nextNode;
          } else {
            previousNode.next = nextNode;
          }
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex += 1;
        }
      }
    }
  }
}
