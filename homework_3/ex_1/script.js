class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, department: ${this.department}`);
    }
}

const Kain = new Employee("Kain");
const Ventrue = new Manager("Ventrue", "ventrue");

Kain.displayInfo();
Ventrue.displayInfo();
