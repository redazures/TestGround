var isPalindrome = function(x) {
// if (x<0){return false}
// if (x%10===0 && x!==0){return false}
if (x === parseInt(x.toString().split('').reverse().join(''))){return true}else{
return false
}
};

/added new palindrome function