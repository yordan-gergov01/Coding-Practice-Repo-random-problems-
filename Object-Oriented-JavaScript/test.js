function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

function Student(firstName, birthYear, course) {\
  // Better way because of DRY principle
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const yordan = new Student("Yordan", 2001, "Computer Science");

yordan.introduce();
