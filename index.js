document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    add(value){
        var newNode = new Node
        if(this.root===null) {
            this.root=newNode
            return newNode
        }
    }
}

var tree = new BinarySearchTree()
tree.add(10)
tree.add(5)
tree.add(13)
tree.add(7)
tree.add(11)
tree.add(2)
tree.add(16)
tree.add(23)
console.log(tree)