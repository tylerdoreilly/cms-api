const dbTest = require("../models");
const Project = dbTest.projects;
const TemplateData = dbTest.templateData;
const Op = dbTest.Sequelize.Op;

// Create and Save a new Project
exports.createProject = (project) => {
  return Project.create({
    title: project.title,
    description: project.description,
  })
    .then((project) => {
      console.log(">> Created project: " + JSON.stringify(project, null, 4));
      return project;
    })
    .catch((err) => {
      console.log(">> Error while creating project: ", err);
    });
};

exports.createTemplateData = (projectId, template) => {
  return TemplateData.create({
    title: template.title,
    data: template.data,
    date_asof: template.date_asof,
    active: template.active ? template.active : false,
    projectId: projectId,
  })
    .then((template) => {
      console.log(">> Created template: " + JSON.stringify(template, null, 4));
      return template;
    })
    .catch((err) => {
      console.log(">> Error while creating template: ", err);
    });
};

// exports.findProjectById = (projectId) => {
//   return Project.findByPk(projectId, { include: ["templates"] })
//     .then((project) => {
//       return project;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding project: ", err);
//     });
// };

exports.findProjectById = (req, res) => {
  const id = req.params.id;

  Project.findByPk(id, { include: ["templates"] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Project with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });
};

// exports.findTemplateDataById = (id) => {
//   return TemplateData.findByPk(id, { include: ["project"] })
//     .then((template) => {
//       return template;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding template: ", err);
//     });
// };

exports.findTemplatesByProjectId = (req, res) => {
  const id = req.params.id;

  TemplateData.findAll({
    where: {
      projectId: id,
    },
    include: ["project", "templateType"]
  })
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find Template with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Template with id=" + id
    });
  });
};


exports.findAll = (req, res) => {
  Project.findAll({include: ["templates"],})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving projects."
    });
  });
};


// Update a Project by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Project.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Project with id=${id}. Maybe Project was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Project with id=" + id
      });
    });
};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Project.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Project with id=${id}. Maybe Project was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Project with id=" + id
      });
    });
};