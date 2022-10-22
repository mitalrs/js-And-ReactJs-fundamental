import { player,TennisPlayer } from "./Export.js";

let play = new player("marri","france")
console.log(play.name+" "+play.contry)


//function
play.consoleprnt("Messi","Argentina")




let tplay = new TennisPlayer("Rafael Nadal","Argentina",34)
console.log(tplay.name+" "+tplay.contry+" "+tplay.age)

tplay.print()