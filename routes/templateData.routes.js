module.exports = app => {
    const templateData = require("../controllers/templateData.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Template
    router.post("/", templateData.create);
  
    // Retrieve all Templates
    router.get("/", templateData.findAll);
  
    // Retrieve all published Templates
    router.get("/published", templateData.findAllPublished);
  
    // Retrieve a single Template with id
    router.get("/:id", templateData.findOne);
  
    // Update a Template with id
    router.put("/:id", templateData.update);
  
    // Delete a Template with id
    router.delete("/:id", templateData.delete);
  
    // Create a new Template
    router.delete("/", templateData.deleteAll);
  
    app.use('/api/templateData', router);
  };