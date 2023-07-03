import React, { useState } from 'react';
import './EmployeeDashboard.css';
import EmployeeDashboard from './EmployeeDashboard';
import HRDashboard from './HRDashboard';

const Dashboard = ({ isHRLogin }) => {
  return (
    <div className='dashboard'>
      {isHRLogin ? <EmployeeDashboard  /> : <HRDashboard/>}
    </div>
  );
};

export default Dashboard;
