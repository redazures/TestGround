document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

var isValid = function(s) {
    let key ={"(":0,"[":0,"{":0}
    let queue = []
    for(let i=0;i<s.length;i++){
        console.log(key[s[i]],s[i   ],queue[0])

        if(s[i]==="("||s[i]==="["||s[i]==="{") {
            key[s[i]]++
            queue.push(s[i])
        }
        if(s[i]===")" && queue[0]==="(") {
            key["("]--
            queue.shift()
            console.log("hit")
        }
        if(s[i]==="}" && queue[0]==="{") {
            key["{"]--
            queue.shift()
            console.log("hit")
        }
        // console.log(s[i]==="]",queue[0]==="[")
        if(s[i]==="]" && queue[0]==="[") {
            key["["]--
            queue.shift()
            console.log("hit")
        }
        console.log(key,queue)
    }
    for (var k in key){
        if (key[k]>0) return false
        console.log(queue.length)
    }
    return true
};

console.log(isValid("([])"))