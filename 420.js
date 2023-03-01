function check(s) {
  if (/^\d$/.test(s)) {
    return "number";
  } else if (s === s.toLowerCase()) {
    return "lower";
  } else if (s === s.toUpperCase()) {
    return "higher";
  }
}

function strongPasswordChecker(password) {
  let count = 0;
  let isLower = false;
  let isUpper = false;
  let isDigit = false;
  let isNotRepeat = true;
  let isLength = false;

  if (password.length >= 6 && password.length <= 20) {
    isLength = true;
    count++;
  }

  for (let i = 0; i < password.length; i++) {
    let ansOfCheck = check(password[i]);

    if (ansOfCheck == "lower") {
      isLower = true;
    } else if (ansOfCheck == "higher") {
      isUpper = true;
    } else if (ansOfCheck == "number") {
      isDigit = true;
    }

    if (password[i] == password[i + 1] && password[i + 1] == password[i + 2]) {
      isNotRepeat = false;
    }
  }

  if (isDigit) {
    count++;
  }
  if (isLower) {
    count++;
  }
  if (isUpper) {
    count++;
  }
  if (isNotRepeat) {
    count++;
  }

  if (isDigit && isLower && isNotRepeat && isUpper && isLength) {
    return 0;
  }

  console.log(count);

  return 7 - count;
}

// console.log(strongPasswordChecker("aA123"));

//Second Approch

function strongPasswordChecker2(password) {
  let missingParameter = 0;

  if (!password.match(/[a-z]/)) {
    missingParameter++;
  }
  if (!password.match(/[A-Z]/)) {
    missingParameter++;
  }
  if (!password.match(/[0-9]/)) {
    missingParameter++;
  }

  let repeatChar = 0

  for (let i = 0; i < password.length; i++) {
    if (password[i] == password[i + 1] && password[i + 1] == password[i + 2]) {
      repeatChar++;
      i+=2
    }
  }

  if (password.length < 6) {
    return 6 - password.length;
  }
  if (password.length >= 20) {
    return (password.length - 20 + missingParameter);
  }

  console.log("Reapt char " , repeatChar)

  return Math.max(missingParameter, repeatChar);
}

console.log(strongPasswordChecker2("aaa123"));
