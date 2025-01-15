class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce() {
        console.log(
            `He is ${this.name}, ${this.age} y.o. and he is ${this.gender}`
        );
    }
    changeName(newName) {
        this.name = newName;
    }
}
const Peter = new Person("Peter", 10, "man");
Peter.introduce();
Peter.changeName("Alex");
Peter.introduce();
