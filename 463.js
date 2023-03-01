var islandPerimeter = function(grid) {

    let count = 0;
    let neighbours = 0

    for(let i=0; i<grid.length; i++){
        for(let j=0 ; j<grid[i].length; j++){
            if(grid[i][j] == 1){
                count++
                if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++;
                    if (j < grid[i].length - 1 && grid[i][j + 1] == 1)neighbours++
            }
        }
    }

    return 4*count - neighbours*2
    
};

//Done