module.exports = app => {
  const car = require("../controllers/tutorial.controller");

  let router = require("express").Router();

  // Create a new Car
  router.post("/", car.create);

  // Retrieve all Cars
  router.get("/", car.findAll);

  // Retrieve all published Cars
  router.get("/published", car.findAllPublished);

  // Retrieve a single Car with id
  router.get("/:id", car.findOne);

  // Update a Car with id
  router.put("/:id", car.update);

  // Delete a Car with id
  router.delete("/:id", car.delete);

  // Delete all Cars
  router.delete("/", car.deleteAll);

  app.use("/api/car", router);
};