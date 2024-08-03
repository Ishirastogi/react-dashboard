import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => onSelect('home')}>Home</li>
        <li onClick={() => onSelect('profile')}>Profile</li>
        <li onClick={() => onSelect('settings')}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
