
let a = 10;
let b = 20;

console.log("Hello")

setTimeout(()=>{
    console.log("Database operation")
}, 4000);

let intervalId = setInterval(()=>{
    console.log("inside interval")
}, 1000)

setTimeout(()=>{
    clearInterval(intervalId);
}, 1000)

console.log(a+b);

// Asynchronous - 6s
function submitSlip(){
    console.log("SLIP submitted")
}

// Asynchronous - 2s
function withdrawcash(){
        console.log("cash widtdrawn")
}

// submitSlip()
// withdrawcash();


submitSlip(()=>{
    withdrawcash();
})