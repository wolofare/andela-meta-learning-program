export interface Person {
  name: string;
  age: number;
}

// interface extending the original one

export interface Student extends Person {
  semester: number;
}
