const tasksController = require('../controllers/tasks-controller');
const express = require('express');
const taskRoutes = express.Router();

taskRoutes.get('/', tasksController.index);
taskRoutes.post('/', tasksController.create);

taskRoutes.get('/add', (req, res) => {
  res.render('todo-add');
});

taskRoutes.put('/:id', tasksController.update);
taskRoutes.get('/:id', tasksController.show);
taskRoutes.delete('/:id', tasksController.delete);

taskRoutes.get('/:id/edit', tasksController.edit);



module.exports = taskRoutes;
