const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');
const db = require('../config/connection');

async function seed() {
  try {
    //waits for the database to connect
    await db.once('open', () => {
      console.log('Database connected');
    });

    //calls the seed functions for each model
    await User.seed();
    await Post.seed();
    await Comment.seed();

    //disconnects from the database
    await db.close();
    console.log('Database disconnected');
  } catch (error) {
    console.error(error);
  }
}

seed();