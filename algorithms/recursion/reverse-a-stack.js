const insertAtBottom = (stack, item) => {
    if (stack.isEmpty() === true) {
        stack.push(item);
    } else {
        let temp = stack.pop();
        insertAtBottom(stack, item);
        stack.push(temp);
    }
}

const reverse = stack => {
    if (stack.isEmpty() === false) {
        let temp = stack.pop();
        reverse(stack);
        insertAtBottom(stack, temp);
    }
}

class Stack {
    constructor() {
        this.myStack = [];
    }

    push(newData) {
        this.myStack.unshift(newData);
    }

    isEmpty() {
        if (this.myStack.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    pop() {
        if (this.isEmpty() === false) {
            let temp = this.myStack[0];
            this.myStack = this.myStack.slice(1);
            return temp;
        } else {
            throw new Error("End of Stack reached");
        }
    }

    getStack() {
        return this.myStack;
    }
}

myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(5);
myStack.push(8);

console.log("Original Stack: ");
console.log(myStack.getStack());

reverse(myStack);

console.log("Reversed Stack: ");
console.log(myStack.getStack());