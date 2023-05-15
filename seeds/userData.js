const { User } = require('../models');

const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('password1234', 10);
// passwords for seed data will now be "password123"

const userData = [
  {
    username: 'tester1',
    email: 'tester1@gmail.com',
    password: hash,
  },
  {
    username: 'tester2',
    email: 'tester2@gmail.com',
    password: hash,
  },
  {
    username: 'tester3',
    email: 'tester3@gmail.com',
    password: hash,
  },
  {
    username: 'tester4',
    email: 'tester4@gmail.com',
    password: hash,
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;