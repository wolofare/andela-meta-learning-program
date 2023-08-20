import { Person } from "./../@types/person.d";
/**
 *
 * @param {Person} person
 */

function printPerson(person: Person) {
  console.log(`${person.name}, ${person.age}`);
}
