function getprototypeChain(obj) {
    let objectForGet = obj;
    const result = [];
    result.push(objectForGet);
    let flag = true;
    while (flag) {
        let prototype = Object.getPrototypeOf(objectForGet);
        if (prototype != null) {
            objectForGet = prototype;
            result.push(prototype);
        } else {
            flag = false;
        }
    }
    return result;
}

class MyClass {
    name = "My Class";
    constructor() {}
}

class NewClass extends MyClass {
    name = "New Class";
    constructor() {
        super();
    }
}

const newCl = new NewClass();

console.log(getprototypeChain(newCl));
