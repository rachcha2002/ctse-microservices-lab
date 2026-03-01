const express = require('express');
const app = express();
app.use(express.json());

const items = ["Book", "Laptop", "Phone"];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body;
  if (!item || !item.name) {
    return res.status(400).json({ error: "Item name is required" });
  }
  items.push(item.name); // Using Array.push in js
  res.status(201).send(`Item added: ${item.name}`);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= items.length) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json({ item: items[id] });
});

const PORT = 8081;
app.listen(PORT, () => console.log(`Item service running on port ${PORT}`));
