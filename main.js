document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function solution(S) {
    checkValid = (S)=>{
        let key={}
        for(let i=0;i<S.length;i++){
            const letter = S[i]
            // console.log(letter)
            if(letter===letter.toLowerCase()){
                if(!key[letter] && key[letter.toUpperCase()]!==0)key[letter.toUpperCase()]=1
            }
            else if(letter===letter.toUpperCase()){
                key[letter.toUpperCase()]=0
                // console.log(key)
            }
        }
        for(let letter in key){
            if(key[letter]>0) return false
        }
        
        return true
    }

    for(let i =0;i<S.length;i++){
        console.log(S.substring(i,S.length))
        // checkValid(S.substring(i,s.length))
    }
    // return checkValid(S)
    //the ahove will check if the string is valid, 
    //we need to make smaller strings and see if they are valid, if string is valid, then return string. 

}

// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const days = ["Mon","Tues","Wed","Thu","Fri","Sat","Sun","Mon","Tues","Wed","Thu","Fri","Sat","Sun"]
//     const stub = K%7
//     for(let i=0;i<days.length-1;i++){
//         if(days[i]===S)return days[stub+i]
//     }
// }

console.log(solution("azABaabza"))
// solution("TacoCat")
// solution("AcZCbaBz")
// solution("abcdefghijklmnopqrstuvwxyz")