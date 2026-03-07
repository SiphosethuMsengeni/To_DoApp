const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "Sample task", completed: false, priority: 'medium', dueDate: null }
];

let idCounter = 2;

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = {
    id: idCounter++,
    text: req.body.text,
    completed: false,
    priority: req.body.priority || 'medium',
    dueDate: req.body.dueDate || null
  };
  todos.push(todo);
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Deleted" });
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (todo) {
    if (req.body.text !== undefined) todo.text = req.body.text;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;
    if (req.body.priority !== undefined) todo.priority = req.body.priority;
    if (req.body.dueDate !== undefined) todo.dueDate = req.body.dueDate;
  }

  res.json(todo);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});