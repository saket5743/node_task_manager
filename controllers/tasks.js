const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ success: true, data: { tasks }, nbHits: tasks.length })
  // res.status(200).json({ status: "success", data: { tasks }, nbHits: tasks.length })
})

const createNewTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
})

const singleTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    res.status(404).json({ msg: `No task with id:${taskId}` });
  }
  res.status(201).json({ task });
})

// PATCH
const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id:${taskId}` });
  }
  return res.status(200).json({ task });
})

// PUT
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id:${taskId}` });
  }
  return res.status(200).json({ task });
})

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id:${taskId}` });
  }
  res.status(200).json(task);
})

module.exports = {
  getAllTasks,
  createNewTasks,
  singleTasks,
  updateTasks,
  deleteTasks,
  editTask
};
