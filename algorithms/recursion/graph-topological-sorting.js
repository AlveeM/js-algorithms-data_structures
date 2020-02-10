const helperFunction = (myGraph, currentNode, visited, result) => {
    visited[currentNode] = true;

    if (myGraph.graph.has(currentNode) === true) {
        let currentAdjacencyList = myGraph.graph.get(currentNode);
        for (let i = 0; i < currentAdjacencyList.length; i++) {
            let temp = currentAdjacencyList[i];
            if (visited[temp] === false) {
                helperFunction(myGraph, temp, visited, result);
            }
        }
    }
    result.unshift(currentNode);
}

const topologicalSort = myGraph => {
    let visited = new Array(myGraph.vertices).fill(false);
    let result = [];

    for (let currentNode = 0; currentNode < myGraph.vertices; currentNode++) {
        if (visited[currentNode] === false) {
            helperFunction(myGraph, currentNode, visited, result);
        }
    }
    return result;
}

class Graph {
    constructor(vertices = 0) {
      this.graph = new Map();
      this.vertices = vertices;
    }

    addEdge(u, v) {
      if(this.graph.has(u))
      {
        this.graph.get(u).push(v);
      } else
      {
        this.graph.set(u, []);
        this.graph.get(u).push(v);
      }
    }
}

myGraph = new Graph(5)
myGraph.addEdge(0, 1)
myGraph.addEdge(0, 3)
myGraph.addEdge(1, 2)
myGraph.addEdge(2, 3)
myGraph.addEdge(2, 4)
myGraph.addEdge(3, 4)

console.log("Topological Sort: " + topologicalSort(myGraph))