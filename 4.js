function findMedianSortedArrays(nums1, nums2){
    let arr = []
    let i =0 ;
    let j =0;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i])
            i++;
        }else{
            arr.push(nums2[j])
            j++;
        }
    }

    while(j<nums2.length){
        arr.push(nums2[j])
            j++;
    }

    while(i<nums1.length){
        arr.push(nums1[i])
            i++;
    }
    
    let n = arr.length - 1


    if(n%2== 0 ){
        return (arr[Math.floor((n+1)/2)])
    }else{
        return ((arr[Math.floor(n/2)]+arr[Math.floor(n/2 +1)])/2)
    }
}

let nums1 = [1,3];
let nums2 = [2,7];

console.log(findMedianSortedArrays(nums1, nums2))


//  QUESTION DONE