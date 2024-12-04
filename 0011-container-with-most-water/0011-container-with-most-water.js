/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   //have a pointer tat the start of the array

   //have another at the end

   //take the min of the two height

   //keep track of the max of area

   //calculate the area
//-----------------------------------
    //naive solution

    //keep track of max of area
    // var max_area = 0;

    // for(var i = 0; i < height.length; i++){
    //     for(var j= height.length-1; j > i ; j--){
    //         var min_height = Math.min(height[i],height[j])
    //         console.log('height: ', min_height)
    //         var diff = j-i
    //         max_area = Math.max(max_area, min_height*diff)
    //         console.log(max_area)
    //     }

    // }

    // return max_area

    var left = 0;
    var right = height.length-1; 
    var area = 0

    while(left != right){
        var new_area = Math.min(height[left], height[right]) * (right - left);
        area = Math.max(area,new_area)
        if(height[left] < height[right]){
            left++
        } else{
            right--;
        }
    }
    return area;


};