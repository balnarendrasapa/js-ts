// cannot use the keyword 'new' in this case.
const student = {
    name: 'John',
    age: 30,
    printName: function() {
        console.log(this.name);
        return this.name;
    }
}

console.log(student.printName());

// can use the keyword 'new' in this case.
class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    printName(): string {
        return this.name;
    }
}

const student1 = new Student('John Wick', 30);
console.log(student1.printName());