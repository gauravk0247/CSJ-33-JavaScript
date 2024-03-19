function myFact(n){
    if(n == 0 || n == 1){
        return n;
    }else{
        return n * myFact(n-1);
    }
}
console.log(myFact(5))