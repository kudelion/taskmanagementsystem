const mongoose = require('mongoose');
const Task = require('../models/task');

mongoose.connect('mongodb://127.0.0.1:27017/task-db')
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

const seedDb = async() => {
    const tasks = new Task ({
        task: 'Create message inquiry report',
        description: 'Update the report with the latest data',
        assignTo: 'John Doe',
        dueDate: '2025-1-12',
        },

    )
    await tasks.save();
};

seedDb().then(() => {
    mongoose.connection.close();
    }
);