const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// const { dateFormat } = require('../utils/dateFormat');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (date) => {return dateFormat(date)},
    },
    username: {
      type: String, 
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})


// Initialize our thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
