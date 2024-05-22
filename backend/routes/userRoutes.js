const express = require("express");
const {registerUser, loginUser, homepage } = require("../controllers/UsersController");
const auth  = require("../middlewares/auth");


const router = express.Router();

// Public Routes;
router.post("/register", registerUser);
router.post("/login", loginUser);


// Private Routes;
router.get("/homepage", auth, homepage);

module.exports = router;