const Employee = require('./Employee');

class Intern extends Employee {
    constructor(Employee) {
        super(Employee)
        this.school = ""
    }
    getSchool() {
        return this.school
    }
}


module.exports = Intern; 