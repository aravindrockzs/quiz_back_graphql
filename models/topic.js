const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
});

module.exports = Topic = mongoose.model('topic', topicSchema);
