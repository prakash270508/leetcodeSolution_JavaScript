function numberOfBeams(bank) {
  let count = 0;

  let beamArr = [];
  let sum = 0;

  for (let i = 0; i < bank.length; i++) {
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] == "1") {
        count++;
      }
    }
    beamArr.push(count);
    count = 0;
  }

  for(let i=0; i<beamArr.length; i++){
    for(let j=i+1; j<beamArr.length; j++){
        if(beamArr[j] != 0){
            sum+=(beamArr[i]*beamArr[j])
            break;
        }
        
    }
  }
  return sum;
}

let bank = ["011001", "000000", "010100", "001000"];

console.log(numberOfBeams(bank));
