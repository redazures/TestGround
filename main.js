document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function bubbleSort(arr){
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    }
    for(var i = arr.length;i>0;i--){
        for(var j = 0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}

function bubbleSort2(arr){
    const swap = (arr,switch1,switch2)=>{
        [arr[switch1],arr[switch2]] = [arr[switch2],arr[switch1]]
    }

    for (var i=arr.length;i>0;i--){
        for(var j = 0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}

const test= [3,6,1,9,50,44,25]

console.log(bubbleSort2(test))