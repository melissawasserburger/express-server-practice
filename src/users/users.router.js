const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const pastesRouter = require("../pastes/pastes.router");

router.use("/:userId/pastes", controller.userExists, pastesRouter);

router.route("/:userId").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;

/*
Note: You wouldn't want to leave the pastes router attached to the /users 
router in a real app. That's because as it is written, it will behave in 
some unexpected and non‑RESTful ways.
*/