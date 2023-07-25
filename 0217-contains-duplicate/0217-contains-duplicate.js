/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var nums_sort = nums.sort((a,b)=> a-b)
    for(var i = 0 ; i < nums_sort.length-1; i++){
        if(nums_sort[i] === nums_sort[i+1]){
            return true;
        }
    }
    
    return false;
    
};