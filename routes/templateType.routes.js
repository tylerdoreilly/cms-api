module.exports = app => {
    const templateTypes = require("../controllers/templateTypes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", templateTypes.create);
  
    // Retrieve all Tutorials
    router.get("/", templateTypes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", templateTypes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", templateTypes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", templateTypes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", templateTypes.delete);
  
    // Create a new Tutorial
    router.delete("/", templateTypes.deleteAll);
  
    app.use('/api/templateTypes', router);
  };