const buyticket = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;

            if(error)
            {
                console.log("your ticket not reserve")
            }else{
                console.log("your tickey succesfully reserved")
            }
        },3000)
    })
}

buyticket()
.then((sucess)=>{console.log(sucess)})
.catch((error)=>{console.log(error)})