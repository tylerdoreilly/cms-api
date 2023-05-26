module.exports = app => {
    const projects = require("../controllers/project.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Project
    router.post("/", projects.createProject);
  
    // Retrieve all Project
    router.get("/", projects.findAll);
  
    // Retrieve a single Project with id
    router.get("/:id", projects.findProjectById);

    // Retrieve templates by project Id
    router.get("/:id/templates", projects.findTemplatesByProjectId);
  
    // Update a Project with id
    router.put("/:id", projects.update);
  
    // Delete a Project with id
    router.delete("/:id", projects.delete);
  
    app.use('/api/projects', router);
  };