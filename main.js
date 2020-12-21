document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function minSubArrayLen(arr,n){
    var total = arr.reduce((a, b) => a + b, 0)
    var totalRight=total
    if (total < n) return 0
    var right = arra.length-1
    for (let i=0;i<right;i++){
        totalRight-=arra[right]
        total-=arra[left]
    }
    return arr.length
}
//redo problem

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))