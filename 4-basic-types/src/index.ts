type Person = {
  name: string;
  age: number;
};

type Studying = {
  semester: number;
};

type Student = {
  id: string;
  age: number;
  semester: number;
};

function createPerson() {
  return { name: "Ken", age: 29, semester: 12, id: "XPA" };
}

function printPerson(person: Person) {
  console.log(`Name is ${person.name}, Age is ${person.age}`); // Name is Ken, Age is 30
}

function studyForAnotherSemester(student: Studying) {
  student.semester++;
}

function isLongTimeStudent(student: Student) {
  return student.age - student.semester / 2 > 30 && student.semester > 20;
}

const me = createPerson();

printPerson(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);
