const { Post } = require('../models');

const postData = [
  {
    title: 'test 1',
    user_id: 1,
    contents:'This is my test 1',
  },
  {
    title: 'test 2',
    user_id: 2,
    contents:'This is my test 2',
  },
  {
    title: 'test 3',
    user_id: 3,
    contents:'This is my test 3',
  },
  {
    title: "test 4",
    user_id: 4,
    contents:'This is my test 4',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;