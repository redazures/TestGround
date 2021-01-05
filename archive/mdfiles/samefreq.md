function sameFrequency(first,second){
    // good luck. Add any arguments you deem necessary.
    if(first===second){return true}
    let string1 = first.toString()
    let string2 = second.toString()
    let counter = {}
    for(let i=0;i<string1.length;i++){
        counter[string1[i]] ? counter[string1[i]]+=1 : counter[string1[i]] =1
        console.log(counter)
    }

    for(let i=0;i<string2.length;i++){
        console.log(counter)

        if (counter[string2[i]]>0) 
        { counter[string2[i]]-=1}
        else{return false}
    }
    return true
  }

  console.log(sameFrequency(34,43))