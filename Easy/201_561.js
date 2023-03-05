//201
var findKthLargest = function(nums, k) {

    nums.sort(function(a,b){return (b-a)})

    return nums[k-1]
    
};

//561
var arrayPairSum = function(nums) {

    nums.sort((a, b) => (a - b));
    let result = 0;
    for(let i = 0; i < nums.length; i = i + 2){
        result += nums[i];
    }
    return result;
    
};