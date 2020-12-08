document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function isSubsequence(first,second) {
    // good luck. Add any arguments you deem necessary.
    let l=0
    for(let i=0;i<second.length;i++){
        console.log(first[l],second[i])
        if(second[i]===first[l]){
            // console.log(first[l])
            if (l===first.length-1) return true
            l++
        }
    }
    return false
  }

//   console.log(isSubsequence('hello','hello world'))
  console.log(isSubsequence('sing','sting'))