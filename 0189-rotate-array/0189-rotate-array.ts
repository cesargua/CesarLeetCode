/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {


    //shift the array k times
    //add it to the end of nums

    for(let i:number = 0; i < k; i++){
        let n = nums.pop();
        nums.unshift(n)
    }

    console.log(nums)
};