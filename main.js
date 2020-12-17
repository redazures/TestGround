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
}

let gunit=new Graph()
gunit.addVertex("Jimbo")
gunit.addVertex("Iroh")
gunit.addVertex("Vinnie")
gunit.addEdge("Jimbo","Iroh")
console.log(gunit)