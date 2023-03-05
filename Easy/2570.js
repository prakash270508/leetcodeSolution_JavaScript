function mergeArry(nums1, nums2) {
  let ans = [];
  let i = 0;
  let j =0 ;

  while(i<nums1.length && j<nums2.length){

    if(nums1[i][0]< nums2[j][0]){
        ans.push([nums1[i][0], nums1[i][1]])
        i++;
    }else if(nums1[i][0]> nums2[j][0]){
        ans.push([nums2[j][0], nums2[j][1]])
        j++
    }else{
        ans.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
        i++;
        j++;
    }

  }

  while(i<nums1.length){
    ans.push([nums1[i][0], nums1[i][1]])
        i++;
  }
  while(j<nums2.length){
    ans.push([nums2[j][0], nums2[j][1]])
        j++;
  }

  return ans;
}

let nums1 = [
  [1, 2],
  [2, 3],
  [4, 5],
];
let nums2 = [
  [1, 4],
  [3, 2],
  [4, 1],
  [5,6],
  [7,8]
];

console.log(mergeArry(nums1, nums2));
