const mongoose = require('mongoose');
const Task = require('../../models/task');

mongoose.connect('mongodb://127.0.0.1:27017/task-db')
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

    // List of all tasks
    exports.tasks = async(req, res) => {
        const tasks = await Task.find({});
        // console.log(tasks);
        res.render('index', {tasks});
    };

    // Add a new task form
    exports.newTask = (req, res) => {
        res.render('new-task');
    };

    // Create a new task
    exports.createTask = async(req, res) => {
        const task = new Task(req.body);
        await task.save();
        res.redirect('/tasks');
    };

    // View a task
    exports.viewTask = async(req, res) => {
        const task = await Task.findById(req.params.id);
        res.render('view-task', {task});
    };

    // Edit a task form
    exports.editTask = async(req, res) => {
        const task = await Task.findById(req.params.id);
        res.render('edit-task', {task});
    };

    // Update a task
    exports.updateTask = async(req, res) => {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id,{...req.body});
        res.redirect(`/tasks/${id}`);
    }

    // Delete a task
    exports.deleteTask = async(req, res) => {
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/tasks');
    }





