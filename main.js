document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function minSubArrayLen(arr,n){
    var total = 0
    let start = 0
    let end = 0
    let length = Infinity
    while (start<arr.length){
        console.log(total, start, end, length)
        if (total<n && end<arr.length){
            total+=arr[end]
            end++
        }else if(total>=n){
            length=Math.min(length,end-start)
            total-=arr[start]
            start++
        }else{
            break
        }
    }
    return length ===Infinity ? 0 :length
}
//redo problem

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10,14],95))