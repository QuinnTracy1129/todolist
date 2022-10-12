const router = require("express").Router(),
  { browse, save, update, destroy } = require("../controllers/Tasks");

router
  .get("/", browse)
  .post("/save", save)
  .put("/:id/update", update)
  .delete("/:id/destroy", destroy);

module.exports = router;
