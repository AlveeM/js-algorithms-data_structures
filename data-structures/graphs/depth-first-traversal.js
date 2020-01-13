class Graph {
    constructor() {
      this.adjacencyList = {};
    }

    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
      return undefined;
    }

    removeVertex (vertex) {
      while(this.adjacencyList[vertex].length) {
        const adjacencyVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacencyVertex);
      }
      delete this.adjacencyList[vertex];
    }

    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }

    removeEdge (v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        vertex => vertex !== v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        vertex => vertex !== v1
      );
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }

            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        }) (start);

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

  }

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")