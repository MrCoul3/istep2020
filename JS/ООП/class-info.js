class User {
    constructor(name, pass) {
        this.username = name;
        this.password = pass;
    }
    validatePassword() {
        if (this.password.length < 6) {
            return false;
        }
        return true;
    }
}

let a = "MrCoul";
let b = "53225";

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword());


