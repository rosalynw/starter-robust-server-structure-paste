const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./pastes.controller");

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);
router.route("/:pasteId")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);

module.exports = router;