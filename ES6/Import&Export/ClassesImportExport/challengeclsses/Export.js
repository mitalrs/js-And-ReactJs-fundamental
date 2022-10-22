export class player{
    constructor(name,contry){
        this.name = name
        this.contry = contry
    }

    //function
    consoleprnt(names,clubs){
        console.log(`${names} was born in ${clubs}`)
    }
}

export class TennisPlayer extends player{
    constructor(name,contry,age){
        super(name,contry)
        this.age = age
    }
    

    //function
    print(name,age){
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
    }
}