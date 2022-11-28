const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {String, null: false},
    email: {},
    thoughts: [
      {
        //AN ARRAY that references the thought objectId
      },
    ],
    friends:  [
      {
    //references the user objectID
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// the answer for creating a virtual for friendCount is in activity 21 and 23

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
