document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    add(value){
        var newNode = new Node(value)
        if(this.root===null){
            this.root=newNode
            return this
        }
        
        var current = this.root
        while(true){
            if(value===current.value)return undefined
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode
                    return this
                }
                current=current.left
            }else{
                if(current.right===null){
                    current.right=newNode
                    return this
                }
                current=current.right
            }
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

//just an update test new computer