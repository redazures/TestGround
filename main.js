document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function solution(wordlist,keypads) {
    if(!keypads || keypads.length<1 || wordlist.length<1 || !wordlist) return 0
    
    let keys = []
    keypads.forEach(key=>{
        let count  = 0
        const keySet = new Set(key)
        const firstLetter=key[0]
        for(let i =0;i<wordlist.length;i++){
            count++
            for(let j=0;j<wordlist[i].length;j++){
                if(!keySet.has(wordlist[i][j])){
                    count--
                    break
                }
            }
        }
        keys.push(count)
    })

    for(let i =0;i<wordlist.length;i++){
        for(let j=0;j<wordlist[i].length;j++){
            wordlist[i][j]
        }
    }
    // console.log(keys)
    return keys
}

wordlist= ['APPLE', 'PLEAS', 'PLEASE']
keypads = ['AELWXYZ','AELPXYZ','AELPSXY','SAELPRT','XAEBSKY']

console.log(solution(wordlist,keypads))

// console.log(solution("azABaabza")) //5 
// console.log(solution("TacoCat")) //-1 
// console.log(solution("AcZCbaBz")) //8
// console.log(solution("abcdefghijklmnopqrstuvwxyz")) //-1