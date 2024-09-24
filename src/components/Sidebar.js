import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Options</h2>
      <ul>
        <li>Chat History</li>
        <li>User Settings</li>
        <li>Help</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
