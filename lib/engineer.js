const Employee = require('./Employee');
const inquirer = require("inquirer");

class Engineer extends Employee {
	constructor(name, email, github) {
		super(name, email);
		this._github = github;
	}

    getGithub() {
		return this._github;
	}
}
 module.exports = Engineer;