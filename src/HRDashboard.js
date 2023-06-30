// HRDashboard.js

import React from 'react';
import './HRDashboard.css';

const HRDashboard = () => {
  // Dummy data for employees on leave
  const employeesOnLeave = [
    {
      employeeName: 'John Doe',
      leaveType: 'Annual Leave',
      numberOfDays: 5,
      startingDate: '2023-06-01',
      department: 'Sales',
      reason: 'Vacation',
    },
    {
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      numberOfDays: 3,
      startingDate: '2023-06-10',
      department: 'Marketing',
      reason: 'Flu',
    },
    {
      employeeName: 'Mike Johnson',
      leaveType: 'Casual Leave',
      numberOfDays: 2,
      startingDate: '2023-06-15',
      department: 'Finance',
      reason: 'Personal',
    },
    // Add more employee leave entries
  ];

  return (
    <div className="dashboard-container">
      <h1 className="welcome-heading">Welcome Back, HR (Name)</h1>

      <h2 className="table-heading">Current Employees on Leave</h2>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Number of Days</th>
            <th>Starting Date</th>
            <th>Department</th>
            <th>Reason of Leave</th>
          </tr>
        </thead>
        <tbody>
          {employeesOnLeave.map((employee, index) => (
            <tr key={index}>
              <td>{employee.employeeName}</td>
              <td>{employee.leaveType}</td>
              <td>{employee.numberOfDays}</td>
              <td>{employee.startingDate}</td>
              <td>{employee.department}</td>
              <td>{employee.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HRDashboard;
