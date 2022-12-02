const { Schema, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat.js');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 250,
      default: 'Empty Re'
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (date) => dateFormat(date)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
module.exports = reactionSchema;
