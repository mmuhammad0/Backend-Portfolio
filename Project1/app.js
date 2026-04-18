const express = require ('express')
const app = express()
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/tasks', taskRoutes);

app.use('/api/auth', authRoutes);

 app.use(express.json())

 app.get('/', (req, res) =>{
    res.send('api run')})

module.exports = app
