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
// can only set readonly properties in the constructor.
class Student {
    private readonly phn: number;
    name: string;
    age: number;
    constructor(name: string, age: number, phn: number) {
        this.name = name;
        this.age = age;
        this.phn = phn;
    }
    static printName(): string {
        return this.name;
    }
    printPhn(): number {
        return this.phn;
    }
}

const student1 = new Student('John Wick', 30, 896);
console.log(student1.printPhn());