const express = require("express");
const router = express.Router();

//accessing employee related routes
router.use("/employee", require("./employee"));

module.exports = router;
