// let res = fetch("https://jsonplaceholder.typicode.com/posts");
// res.then((data)=>{
//    let post =  data.json();
//    post.then((p)=>{
//         console.log(p);
//    })
//    .catch((err)=>{
//         console.log(err);
//    })
// })
// .catch((err)=>{
//     console.log(err);
// });
// ----------------------------------------------------------------
// res.then((data)=>{
//    return data.json(); 
// })
// .then((p)=>{
//     console.log(p)
// })
// .catch((err)=>{
//     console.log(err);
// });
//---------------------------------------------------------------------

//async/await
async function fetchPost(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();
        console.log(posts);  
    } catch (error) {
        console.log(error)
    }
}

fetchPost();