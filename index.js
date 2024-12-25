// Initialize the Express app
const express = require('express');
const methodOverride = require('method-override');
const path = require('path'); 
const taskRoutes = require('./servers/routes/taskRoutes');


// Create an Express app
const app = express();

// Set the view engine to ejs
app.set('view engine','ejs');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// app.get('', (req, res) => {
//     res.send("For testing prupose");
// });

//Excute the taskRoutes
app.use('/tasks', taskRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

