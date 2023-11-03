export class Person {
    constructor(name = "noname", age = 18) {
        this.name = name;
        this.age = age;
    }
    toString() {
        console.log(JSON.stringify(this));
    }
}

// module.exports = Person;