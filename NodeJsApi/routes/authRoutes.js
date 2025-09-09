const express = require("express");
const router = express.Router();
 
const  {createOrUpdateUser,currentUser} = require("../controller/authController");


router.post("/create-or-update-user", createOrUpdateUser);
router.post("/current-user", currentUser);


module.exports = router;