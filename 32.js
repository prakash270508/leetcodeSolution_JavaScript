function longestValidParentheses(s){

    if(s.length == 0)return 0;

    let count = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] == '(' && s[i+1] == ')' ){
            count +=2
        }
    }

    return count

}

console.log(longestValidParentheses('()(())'))