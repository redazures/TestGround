document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function solution(wordList,keyPads) {
    if(!keyPads || keyPads.length<1 || wordList.length<1 || !wordList) return 0
    
    let results = []
    keyPads.forEach(key=>{
        let count  = 0
        const keySet = new Set(key)
        const firstLetter=key[0]
        for(let i =0;i<wordList.length;i++){
            if(wordList[i].includes(firstLetter)){
                count++
                for(let j=0;j<wordList[i].length;j++){
                    if(!keySet.has(wordList[i][j])){
                        count--
                        break
                    }
                }
            }
        }
        results.push(count)
    })

    return results
}

wordList= ['APPLEAPPLEAPPLE', 'PLEAS', 'PLEASE']
keyPads = ['AELWXYZ','AELPXYZ','AELPSXY','SAELPRT','XAEBSKY']

console.log(solution(wordList,keyPads)) //  gets 8 cases, but not enough