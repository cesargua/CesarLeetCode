/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //split the sentence into a list
    var arr = s.split(' ');
    // console.log(arr)
    
    //reverse the array
    var arr_rev = arr.reverse();
    console.log(arr_rev)
    //get rid of any extra spaces
    s_rev = arr_rev.filter(char=>{
        return char != '';
    }).join(' ')
    console.log(s_rev)
    
    return s_rev
    
    
};