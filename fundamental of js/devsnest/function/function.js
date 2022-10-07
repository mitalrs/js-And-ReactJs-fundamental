//functions in js

function graternum(numOne,numTwo){
    if(numOne>numTwo){
        console.log(numOne+" is grater than "+numTwo)
    }
    else if(numTwo>numOne){
        console.log(numTwo+ " is grater than "+numOne)
    }
    else if(numOne === numTwo){
        console.log(numOne+" both are equal")
    }
}

graternum(8,8)
graternum(10,5)
graternum(5,7)


//ananymous function
//function referance stored in variable and call a function by the referance varible:

const sum = function(snum1,snum2){
    return snum1+snum2;
}

console.log(sum(3,3));

//function in side the object

const parson = {
    fName : "mital",
    print: function (){
        console.log("this is a function who have part of object")
    }
};

parson.print();

//