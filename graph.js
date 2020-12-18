document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

class Graph {
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    addEdge(v1,v2){
        // console.log("addedge",v1,v2,this.adjacencyList[v1])
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(el=>el !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(el=>el !== v1)
    }
    deleteVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const removed = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,removed)
        }
        delete this.adjacencyList[vertex]
    }
}

let gunit=new Graph()
gunit.addVertex("a")
gunit.addVertex("b")
gunit.addVertex("c")
gunit.addVertex("d")
gunit.addVertex("e")
gunit.addVertex("f")
gunit.addEdge("a","b")
gunit.addEdge("a","c")
gunit.addEdge("b","d")
gunit.addEdge("c","e")
gunit.addEdge("d","e")
gunit.addEdge("d","f")
gunit.addEdge("e","f")

console.log(gunit)
//testing areas to try