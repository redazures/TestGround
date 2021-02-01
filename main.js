document.addEventListener('DOMContentLoaded', (event) => {
    console.log('works for me')
})

function mystery(input) {
    // The input will be an array of strings
    let index = 0
    let flag = false
    while ( index < input.length ) {
        var word = input[index]
        input.forEach(thisWord => {
            flag = flag || thisWord === word
            console.log(flag)
        })
        index++
        // console.log("flag", flag)
    }
    return flag

}

// console.log(mystery(["string1", "string1", "worde"]))