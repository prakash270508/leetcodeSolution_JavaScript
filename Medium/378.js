function kthSmallest(matrix, k){

    let arr = []

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            arr.push(matrix[i][j])
        }
    }
    arr.sort(function(a, b){return a-b})

    return arr[k-1]

}

let matrix = [[1,5,9],[10,11,13],[12,13,15]]
let k = 8

console.log(kthSmallest(matrix, k))