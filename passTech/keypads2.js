document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function solution(wordList,keyPads) {
    if(!keyPads || keyPads.length<1 || wordList.length<1 || !wordList) return 0
    
    wordSets=[]
    wordList.forEach(word=>{
        newSetWord = new Set(word)
        wordSets.push(newSetWord)
    })
    
    let results = []
    keyPads.forEach(key=>{
        let count  = 0
        const firstLetter=key[0]
        for(let word of wordSets){
            if(word.has(firstLetter)){
                count++
                for(let letter of word){
                    if(!key.includes(letter)){
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