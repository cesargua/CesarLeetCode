/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //organize/sort the letters in each element
    var original = strs

    let sorted = original.map(word=> {
        return word.split('').sort().join('')
    });

    //start a map
    let word_map = {}

    for(var i = 0; i < sorted.length; i++ ){
        let word = sorted[i]
        word_map[word] = [] 
    }

     for(var i = 0; i < original.length; i++ ){
        let word = sorted[i]
        word_map[word].push(original[i]) 
    }
    
    const result = []

    for (let value of Object.values(word_map)) {
        result.push(value)
    }
    

    // console.log(word_map)
    return result

};