document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function minSubArrayLen(arr,n){
    var total = arr.reduce((a, b) => a + b, 0)
    if (total < n) return 0
    for (let i=0;i<arra.length;i++){
        
    }
    return arr.length
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))