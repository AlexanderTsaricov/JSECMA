class Book {
    constructor(title, autor, pages) {
        this.title = title;
        this.autor = autor;
        this.pages = pages;
    }
    displayInfo() {
        console.log(
            `Booke title is ${this.title}, autor is ${this.autor}, pages ${this.pages}`
        );
    }
}
const book1 = new Book("Game of The Thrones", "J. Marthin", 694);

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
        );
    }
}

const Petya = new Student("Petya Swordswallower", 21, "B");
Petya.displayInfo();
