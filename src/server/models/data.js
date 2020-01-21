const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  Surname: { type: String, required: true },
  UserName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true }
});

const feedSchema = new mongoose.Schema({
  text: String,
  photo: String,
  mood: String,
  likes: Number,
  comments: [
    {
      user: String,
      comments: String,
      time: { type: Date, default: new Date() }
    }
  ],
  time: { type: Date, default: new Date() }
});
const Feed = mongoose.model('Feed', feedSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Feed, User };
