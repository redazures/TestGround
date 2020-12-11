function binarySearch(arr,tar){
// add whatever parameters you deem necessary - good luck!
let start =0
let end = arr.length-1
let middle=Math.floor((start+end)/2)
while (arr[middle]!==tar && start<=end){
if(tar<arr[middle]){
end=middle-1
}else{
start=middle+1
}
middle=Math.floor((start+end)/2)
}

    if(arr[middle]===tar){
        return middle
    }

}
