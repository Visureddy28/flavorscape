var mongoose = require('mongoose');

var menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  eligibility: String,
  deadline: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },  
});
var reservationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  scholarshipName: {
    type: String,
    required: true,
  },
  essay: {
    type: String,
    required: true,
  },
  });
mongoose.model('MenuItem', menuItemSchema);
mongoose.model('Reservation', reservationSchema);