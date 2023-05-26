const dbTest = require("../models");
const TemplateType = dbTest.templateType;
const Op = dbTest.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const templateType = {
    type: req.body.type,
  };

  // Save Tutorial in the database
  TemplateType.create(templateType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Template Type."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  TemplateType.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Template Types."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    TemplateType.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Template Type with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Template Type with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    TemplateType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Template Type was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Template Type with id=${id}. Maybe Template Type was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Template Type with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    TemplateType.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Template Type was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Template Type with id=${id}. Maybe Template Type was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Template Type with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  TemplateType.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Template Type were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Template Types."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  TemplateType.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Template Type."
      });
    });
};