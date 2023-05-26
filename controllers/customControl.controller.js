const dbTest = require("../models");
const CustomControl = dbTest.customControls;
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
  const customControl = {
    name: req.body.name,
    field: req.body.field,
    control: req.body.control,
    description: req.body.description,
    icon: req.body.icon,
    content: req.body.content,
    // published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  CustomControl.create(customControl)
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
  CustomControl.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Custom Controls."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CustomControl.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Custom Control with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Custom Control with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    CustomControl.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Custom Control was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Custom Control with id=${id}. Maybe Custom Control was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Custom Control with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    CustomControl.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Custom Control was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Custom Control with id=${id}. Maybe Custom Control was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Custom Control with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  CustomControl.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Custom Control were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Custom Controls."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  CustomControl.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Custom Controls."
      });
    });
};