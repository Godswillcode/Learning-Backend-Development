const express = require("express");

const userCtrl = require("../controller/controller");


const router = express.Router();

router.post("/",userCtrl.createUser);

router.get("/",userCtrl.getUsers)


module.exports = router;