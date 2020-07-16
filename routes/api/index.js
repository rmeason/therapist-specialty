const router = require("express").Router();
const providerRoutes = require("./providers");

// Provider routes
router.use("/providers", providerRoutes);

module.exports = router;
