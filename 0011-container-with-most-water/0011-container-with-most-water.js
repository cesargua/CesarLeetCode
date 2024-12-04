/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
    //Initialize two pointers (left at 0 and right at height.length - 1).
    var left = 0;
    var right = height.length-1; 

    //max area
    var area = 0

    //Use a while loop to iterate until left meets right
    while(left != right){
        //Calculate the Area
        var new_area = Math.min(height[left], height[right]) * (right - left);

        //Calculate the current area and update max_area if it's larger.
        area = Math.max(area,new_area)

        //Move the pointer pointing to the smaller height inward.
        if(height[left] < height[right]){
            left++
        } else{
            right--;
        }
    }
    return area;


};