// Make a Person
//
// Fill in the object constructor with the methods specified in the tests.
// Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
// All functions that take an argument have an arity of 1, and the argument will be a string.
// These methods must be the only available means for interacting with the object.

var Person = function(firstAndLast) {
	this.getFirstName = function() {
		var nameArr = this.getFullName().split(' ');
		return nameArr[0];
	};
	this.getLastName = function() {
		var nameArr = this.getFullName().split(' ');
		return nameArr[1];
	};
	this.getFullName = function() {
		return firstAndLast;
	};
	this.setFirstName = function(first) {
		var lastName = this.getLastName();
		this.getFullName = function() {
			return first + ' ' +  lastName;
		};
	};
	this.setLastName = function(last) {
		var firstName = this.getFirstName();
		this.getFullName = function() {
			return firstName + ' ' + last;
		};
	};
	this.setFullName = function(firstAndLast) {
		this.getFullName = function() {
		return firstAndLast;
		};
	};
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFullName('Tom Servo');
bob.getFullName();
bob.setFirstName('Randall');
console.log(typeof bob);
console.log(bob.getFullName());
console.log(bob instanceof Person);
console.log('bob.constructor is ' + bob.constructor);
