function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let counter={}
    for (let str in args){
        counter[args[str]] ? counter[args[str]]+=1 : counter[args[str]]=1
    }

    for (let str in args){
        if (counter[args[str]]>1) return true 
    }

    return false

  }

  console.log(areThereDuplicates(1,2,3))