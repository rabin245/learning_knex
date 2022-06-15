const db = require("../db/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    return await db("person")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .returning("id");
  }

  async getAllPersons() {
    return await db.select().from("person");
  }
}

module.exports = new PersonDAO();
