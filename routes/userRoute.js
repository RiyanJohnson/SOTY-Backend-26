const express = require("express");
const {
  updateScore,
  updatePassword,
  isBanStatus,
  getAllUsers
} = require("../controllers/userController");
const isAdmin = require("../middleware/validateAdminHandler");

const router = express.Router();

router.get("/allusers", getAllUsers);
router.put("/updatepassword", isAdmin, updatePassword);
router.put("/updatescore", isAdmin, updateScore);
router.put("/updateban", isAdmin, isBanStatus);

module.exports = router;
