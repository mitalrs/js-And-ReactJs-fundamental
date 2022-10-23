const userdata = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;

            if(error){
                reject("500 live error");
            }else{
               resolve({
                lastName : "somthing"
               });
            }
        },3000)
    });
}

userdata()
.then((success)=>{console.log(success)})
.catch((error)=>{console.log(error)});