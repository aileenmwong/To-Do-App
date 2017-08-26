\connect todo_db_dev

CREATE TABLE IF NOT EXISTS tasks (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  status VARCHAR(255),
  category VARCHAR(255)
);
