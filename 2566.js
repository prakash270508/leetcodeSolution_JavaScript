function maxMin(num) {
  let numStr = num.toString();
  let max = numStr;
  let min = numStr;

  for (let i = 0; i < numStr.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === numStr[i]) continue;

      numStr = numStr.replace(numStr[i], j);
      if (+numStr > +max) {
        max = numStr;
      }
      if (+numStr < +min) {
        min = numStr;
      }
    }
  }

  console.log("Max -", max);
  console.log("Min -", min);

  return +max - +min;
}

console.log(maxMin(11891));


console.log("Not complete yet");
