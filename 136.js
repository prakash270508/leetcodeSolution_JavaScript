/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    nums.sort(function(a,b){return (a-b)})

    for(let i=0; i<nums.length; i++){
        if(nums[i-1] != nums[i] && nums[i] != nums[i+1] ){
            return nums[i]
        }
    }
    
};