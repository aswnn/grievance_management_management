import React from 'react';
import './AssigneeDashboard.css';
import { useNavigate } from 'react-router-dom';

const AssigneeDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="assignee-dashboard">
      <div className="assignee-sidebar">
        <h2>Assignee Dashboard</h2>
        <div className="assignee-status-box">
          <h3>Complaints Forwarded by Supervisor</h3>
          <p>--</p>
        </div>
        <div className="assignee-status-box">
          <h3>Pending Complaints</h3>
          <p>--</p>
        </div>
        <button className="assignee-logout-button" onClick={()=>navigate('/')}>Logout</button>
      </div>
      
      <div className="assignee-content">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Grievance ID</th>
              <th>Branch</th>
              <th>View Comments</th>
              <th>Feedback Received</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
              <td>--</td>
              <td>
                <span className="assignee-icon view-comments-icon">👁️</span>
              </td>
              <td>
                <span className="assignee-icon feedback-received-icon">💬</span>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssigneeDashboard;
