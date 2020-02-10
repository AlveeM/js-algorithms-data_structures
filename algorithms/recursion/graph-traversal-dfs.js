const helperFunction = (myGraph, currentNode, visited) => {
    if (visited[currentNode] === false) {
        visited[currentNode] = true;
        console.log(currentNode);
    }

    if (myGraph.graph.has(currentNode) === true) {
        let currentAdjacencyList = myGraph.graph.get(currentNode);
        for (let i = 0; i < currentAdjacencyList.length; i++) {
            let temp = currentAdjacencyList[i];
            if (visited[temp] === false) {
                helperFunction(myGraph, temp, visited);
            }
        }
    }
}

const DFS = myGraph => {
    let visited = new Array(myGraph.vertices).fill(false);
    helperFunction(myGraph, 0, visited);
}

class Graph {
    constructor(vertices = 0) {
        this.graph = new Map();
        this.vertices = vertices;
    }

    addEdge(u, v) {
        if (this.graph.has(u)) {
            this.graph.get(u).push(v);
        } else {
            this.graph.set(u, []);
            this.graph.get(u).push(v);
        }
    }
}

var myGraph = new Graph(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(3, 5);

`      0
       |
       1
      /  \
     2    3
     | /  |
     4    5
`

console.log("Graph Traversal:");
DFS(myGraph);