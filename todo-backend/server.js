const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "Sample task" }
];

let idCounter = 2;

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = {
    id: idCounter++,
    text: req.body.text
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
    todo.text = req.body.text;
  }

  res.json(todo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});