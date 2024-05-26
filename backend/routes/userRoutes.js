const express = require("express");
const {registerUser, loginUser, homepage } = require("../controllers/UsersController");
const auth  = require("../middlewares/auth");
const {createDirectory, fetchDirectories} = require("../controllers/DirController");


const router = express.Router();

// Public Routes;
router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/createDirectory", createDirectory);
router.post("/fetchDirectories", fetchDirectories);

// Private Routes;
router.get("/homepage", auth, homepage);

module.exports = router;