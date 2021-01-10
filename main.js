document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

// var convert = function(s, numRows) {
//     for(let i =0;i<numRows;i++){
//         let count = numRows+1
//         let times = s.length
//     }
// };

// Input: s = "PAYPALISHIRING", numRows = 3
// Output = "PAHNAPLSIIGYIR"
// convert("PAYPALISHIRING",)

function solve(s0, s1) {
    let key = {}
    let num = 0
    let count = 0
    for(let i=0;i<s0.length;i++){
        key[s0[i]] ? key[s0[i]]++ : key[s0[i]] =1
        count++
    }

    for(let j=0;j<s1.length-s0.length+1;j++){
        var test = Object.assign({},key)
        var test2 = count
        // console.log(test2)
        for(let k=0;k<s0.length;k++){
            if (test[s1[j+k]]===undefined){
                break
            } 
            if (test[s1[j+k]]){
                test2--
                test[s1[j+k]]--
            } 
            if (test[s1[j+k]]<0){
                break
            } 
            console.log(test2,num)
            if(k===s0.length-1 && test2===0) num++
        }
    }
    return num
}

console.log(solve("abc","bcabxabc"))

//not sure if this folder is even needed if I am using leetcode to keep tract of my answers