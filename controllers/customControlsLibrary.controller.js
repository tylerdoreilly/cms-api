const dbTest = require("../models");
const CustomLibraryControl = dbTest.customControlsLibrary;
const Op = dbTest.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const customLibraryControl = {
    name: req.body.name,
    field: req.body.field,
    control: req.body.control,
    description: req.body.description,
    icon: req.body.icon,
    content: req.body.content,
    published: req.body.published ? req.body.published : false,
    date_asof: req.body.date_asof,
  };

  // Save Tutorial in the database
  CustomLibraryControl.create(customLibraryControl)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Custom Control."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  CustomLibraryControl.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Custom Library Controls."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CustomLibraryControl.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Custom Library Control with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Custom Library Control with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    CustomLibraryControl.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Custom Library Control was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Custom Control with id=${id}. Maybe Custom Library Control was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Custom Library Control with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CustomLibraryControl.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Custom Library Control was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Custom Library Control with id=${id}. Maybe Custom Library Control was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Custom Library Control with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  CustomLibraryControl.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Custom Library Control were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Custom Library Control."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  CustomLibraryControl.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Custom Library Control."
      });
    });
};