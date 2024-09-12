const express = require("express");
const {
  getAllTasks,
  createNewTasks,
  singleTasks,
  updateTasks,
  editTask,
  deleteTasks,
} = require("../controllers/tasks.js");

const router = express.Router();

// router.get("/", getAllTasks);
// router.post("/", createNewTasks);
// router.get("/:id", singleTasks);
// router.patch("/:id", updateTasks);
// router.put("/:id", editTask);
// router.delete("/:id", deleteTasks);

router.route("/").get(getAllTasks).post(createNewTasks);
router.route("/:id").get(singleTasks).patch(updateTasks).put(editTask).delete(deleteTasks);

module.exports = router;
