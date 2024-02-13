/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    //get the max of list
    var max = Math.max(...candies);
    
    //make a new list and add up with extra candies
    var addCandies = candies.map(elem=>elem+extraCandies);
    
    //make an bool array
    var collection = []
    
    //comapre each elemtn to the max, and insert the boolean
    addCandies.forEach(elem=>{
        collection.push(elem >= max)
    });
    return collection;
};