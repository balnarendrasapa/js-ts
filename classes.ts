const student = {
    name: 'John',
    age: 30,
    printName: function() {
        console.log(this.name);
        return this.name;
    }
}

console.log(student.printName());