function checkPrime(n){
    for(let i=2; i<n; i++){
        if(n%i == 0 ){
            return false;
        }
    }

    return true
}

function countPrimes(n) {

    let count = 0;

     for(let i=2; i<n ; i++){
        if(checkPrime(i)){
            console.log(i)
            count++
        }
    }

    return count
    
};

console.log(countPrimes(10))
console.log(checkPrime(5))

//It's working on vs code editor but tle in leetcode 
