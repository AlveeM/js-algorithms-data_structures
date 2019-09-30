// 10-->5-->16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5); // 10 --> 5
myLinkedList.append(16); // 10 --> 5 --> 16
myLinkedList.prepend(1); // 1 --> 10 --> 5 --> 16
myLinkedList.insert(2, 99); // 1 --> 10 --> 99 --> 5 --> 16
myLinkedList.remove(2); // 1 --> 10 --> 5 --> 16
console.log(myLinkedList.printList());