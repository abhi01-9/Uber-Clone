const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// fuction code call 

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First nmae must be at least 3 character long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last nmae must be at least 3 character long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 Character long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be atleast 3 character long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be atleast 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);


module.exports = captainModel;
