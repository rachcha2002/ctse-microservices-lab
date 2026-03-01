const express = require('express');
const app = express();
app.use(express.json());

const payments = [];
let idCounter = 1;

app.get('/payments', (req, res) => {
  res.json(payments);
});

app.post('/payments/process', (req, res) => {
  const payment = req.body;
  if (!payment) {
    return res.status(400).json({ error: "Payment details are required" });
  }
  payment.id = idCounter++;
  payment.status = "SUCCESS";
  payments.push(payment);
  res.status(201).json(payment);
});

app.get('/payments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const payment = payments.find(p => p.id === id);
  if (!payment) {
    return res.status(404).json({ error: "Payment not found" });
  }
  res.json(payment);
});

const PORT = 8083;
app.listen(PORT, () => console.log(`Payment service running on port ${PORT}`));
