function countLive (board,row, col){

    let count = 0;

    for(let i=row-1; i<=row+1; i++){
        for(let j=col-1; j<=col+1; j++){
            if(i=== row && j === col){
                continue ;
            }

            if(i>=0 && i<board.length && j>=0 && j<board[i].length && board[i][j] == 1){
                count++
            }

        }
    }

    return count;

}



function gameOfLife(board) {

    let ansArry = []

    for(let i =0; i<board.length; i++){
        ansArry.push([...board[i]])
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            let countLiveNum = countLive(board,i, j)

            // console.log(countLiveNum)

            if(board[i][j] === 1 && (countLiveNum < 2 || countLiveNum>3)){
                console.log("Hii")
                ansArry[i][j] = 0;
            }else if(board[i][j]===0 && countLiveNum===3 ){
                ansArry[i][j] = 1;
            }

        }
    }

    for(let i=0; i<ansArry.length; i++){
        for(let j=0; j<ansArry[i].length; j++){
            board[i][j] = ansArry[i][j]
        }
    }

    return board
    
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]

console.log(gameOfLife(board))
// console.log(countLive(board, 2, 0))