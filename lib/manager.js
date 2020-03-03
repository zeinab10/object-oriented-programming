const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(Employee) {
        super(Employee) 
        this.officeNum = ""
    }
    getOfficeNum() {
        return this.officeNum
    }
}
//getLinkedin();

module.exports = Manager;