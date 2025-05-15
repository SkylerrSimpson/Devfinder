const mongoose = require('mongoose');

// define the schema
const ProfileSchema = new mongoose.Schema({
  _id: String,
  login: String,
  avatar_url: String,
});

// define the model
const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = {Profile, ProfileSchema};