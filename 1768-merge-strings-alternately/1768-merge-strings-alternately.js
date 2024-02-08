/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    //split word1 itno array
    var word1_split = word1.split('')
    
    //split word2 into another array
    var word2_split = word2.split('')
    
    //have a collector array
     var collector = []
     
     var word1_flag = true
     var word2_flag = false;
     //make a loop until bothe word1 and word are empty
     while(word1_split.length != 0  || word2_split.length != 0){
         if(word1_flag){
             var letter = word1_split.shift();
             collector.push(letter);
             word1_flag=false;
             word2_flag = true;
         } else if(word2_flag){
             var letter = word2_split.shift();
             collector.push(letter);
             word1_flag=true;
             word2_flag = false;
         }
     }
    
    
    
    //merge array into string
     
    return collector.toString().replaceAll(',','');
};