const personDAO = require("../dao/person");

class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }
  getAllPersons() {
    return personDAO.getAllPersons();
  }
}
module.exports = new PersonService();
