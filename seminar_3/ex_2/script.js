class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
    speak() {
        console.log(`${this.name} say ${this.voice}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Woof");
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} came whith ball`);
    }
}

const SomeAnimal = new Animal("Tisha", "gragh!");
const Luna = new Dog("Luna", "chihuahua");

SomeAnimal.speak();
Luna.speak();
Luna.fetch();
