// app.js
const express = require('express');
const members = require('./members');
const getUsersData = require('./users');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const responseJson = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #02',
    Date: currentDate,
    Data: members,
  };
  res.json(responseJson);
});

app.get('/users', async (req, res) => {
  const usersData = await getUsersData();
  res.json(usersData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
