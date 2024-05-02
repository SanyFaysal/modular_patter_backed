const express = require("express");
const { createUser, getUser } = require("./user.controller");
const { checkUserName } = require("../../middlewares/checkUserName");

const router = express.Router();

router.get("/", getUser);
router.post("/", checkUserName, createUser);

// router
// .route("/")
// .get(getUser)
// .post(createUser)
// .delete();

module.exports = router;
