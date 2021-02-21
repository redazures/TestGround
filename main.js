document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

class LRUCache {
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
        
        this.head = {}
        this.tail = {}
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key){
        if(this.map.has(key)){
            let c = this.map.get(key)
            c.prev.next=c.next
            c.next.prev=c.prev
            
            this.tail.prev.next=c
            c.prev=this.tail.prev
            c.next=this.tail
            this.tail.prev=c
            return c.value
        } else {
            return -1
        }
    }

    put(key,value){
        if(this.get(key) !== -1){ 
            this.tail.prev.value = value; 
          } else {
            if(this.map.size === this.capacity) { 
              this.map.delete(this.head.next.key); 
              this.head.next = this.head.next.next; 
              this.head.next.prev = this.head; 
            }
        
            let newNode = {
              value, 
              key
            }; 
            
            this.map.set(key, newNode); 
            this.tail.prev.next = newNode; 
            newNode.prev = this.tail.prev; 
            newNode.next = this.tail;
            this.tail.prev = newNode; 
        }
        return this.head
    }

}




const newCache = new LRUCache(5)
newCache.put(1,1)
newCache.put(2,2)
newCache.put(3,3)
newCache.put(4,4)
newCache.get(1,1)
newCache.put(5,5)
newCache.put(6,6)
newCache.get(1,1)
newCache.put(7,7)

console.log(newCache.put(8,8))

console.log("words")