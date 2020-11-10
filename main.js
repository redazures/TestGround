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

var longestCommonPrefix = function(strs) {
  
    for(let i = 0;i<strs[0].length;i++){
      console.log(strs[0][i]!==strs[1][i],strs[0][i]!==strs[2][i],i,strs[1],i)
      if(strs[0][i]===strs[1][i] && strs[0][i]===strs[2][i]){
        console.log("loop")
        continue
        // console.log(strs[0][i]!==strs[1][i],strs[0][i]!==strs[2][i],i,strs[1],i)
      }
      else {
        return strs[0].slice(0,i) 
      }
      
    } 
};

// strs = ["flower","flow","flight"]
strs = ["dog","doog","doooog"]
console.log(longestCommonPrefix (strs))