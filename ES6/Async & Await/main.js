const photos =[]

async function photoupload(){
    let photoload = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            photos.push("new photo")
            resolve("photo uploaded")
        },3000)
    })
    let resut = await photoload
    console.log(resut)
    console.log(photos.length)
}
photoupload()