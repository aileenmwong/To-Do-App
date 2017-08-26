const Task = require('../models/tasks');

const tasksController = {};

tasksController.index = (req, res) => {
  Task.findAll()
  .then(tasks => {
    res.render('./todo-all', {
      data: tasks,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

tasksController.show = (req, res) => {
  Task.findById(req.params.id)
  .then(data => {
    res.render('./todo-info', {
      tasks: data,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

tasksController.create = (req, res) => {
  Task.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
  })
  .then (tasks => {
    res.redirect('/tasks');
  })
  .catch(err => {
    res.status(500).json(err);
  });
};

tasksController.update = (req, res) => {
  Task.update({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
  }, req.params.id).then(tasks => {
    res.json({
      message: 'Task updated successfully!',
      data: tasks,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

tasksController.delete = (req, res) => {
  Task.delete(req.params.id)
  .then(() => {
    res.redirect('/tasks');
    })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }


module.exports = tasksController;
