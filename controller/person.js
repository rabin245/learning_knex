const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Something went wrong",
        error: error.detail,
      });
    }
  }

  async getAllPersons(req, res) {
    try {
      const data = await personService.getAllPersons();
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Something went wrong",
        error: error.detail,
      });
    }
  }
}

module.exports = new PersonController();
