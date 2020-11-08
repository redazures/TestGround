function multiply(a,b){
return a\*b;
}

function square(n){
return multiply(n,n);
}

var square=square(4)

function printSquare(n){
function square(n){
return multiply(n,n);
}

var squared=square(n)
console.log(squared)
}

var addTwoNumbers2 = function(l1, l2) {
let len = 0
l1.length>=l2.length ? len = l1.length : len = l2.length
// console.log(l1.length,l2.length,len)
let sumArray=new Array(len).fill(0,0,len)
console.log(sumArray)
// console.log("this is two numbers",l1,l2,len)
for (let i =0; i<len;i++){
if (!l1[i]){l1[i]=0}
if (!l2[i]){l2[i]=0}

      sumArray[i]=l1[i]+sumArray[i]+l2[i]
      if (sumArray[i]>9){
        sumArray[i]=sumArray[i]-10
        if (!sumArray[i+1]){sumArray[i+1]=0}
        sumArray[i+1]+=1
      }
    }
    return sumArray

};

var addTwoNumbers = function(l1, l2) {
let len = 0
l1.length>=l2.length ? len = l1.length : len = l2.length
let sumArray=new Array(len).fill(0,0,len)
for (let i =0; i<len;i++){
if (!l1[i]){l1[i]=0}
if (!l2[i]){l2[i]=0}

    sumArray[i]=l1[i]+sumArray[i]+l2[i]
    if (sumArray[i]>9){
      sumArray[i]=sumArray[i]-10
      if (!sumArray[i+1]){sumArray[i+1]=0}
      sumArray[i+1]+=1
    }

}
return sumArray
};

l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// l1 = [2,4,3], l2 = [5,6,4]
// l1 = [0], l2 = [0]
// addTwoNumbers(l1,l2)
//need to fix this for leetcode, not transferring
console.log(addTwoNumbers(l1,l2))

// printSquare(4)
