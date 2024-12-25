const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/', taskController.tasks);
router.get('/new-task', taskController.newTask);
router.post('/create-task', taskController.createTask);
router.get('/:id', taskController.viewTask);
router.get('/:id/edit', taskController.editTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;

