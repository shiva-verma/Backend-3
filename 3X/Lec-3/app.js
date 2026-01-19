// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise inside Timeout');
//   });
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise inside promise")
//     setTimeout(()=>{
//         console.log("settimeout inside promise")
//     },0)
// })

// console.log('End');

console.log(1);
Promise.resolve().then(() => {
    console.log("promise inside promise");
})
let p1 = new Promise((resolve, reject)=>{
    resolve("p1 promise");
})
async function fetch(){
    console.log("clg inside fetch");
    let res = await p1;
    console.log(res);

    console.log("below the res")
}
fetch();
console.log(2);