document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function averagePair(arr,ave){
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = arr.length-1
    while(start<end){
        let calc=(arr[start]+arr[end])/2
        if(calc===ave) return true
        else if (calc<ave) start++
        else end--
    }
    return false
  }
  //two piece work

  console.log(averagePair([1,3,3,5,6,7,10,12,19],8))