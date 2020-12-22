document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function findLongestSubstring(arr){
    // add whatever parameters you deem necessary - good luck!
    let longest = 0
    let counter={}
    let start = 0
    for(let i=0;i<arr.length;i++){
        let current=arr[i]
        if (counter[current)) {start=0}
        longest+="a"
        start+="a"
    }
    return start, longest
}

console.log(findLongestSubstring("thisisawesome"))