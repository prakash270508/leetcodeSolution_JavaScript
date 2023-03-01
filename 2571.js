let nums = [11,2,19,7,9,27]

function isSuare(n){

  return Number.isInteger(Math.sqrt(n))

}

function divide(n){

  for(let i=2; i<=n ; i++){
    if(isSuare(i)){
      if(n%i === 0){
        return false
      }
    }
  }

  return true

}

// console.log(divide(12))
// console.log(15%4 == 0)

function squareFreeSubsets(nums) {
  
  let count = 0;
  let ans = []
  
  for(let i=0; i<nums.length; i++){
    let prod = 1 ;
    if(divide(nums[i])){
      ans.push(nums[i])
      count++
    }
    for(let j=i; j<nums.length; j++){
      if(divide(prod*=nums[j])){
        count++
      }
    }
    
  }
  
  // for(let i=0; i<ans.length; i++){
    
    //   let prod = 1 ;

  //   for(let j=i; j<ans.length; j++){
  //     if(divide(prod*=ans[j])){
  //       count++
  //     }
  //   }
  //   prod = 1
  // }

  return count

}

console.log(squareFreeSubsets(nums))
