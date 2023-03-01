function separateDigits(nums){

    let ans = []

    for(let i=0; i<nums.length; i++){
        let strNum = nums[i].toString()
        for(let j=0; j<strNum.length; j++){
            ans.push(+(strNum[j]))
        }
    }

    return ans

}

let nums = [13,25,83,77]

console.log(separateDigits(nums))