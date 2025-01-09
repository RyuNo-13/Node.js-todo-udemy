const express = require("express");
const router = express();
const {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
} = require("../controllers/task")

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getSingleTasks);
router.patch("/:id", updateTasks);
router.delete("/:id", deleteTasks);

module.exports = router;