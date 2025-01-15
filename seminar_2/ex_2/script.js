const Animal = {
    name: "Animal",
    eat() {
        console.log(`${this.name} is eat`);
    },
};

const Dog = {
    name: "Luna",
    eat: Animal.eat,
};

Animal.eat();
Dog.eat();
