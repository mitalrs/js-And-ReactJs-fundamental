//Distructing object
const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name,projects:{diceGame},age} = student

console.log(diceGame+" //distructing object")



//object Literal
function addressMaker(address) {
    const {city,state} = address
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(newAddress.city,newAddress.state,newAddress.country +"//object Literal")
}

addressMaker({city: 'Austin', state: 'Texas'});


//For of Loop
const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]
for(const i of students)
{
    console.log(`${i.name} ${i.city} //"for of loop"`)
}

//spread operator
const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList,"iteam1","item2"]
console.log(shoppingBasket+"//spread operator")


//arrow function with default value
let foodbuy = (food = "somthing") =>{
    console.log(`I'm going to buy ${food} from the grocery shop`)
}

foodbuy("milk")


//function with default value
function foodShopping( food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping();


//includes() function
const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];
if(listIngredients.includes("chocolate")){
    console.log("We are going to make a chocolate cake")
}
else{
   console.log( "We can't make a chocolate cake because we are missing the ingredient chocolate")
}



//const data type it's fixed but the value of array and object it's changeble in the this


//padStart() & padEnd()

let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(100));
console.log(example.padEnd(1));