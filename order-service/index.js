const express = require('express');
const app = express();
app.use(express.json());

const orders = [];
let idCounter = 1;

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  const order = req.body;
  if (!order) {
    return res.status(400).json({ error: "Order details are required" });
  }
  order.id = idCounter++;
  order.status = "PENDING";
  orders.push(order);
  res.status(201).json(order);
});

app.get('/orders/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  res.json(order);
});

const PORT = 8082;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
