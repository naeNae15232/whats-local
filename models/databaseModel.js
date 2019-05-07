const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// subdocument schema for the media files 
const MediaSchema = new Schema({path: {type: String}})
// subdocument schema for the saved artist of the user
const SavedArtist = new Schema({artists: {type: String}})

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName:{
      type: String,
      trim: true,
  },
  lastName:{
      type: String,
      trim: true,
  },
  socialMediaHandles:{
      type: Map,
      of: String
  },
  profilePicture:{
    data: Buffer,
    contentType: String
  },
  media:[MediaSchema],
  favoriteArtits:[SavedArtist],
  // img1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // img2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // img3:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid3:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio3:{
  //   data: Buffer,
  //   contentType: String
  // },
  bio:{
    type: String
  },
 
  // `date` must be of type Date. The default value is the current date
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("User", UserSchema);;