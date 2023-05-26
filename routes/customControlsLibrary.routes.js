module.exports = app => {
    const customControlsLibrary = require("../controllers/customControlsLibrary.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", customControlsLibrary.create);
  
    // Retrieve all Tutorials
    router.get("/", customControlsLibrary.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", customControlsLibrary.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", customControlsLibrary.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", customControlsLibrary.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", customControlsLibrary.delete);
  
    // Create a new Tutorial
    router.delete("/", customControlsLibrary.deleteAll);
  
    app.use('/api/customControlsLibrary', router);
  };