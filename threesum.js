document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

var threeSum1 = function(nums) {
    let diffAra ={}
    for(let i =0;i<nums.length;i++){
        diffAra[i]=[nums[i],0-nums[i],i]
    }
    
    let solutions = []
    for(let i =0; i<nums.length;i++){
        let target = diffAra[i][1]
        // console.log(target)
        for(let j =i+1; j<nums.length;j++){
            if (nums[i]+nums[j]===target){
                console.log([diffAra[i][0],nums[i],nums[j]])
                solutions.push([diffAra[i][0],nums[i],nums[j]])
                diffAra.splice(i,1)
                nums.splice(i,1)
                nums.splice(j,1)
                console.log(diffAra,nums,solutions)
            }
        }
    }
    return solutions
};

var threeSum2 = function(nums) {
    
    let solutions = []
    let seen={}
    for(let i =0; i<nums.length;i++){
        for(let j =i+1; j<nums.length;j++){
            for(let k =j+1; k<nums.length;k++){
                if (nums[i]+nums[j]+nums[k]===0){
                    const decoder= (nums[i]+100)*(nums[j]+100)*(code3= nums[k]+100)
                    console.log("seen",!seen[decoder],decoder)
                    if(!seen[decoder]){
                        seen[decoder] =true
                        solutions.push([nums[i],nums[j],nums[k]])
                    }
                    solutions.push([nums[i],nums[j],nums[k]])
                }
            }   
        }
    }
    // let newArray= new Set(solutions)
    // console.log(newArray)
    return solutions
};

var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let solutions = []
    
    for(let i =0; i<nums.length-2;i++){
        if(nums[i]!=nums[i-1]){
            let left =i+1
            let right=nums.length-1
            while(left<right){
                const sum = nums[i]+nums[left]+nums[right]
                if(sum===0){
                    solutions.push([nums[i],nums[left],nums[right]])
                    while(nums[left] == nums[left+1]) left++
                    while(nums[right] == nums[right+1]) right--
                    left++
                    right--
                }else if(sum<0){
                    left++
                }else if(sum>0){
                    right--
                }
            }
        }
    }
    
    return solutions
};
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))