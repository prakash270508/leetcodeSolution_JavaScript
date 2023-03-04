
//Two pointer approch
function matrixReshape(mat, r, c) {

    let row = mat.length-1;
    let col = mat[0].length-1

    if(row*col !== r*c)return mat

    
    
};

let mat = [[1,2],[3,4]], r = 1, c = 4

console.log(matrixReshape(mat, r, c))