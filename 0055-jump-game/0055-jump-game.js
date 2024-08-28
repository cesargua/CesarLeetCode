/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //base cases
    if(!nums.some(val=> val == 0)){
        return true;
    }
    //if first index is 0, return false
    if(nums[0] == 0 && nums.length > 1) return false;
    
    
     if(nums[0] == 0 && nums.length == 1 ) return true;
    //create a loop
        //jump by the max amount of jumps of the index
        
        //if index lands on 0, start over to the next non-zero index and start form there
    
        //if there are no other non-zero index, then retrun false;
    
    let farthest = 0;
    
    for(let i = 0 ; i < nums.length; i++){
        if(i <= farthest){
            farthest = Math.max(farthest, i + nums[i]);
        } 
        
        if(farthest >= nums.length-1){
            return true;
        }
    }
    return false;
   
        
};