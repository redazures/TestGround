function maxSubarraySum(arr,tar){
// add whatever parameters you deem necessary - good luck!
if (tar>arr.length) return null
let sum = 0
for(let i =0;i<tar;i++){
sum+=arr[i]
}

    let temp= sum
    for(let i =0;i<arr.length-tar;i++){
        console.log(temp,i,tar+i)
        temp-=arr[i]
        temp+=arr[tar+i]
        if (temp>sum)sum=temp
    }
    return sum

}

console.log(maxSubarraySum([100,200,300,400],2))
