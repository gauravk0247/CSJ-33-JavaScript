// function myFact(n){
//     if(n == 0 || n == 1){
//         return n;
//     }else{
//         return n * myFact(n-1);
//     }
// }
// console.log(myFact(5))


function inner(a,b, callback){
    let result =  a + b;
    callback(result)
}
function outer(result){
    console.log(result)
}
inner(4, 5, outer)
// console.log(a)

function lexi(){
    let a = 45;
    function lexa1(){
        console.log(a)
    }
    lexa1()
}
lexi()

let p = new Promise(()=>{
    setInterval((resolve, reject)=>{
            resolve(89);
    }, 3000)
})
.then(()=>{
    console.log("Success")
}).catch(()=>{
    console.log("Failed")
})