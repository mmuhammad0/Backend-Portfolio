const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.use(protect);

router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
  ],
  createTask
);

router.get('/', getTasks);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;