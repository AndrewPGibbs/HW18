const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const dateFormat = require('../utils/dataFormat');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Boolean,
      default: true,
    },
    reactions: [reactionSchema] //reference activity 17 and 18
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//virtual for reaction count


// Initialize our Application model
const Thought = model('application', thoughtSchema);

module.exports = Thought;
