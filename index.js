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

    find(val){
        if(this.root===null) return false
        var current = this.root,
        found = false
        while(current && !found){
            if(val<current.val){
                current=current.left
            } else if(val>current.val){
                current=current.right
            }else{
                found =true
            }
        }
        if(!found) return undefined
        return current
    }
    BFS(){
        var node = this.root,
        data=[],
        queue=[]
        queue.push(node)

        while(queue.length){
            // console.log(queue)
            node=queue.shift()
            data.push(node.val)
            console.log(data)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
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
console.log(tree.find(5))
console.log(tree)
console.log(tree.BFS())