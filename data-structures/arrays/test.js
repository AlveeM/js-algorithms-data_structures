const strings = ['a', 'b', 'c', 'd'];

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n/2) => O(n) (worst case)

console.log(strings);