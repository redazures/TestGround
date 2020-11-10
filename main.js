document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

var lengthOfLongestSubstring = function(s) {
    const process = (char)=>{
      console.log(char)
    }
    let res=""
    console.log(res.length)
    for (char in s){
      // place = s.length-char
      // cut = s.slice(char,s.length)
      cut = s.slice(0,char)
      console.log(cut.length, cut,s[char])
      // console.log(s[char])
    }
};

// s = "abcabcbb"

// lengthOfLongestSubstring(s)

var isPalindrome = function(x) {
  // if (x<0){return false}
  // if (x%10===0 && x!==0){return false}
  if (x === parseInt(x.toString().split('').reverse().join(''))){return true}else{
    return false
  }
};
let x = 105

console.log(isPalindrome(x))