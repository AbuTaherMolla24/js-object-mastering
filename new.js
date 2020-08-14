class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', ' balam', '2000');
console.log(heroPerson);
const friendlyPerson = new Person('hero', 'kalam', 2500)
console.log(friendlyPerson);