export class animal{
    constructor(type,legh)
    {
        this.type = type;
        this.legh = legh
    }

    //function
    noise(sound = "meow"){
        console.log( sound )
    }

    //static function alwayes return 
    static fnstr()
    {
        return "always return"
    }

    //get keyword before the function to allow the property trit as a object
    get metaData(){
        return`${this.type} ${this.legh}`
    }
}


export class cat extends animal{
    //extends the super class property useing super keyword
    constructor(type,legh,tail)
    {
        super(type,legh)
        this.tail = tail
    }

    //method overrriden
    noise(sound = "meow"){
        console.log( sound )
    }
}