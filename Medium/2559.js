function checkVowel(str) {

  if(typeof str !== 'string'){
    console.log('hii')
    return false;
  }

  let vowel = ["a", "e", "i", "o", "u"];

  let i = 0;
  let j = str.length - 1;

  for (let k = 0; k < vowel.length; k++) {
    for (let z = 0; z < vowel.length; z++) {
      if (str[i] == vowel[k] && str[j] == vowel[z]) {
        return true;
      }
    }
  }

  return false;
}

function vowelStrings(words, queries) {
  let count = 0;
  let ans = [];

  for (let j = 0; j < queries.length; j++) {
    for (let i = queries[j][0]; i <= queries[j][1]; i++) {
      if (checkVowel(words[i])) {
        count++;
      }
    }
    ans.push(count);
    count = 0;
  }

  return ans;
}

let words = ["aba", "bcb", "ece", "aa", "e"];
let queries = [
  [0, 2],
  [1, 4],
  [1, 1],
];

// console.log(vowelStrings(words, queries));
// console.log(checkVowel("aba"));
console.log(checkVowel(16973));
