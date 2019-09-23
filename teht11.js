class Animal {

    constructor(given_param = "Default Animal", given_name = "Default Name") {
        if (typeof given_param == "string" || given_param instanceof String){
            this.species = given_param;
            this.name = given_name;
            this.stomach = [];
        }
        else if (given_param instanceof Animal){
            this.species = given_param.species;
            this.name = given_param.name;
            this.stomach = given_param.stomach;
        }
    }

    empty_stomach(){
        this.stomach = [];
    }

    feed(food){
        if (this.stomach.includes(food)) {
            console.log("I do not want more " + food + ".");
        }
        else {
            this.stomach.push(food);
        }
    }

    make_speak(){
        console.log("Hello, I am a " + this.species + " named " + this.name + ".");
        if (this.stomach.length == 0){
            console.log("My stomach is empty.");
        }
        else {
            console.log("I have eaten: " + this.stomach);
        }
    }
}

class Zoo {

    constructor(){
        this.animals = [];
    }

    add_animal(animal){
        this.animals.push(animal);
    }

    make_animals_speak(){
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].make_speak();
        }
    }

    feed_all(food){
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].feed(food);
        }
    }
}

let zoo = new Zoo();
zoo.add_animal(new Animal("Dog", "Good Boye"));
let cat = new Animal("Cat", "Kittie-Cat");
zoo.add_animal(cat);
zoo.make_animals_speak();
zoo.feed_all("Kebab");
zoo.feed_all("French Fries");
cat.feed("Kebab");
zoo.make_animals_speak();