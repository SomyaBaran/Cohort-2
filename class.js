class animals{ // animals are just blue print --> new animals = real object
    constructor(names, legCount, speaks){
        this.names = names;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    name(){
        console.log("hi!", this.names);
    }
    speak(){
        console.log("i speak", this.speaks)
    }
    static myType(){ 
        console.log("animals")
    }
}
console.log(animals.myType()); //✅ works because it's static
// console.log(dog.speak()); // ❌ error! static methods can't be called on objects
let dog = new animals("doggie", "4", "bhow bhow"); // dog is object here 
dog.name();
dog.speak();

