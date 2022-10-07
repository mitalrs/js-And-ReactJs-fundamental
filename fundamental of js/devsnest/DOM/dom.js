//dom tree 
//dom node

// create and any tag with containd using DOM
 const div = document.createElement("div");
 div.textContent = "this is a div created by dom! ";
 //set id using setAttribute function
 div.setAttribute("id", "dom-div")
 console.log(div.getAttribute("id"))
 //set class using classList 
 //in the classList you add multiple classes, the add function recieve the hole array
 div.classList.add("one")
 div.classList.add("second")

 //remove class
 div.classList.remove("second")


 document.body.appendChild(div);

 //create another example 
 // is a span tag i the div tag

 const span = document.createElement("span");
 span.id = "span-id";
 //add multiple classes
 span.className = "span red white";
 span.textContent = "this a span created by dom also";
 //innerHTML tag we use this tag if we want some tag used in a content part
 span.innerHTML = "this a span <em>created by dom also<em>";

 div.appendChild(span);

 //cssom:css object model
 span.style.backgroundColor = "yellow";



//unordered list using DOM
const foodies = ["pizza", "psta", "panir", "chap", "chilipotato"];
const list = document.createElement("ul");

for(let food of foodies){
    list.innerHTML+= "<li>"+food+"</li>";
}
document.body.appendChild(list);


//  --------------------------------------------------------------------
// get the  element  from HTML
console.log(document.getElementById("first-p").textContent)

console.log(document.getElementsByClassName("span"))

console.log(document.querySelector("p"))   //only returns fist match 
console.log(document.querySelectorAll("p"))  //returns all matches