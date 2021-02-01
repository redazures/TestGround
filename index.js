document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    add(val){
        var newNode = new Node(val)
        if(this.root===null) {
            this.root=newNode
            return this
        }
        var current = this.root
        while(true){
            if(val===current.val) return undefined
            if(val<current.val){
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