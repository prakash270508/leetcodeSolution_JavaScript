function countPair(nums, lower, upper){
    //Brut force but TLE
    let count = 0
    let ans = []

    for(let i=0; i<nums.length; i++){
        // nums.map((ele)=>{
        //     if(nums[i] + ele >=lower && nums[i] + ele <= upper){
        //         ans.push([nums[i] , ele])
        //         count++
        //     }
        // })
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] >=lower && nums[i] + nums[j] <= upper){
                ans.push([nums[i] , nums[j]])
                count++
            }
        }
    }


    return count
    

}

nums = [0,1,7,4,4,5]

console.log(countPair(nums, 3, 6))