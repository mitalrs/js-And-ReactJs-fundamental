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


