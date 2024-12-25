const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
        task: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        assignTo:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
        dueDate:{
            type: Date,
            required: true,
        },
        taskStatus:{
            type: Boolean,
            default: false,
        }
    }
)

module.exports = mongoose.model('Task', taskSchema);
