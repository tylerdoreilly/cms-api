module.exports = app => {
    const customControls = require("../controllers/customControl.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", customControls.create);
  
    // Retrieve all Tutorials
    router.get("/", customControls.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", customControls.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", customControls.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", customControls.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", customControls.delete);
  
    // Create a new Tutorial
    router.delete("/", customControls.deleteAll);
  
    app.use('/api/customControls', router);
  };