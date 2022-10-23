// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(response=>response.json())
// .then(data=>console.log(data))


fetch('https://jsonplaceholder.typicode.com/comments',{
    method : "POST",
    body : JSON.stringify({
        postId : 1,
        name  : 'somthing',
        email : 'somthing123@gmail.com'
    })

})
.then(response=>response.json())
.then(data=>console.log(data))