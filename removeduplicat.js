// let array = [1, 2, 3, 4, 5, 1, 2, 3];
// function remove(array){
//     return Array.from(new Set(array));
// }
// console.log(remove(array))


// String Reverse
var rev = '';
function reverse(str){
    for(let i= str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
let str = "nitin";
console.log(reverse(str));
if(str == rev){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}

let arr = [1, 2, 3, 4, 5, 6, 3, 4,5];
function removeDuplicate(arr){
    return Array.from(new Set(arr));
}
let bb = removeDuplicate(arr);
console.log(bb)

// Factorial of number
function factrialNumber(n){
    if(n == 0 | n== 1){
        return 1;
    }else{
        return n * factrialNumber(n-1)
    }
}
let num = 5;
console.log("Factotal of " + num + " is " +factrialNumber(num))
console.log(`Factorial of ${num} is ${factrialNumber(num)}`)

// Prime Number Code
function isPrime(number){
    if(number<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7))
console.log(isPrime(10))

let even = 2;
let odd = 3;
function evnOdd(number){
    if(number % 2 == 0){
        return "Even";
    }else{
        return "Odd"
    }
}
console.log(evnOdd(56))
console.log(evnOdd(59))

let part = [12, 45, 5, 78, 90];
let min = Math.min(...part)
let max = Math.max(...part)
console.log(min)
console.log(max)

function minMax(arr1){
    const min = Math.min(...arr1)
    const max = Math.min(...arr1)
    return {min, max};
}
let abc = [1, 2, 34, 67, 789];
let result = minMax(abc);

console.log(result.min)
console.log(result.max)


// factorial
function factO(n){
    if(n == 0 || n == 1){
        return 1;
    }
    for(let i=0;i<n;i++){
       return n * factO(n-1);
    }
}
let mynum = 5;
console.log("Factorial of number is " + factO(mynum));
console.log(`Factoral of ${mynum} is ${factO(mynum)}`)

// Revresr 
function myRev(str){
    let rev = '';
    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
var name = "nitin" ;
if(name == rev){
    console.log("Is palindrome")
}else{
    console.log("Is not palindrome")
}
console.log(myRev(name))

// remove duplicate from an array
function removeDuplicateElemnt(array){
    return Array.from(new Set(array));
}
let array = [6, 89, 1, 2, 3, 4, 5, 6, 89, 3, 1, 2];
console.log(removeDuplicateElemnt(array))

function isPrime1(number){
    if(number<=1){
        return false;
    }
    for(let i=2;i<Math.sqrt(number);i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
// let number = 7;
console.log(isPrime1(7))
console.log(isPrime1(10))

function isPrime2(number){
    if(number<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime2(7))
console.log(isPrime2(10))

function Outer(){
    let a = 56;
    function Inner(){
        return a;
    }
    return Inner();
}
let cc =Outer()
console.log(cc)


function myCall (a, b, callback){
    let result = a + b;
    callback(result);
}
function myFun1(result){
    console.log(result)
}
let bn = myCall(5, 4, myFun1)
console.log(bn)

function myRev1(str){
    let rev = '';
    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
console.log(myRev1("HEllo"));


let arr2 = [1, 2, 3, 4, 5, 1, 2, 3];
function removeDupli(arr2){
    return Array.from(new Set(arr2));
}
let cv = removeDupli(arr2);
console.log(cv)

function myPrime(number){
    if(number<=1){
        return false;
    }
    for(let i=2;i<Math.sqrt(number);i++){
       if(number % i == 0){
        return false;
       }
    }
    return true;
}
console.log(myPrime(7));
console.log(myPrime(10))

function myFacot(n){
    if(n ==0 || n== 1){
        return 1;
    }else{
        return n * myFacot(n-1);
    }
}
let number  = 5;
console.log("Factorail of " + number + " is " + myFacot(number))
console.log(`Factorail of ${number}  is ${myFacot(number)}`)


let mynewnum = [1, 4, 5, 7, 8, 9];
let gh = mynewnum.filter((a)=>{
    return a>5
})
console.log(gh)