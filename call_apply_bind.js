// call()
let person1 = {
    name: 'ramesh',
    salary: 2000000,
    addSalary: function() {
        console.log(this.salary);
    }
}

// person1.addSalary();
//this internally calls person1.addSalary.call()
let person2 = {
    name: 'ramesh',
    salary: 3000000
}

/*
consider now there is a person2 and we want to display salary of person2, 
do we copy paste same function in person2 as well?
no, we use call();
*/

person1.addSalary.call(person2);

//apply 
console.log(`-----apply()------`)
let computation1 = {
    id:"12",
    add: function(a,b) {
        console.log(a+b);
    }
}
let computation2 = {
    id:"12"
}

computation1.add(10,20);
//with apply the syntax is .apply(obj,[list of args])
computation1.add.apply(computation2,[10,20]);

// bind returns a obj by binding function to it, so we call it on returned obj


let newObj=computation1.add.bind(computation2,10,20);
newObj();


