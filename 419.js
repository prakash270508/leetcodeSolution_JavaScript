/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {

    let count = 0;

    for(let i=0; i<board.length; i++){
        for(let j=0 ; j<board[i].length ;j++){
            if(board[i][j] == '.')continue
            if(i+1<board.length && board[i+1][j] == 'X')continue
            if(j+1<board[0].length && board[i][j+1] == 'X')continue

            count++
        }
    }

    return count
    
};

let board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];


console.log(countBattleships(board))

