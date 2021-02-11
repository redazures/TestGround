document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function solution(S) {
    if(S.length<2)return -1

    checkBalance = (string)=>{
        let key={}
        for(let i=0;i<string.length;i++){
            const letter = string[i]
            if(letter===letter.toLowerCase()){
                if(!key[letter] && key[letter.toUpperCase()]!==0)key[letter.toUpperCase()]=1
                key[letter.toLowerCase()]=0
            }
            else if(letter===letter.toUpperCase()){
                if(!key[letter] && key[letter.toLowerCase()]!==0)key[letter.toLowerCase()]=1
                key[letter.toUpperCase()]=0
            }
        }
        
        for(let letter in key){
            if(key[letter]>0) return false
        }
        return true
    }

    let shortestLength=S.length+1, string =""
    
    for(let i =0;i<S.length-1;i++){
        for(let j=S.length;j>i;j--){
            const testString=S.substring(i,j)
            if (checkBalance(testString)){
                if(testString.length<shortestLength){
                    shortestLength = testString.length 
                    string=testString
                }
            }
        }
    }

    // return checkValid(S)
    //the ahove will check if the string is valid, 
    //we need to make smaller strings and see if they are valid, if string is valid, then return string. 
    return string ? string.length : -1

}

// function solution(S, K) {
//     const days = ["Mon","Tues","Wed","Thu","Fri","Sat","Sun","Mon","Tues","Wed","Thu","Fri","Sat","Sun"]
//     const stub = K%7
//     for(let i=0;i<days.length-1;i++){
//         if(days[i]===S)return days[stub+i]
//     }
// }

console.log(solution("aA"))
console.log(solution("azABaabza")) //5 
console.log(solution("TacoCat")) //-1 
console.log(solution("AcZCbaBz")) //8
console.log(solution("abcdefghijklmnopqrstuvwxyz")) //-1