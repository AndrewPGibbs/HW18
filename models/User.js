const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
       null: false,
       unique: true,
       required: true,
       max_length: 25,
      
      },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 60,
    },
    thoughts: [
      {
       type: Schema.Types.ObjectId,
       ref: 'Thought',
      },
    ],
    friends:  [
      {
    type: Schema.Types.ObjectId,
    unique: false,
    ref: 'User',
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
userSchema.virtual('friendCount')
.get(function () {
  return this.friends.length;
})
// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
