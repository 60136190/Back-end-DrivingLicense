const mongoose = require('mongoose');
const HistorySchema = new mongoose.Schema(
  {
    mark: {
      type: String,
      required: true,
      trim: true,
    },
    idUser:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
  }

);

module.exports = mongoose.model('HistoryTest', HistorySchema);
