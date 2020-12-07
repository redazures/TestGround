/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome=function(string){
    let temp =""
    for(let i=string.length-1;i>=0;i--){
        temp=temp + string[i]
    }
    return string===temp
}

var longestPalindrome = function(s) {
    if(s.length===0 || s.length===1) return s
    let string=s[0]
    for (let j=0;j<s.length;j++){
        let actual=s[j]
        for (let i=j+1;i<s.length;i++){
            actual=actual+s[i]
            if (isPalindrome(actual) && actual.length>string.length){
                string=actual
            }
        }
    }

    return string
};