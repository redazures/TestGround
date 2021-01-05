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
let prefix = ""
if (strs==null || strs.length==0 || strs[0]=="") {return ""}
for(let i = 0;i<strs[0].length;i++){
char=strs[0][i]
for(let j=1;j<strs.length;j++){
console.log(strs[0][i],strs[j][i])
if(strs[0][i]!==strs[j][i]) return prefix
}
prefix = prefix + strs[0][i]
}
return prefix
};

var longestCommonPrefix2 = function(strs) {
if (strs==null || strs.length==0 || strs[0]=="") {return ""}
for(let i = 0;i<strs[0].length;i++){
// console.log(strs[0][i]!==strs[1][i],strs[0][i]!==strs[2][i],i,strs[1],i)
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
// strs=[""]
// strs = ["doog","dooog","doooog"]
strs=["cba",""]
// strs=["flower","flower","flower","flower"]
console.log(longestCommonPrefix (strs))
