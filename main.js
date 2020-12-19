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
gunit.addVertex("Jimbo")
gunit.addVertex("Iroh")
gunit.addVertex("Vinnie")
gunit.addVertex("Kevin")
gunit.addVertex("Victor")
gunit.addEdge("Jimbo","Iroh")
gunit.addEdge("Jimbo","Vinnie")
gunit.addEdge("Iroh","Vinnie")
gunit.addEdge("Kevin","Victor")
gunit.deleteVertex("Jimbo")
console.log(gunit) //testing if this works