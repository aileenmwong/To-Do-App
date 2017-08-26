const db = require('../db/config');

const Task = {};

Task.findAll = () => {
  return db.query('SELECT * FROM tasks');
}

Task.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM tasks
    WHERE id = $1
    `, [id]);
}

Task.create = tasks => {
  return db.one(
    `
    INSERT INTO tasks
    (title, status, category)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [tasks.title, tasks.status, tasks.category]
  );
};

Task.update = (tasks, id) => {
  return db.one(`
    UPDATE tasks SET
    title = $1,
    status = $2,
    category = $3
    WHERE id = $4
    RETURNING *
    `, [tasks.title, tasks.status, tasks.category, id]);
}

Task.delete = (id) => {
  return db.none(`
    DELETE FROM tasks
    WHERE id = $1
    `, [id]);
}

module.exports = Task;
