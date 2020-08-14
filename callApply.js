const normalPerson = {
    firstName: 'abu taher',
    lastName: 'molla',
    salary: 30000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'heor',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'heor',
    lastName: 'jhanker',
    salary: 25000
}

// normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(200);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 30, 400, 44);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 30, 400, 44);
// console.log(friendlyPerson.salary);

// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [33, 33, 33]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [33, 33, 33]);
console.log(friendlyPerson.salary);
