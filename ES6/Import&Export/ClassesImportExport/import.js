import { animal,cat } from "./Export.js";

let anl = new animal("cat",4)

anl.type = "dog"
//function call
anl.noise()
//constructor call
console.log(anl.type +" "+ anl.legh)

//satic function call
console.log( animal.fnstr())

//function with get keyword 
console.log(anl.metaData)



let catt = new cat("catAl",4,true)
console.log(catt)

//call overriden method
catt.noise()

//exteds the animal class into the base class so all method call from base class
console.log(catt.metaData)