document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

var findMedianSortedArrays = function(nums1, nums2) {
    let total = (nums1.length+nums2.length)
    let length = Math.ceil(total/2)
    total%2===0 ? length++ : length
    let ara = []
    let second = 0
    let first = 0 
    for(let i =0;i<length;i++){
        console.log(nums1[first],nums2[second],nums1[first]<=nums2[second],!nums2[second], first,second)
        if(nums1[first]<=nums2[second] || !nums2[second] && nums2[second] !== 0 ){
            ara.push(nums1[first])
            first++
            console.log("me")
        }else if(nums1[first]>nums2[second] || !nums1[first]){
            ara.push(nums2[second])
            second++
        }
        console.log(ara)   
    }
    return total%2===0 ? ((ara[ara.length-2]+ara[ara.length-1])/2) : ara[ara.length-1]
};

console.log(findMedianSortedArrays([0,0],[0,0]))