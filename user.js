// users.js
const axios = require('axios');

async function getUsersData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users data:', error);
    return [];
  }
}

module.exports = getUsersData;
