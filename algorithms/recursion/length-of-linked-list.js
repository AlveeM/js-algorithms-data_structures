const length = (linkedList, head) => {
    // base case
    if (head === null) {
        return 0;
    // recursive case
    } else {
        return 1 + length(linkedList, head.next);
    }

}

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

	appendNode(newData) {
		let newNode = new Node(newData);
		if (this.head == null) {
			this.head = newNode;
			return;
		}

		var last = this.head;
		while (last.next != null) {
			last = last.next;
		}
		last.next =  newNode;
    }

	printList() {
		let temp = this.head;
		while(temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}
}

let list = new LinkedList();
list.appendNode(2);
list.appendNode(5);
list.appendNode(6);
list.appendNode(1);
console.log(length(list, list.head));