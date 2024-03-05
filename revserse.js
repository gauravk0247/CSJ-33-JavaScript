var string = "This is my string";
let revSetn = revFunction(string , "")
let revword = revFunction(revSetn , "")
function revFunction(string, seprator){
    return string.split(seprator).reverse().join(seprator)
}
// revFunction()


function moha(str){
    let rev = '';
    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}
console.log(moha('Hello How are You!'))