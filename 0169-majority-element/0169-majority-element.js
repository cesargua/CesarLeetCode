/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //create an object/map using reduce, count the number of each element in array
    const obj = nums.reduce((acc, index)=>{
        return (acc[index] ?acc[index]++:(acc[index] = 1), acc)} 
        , {})
    console.log(obj)
    //get the max of the map
    let Sorted = Object.entries(obj).sort((prev, next) => prev[1] - next[1])
    console.log(Sorted)
    
    return Sorted.pop()[0]
};