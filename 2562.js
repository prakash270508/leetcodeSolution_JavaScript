function concateValue(nums){

    let i = 0;
    let j = nums.length - 1;
    let concatenation  = 0;
    if(j%2 == 0){
        concatenation += nums[j/2]
    }

    
    if(j==0)return nums[j]
    while(i < j){
        let concatNum = nums[i].toString() + nums[j].toString()
        concatenation+=Number(concatNum)
        i++;
        j--
    }
    
    

    return concatenation

}

// let nums = [1,78,27,48,14,86,79,68,77,20,57,21,18,67,5,51,70,85,47,56,22,79,41,8,39,81,59,74,14,45,49,15,10,28]
let nums = [5,14,13,8,12]
console.log(concateValue(nums))