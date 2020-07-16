const router = require("express").Router();
const providersController = require("../../controllers/providersController");

// Matches with "/api/providers"
router.route("/")
  .get(providersController.findAll)
  .post(providersController.create);

// Matches with "/api/providers/:id"
router
  .route("/:id")
  .get(providerController.findById)
  .put(providersController.update)
  .delete(providersController.remove);

module.exports = router;