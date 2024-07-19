require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

const handleQuery = require('./model');

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to my chatbot backend!!");
});

app.post('/query', async (req, res) => {
  const { query } = req.body;
  
  const result = await handleQuery(query);
  
  res.json({
    message: 'Query processed',
    result: result,
  });
});

app.post('/chatbot', async (req, res) => {
  const { query } = req.body;
  
  const result = await handleQuery(query);
  
  res.json({
    message: 'Query processed',
    result: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
