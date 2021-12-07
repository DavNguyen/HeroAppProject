const mongoose = require("mongoose");

const HeroSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hero_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  abilities: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Heroes", HeroSchema);
