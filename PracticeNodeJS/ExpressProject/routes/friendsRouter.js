const express = require("express");

const {
  postFriend,
  getFriends,
  getOneFriend,
} = require("../controllers/friendsController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("IP adress:", req.ip);
  next();
});

router.post("/", postFriend);
router.get("/", getFriends);
router.get("/:friendId", getOneFriend);

module.exports = router;
