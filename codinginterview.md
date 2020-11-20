// ## Write a function that return values that repeat odd # of times
// const input = [1,2,2,2,2,3,3,'A','B','B',5];
// const output = [1,'A',5];

// var oddfinder = function(arr){
// 	let counter = {}
// 	for(let i=0;i<arr.length;i++){
// 		counter[arr[i]] ? counter[arr[i]] = counter[arr[i]] +1 : counter[arr[i]] = 1
// 	}
// 	counter
// 	let ara=[]
// 	for (val in counter){
// 		if (counter[val]%2!==0){
// 			ara.push(val)
// 		}
// 	}
// 	return ara
// }

// console.log(oddfinder(input))


// const multiplyAndSum = (x, y) => x * 2 + y

// const use = (fn, value) => (...args) => fn(value, ...args);

// const add = use(multiplyAndSum, 3);

// console.log(add(10));


// const print = () => {
//   if (true) {
//     var x = 10;
//     var y = 20;
//   } else {
//     var z = 30;
//   }
//   console.log('x:', x);
//   setTimeout(() => console.log('y:', y), 10);
//   console.log('z:', z);

//   return () => {
//     console.log('x again?', x); // will this work?
//   };
// };

// setTimeout(print(), 100);

/// ARE YOU THERE???

function Person(name) {
  this.name = name;
  this.sayHi = () => {
    console.log('Hi ' + this.name);
  };
}

const jordan = new Person('jordan');
jordan.sayHi();


//x:10,
///z:undefined,
//y:unreference 
///x, again? 10 // return undefined