const helperFunction = (linkedList, current, previous) => {
    // base case
    if (current.next === null) {
        linkedList.head = current;
        current.next = previous;
        return;
    }
    next = current.next;
    current.next = previous;

    // recursive case
    helperFunction(linkedList, next, current);
}

const reverse = linkedList => {
    if (linkedList.head === null) {
        return;
    }

    helperFunction(linkedList, linkedList.head, null);
}

// Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendNode (newData) {
        let newNode = new Node(newData);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let last = this.head;
        while (last.next != null) {
            last = last.next;
        }
        last.next = newNode;
    }

    printList() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const list = new LinkedList();
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
list.appendNode(8);
list.printList();

reverse(list);
console.log("\nReversed:");
list.printList();