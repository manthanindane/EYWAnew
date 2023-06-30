// Install required packages: express, mongoose

// const { default: axios } = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://eywa:12345@cluster1.pfnus6c.mongodb.net/Employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define a schema for employee leave data
const employeeLeaveSchema = new mongoose.Schema({
  leaveType: String,
  fromDate: Date,
  toDate: Date,
  fromTimeSlot: String,
  toTimeSlot: String,
  reason: String,
});

// Create a model from the schema
const EmployeeLeave = mongoose.model('leave', employeeLeaveSchema);

// Create a route to handle form submission and save data to the database
app.post('/api/leave', async (req, res) => {
  try {
    const {
      leaveType,
      fromDate,
      toDate,
      fromTimeSlot,
      toTimeSlot,
      reason,
    } = req.body;

    // Create a new employee leave document
    const employeeLeave = new EmployeeLeave({
      leaveType,
      fromDate,
      toDate,
      fromTimeSlot,
      toTimeSlot,
      reason,
    });

    // Save the employee leave document to the database
    await employeeLeave.save();

    res.status(201).json({ message: 'Leave application submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred while submitting leave application.' });
  }
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
