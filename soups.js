const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

// Create a POST /soups route. It should add a new soup name to the soups array
// from the name property of the req.query object. It should also set a status code for 'Created'

app.post('/soups', (req, res, next) => {
  const name = req.query.name
  soups.push(name);
  res.status(201).send(name);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
