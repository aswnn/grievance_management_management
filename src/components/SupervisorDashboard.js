import React from 'react';
import './SupervisorDashboard.css';
import { useNavigate} from 'react-router-dom';

const SupervisorDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="supervisor-dashboard">
      <div className="sidebar">
        <h2>Supervisor Dashboard</h2>
        <div className="status-box">
          <h3>Total number of complaints</h3>
          <p>--</p>
        </div>
        <div className="status-box">
          <h3>Complaints Forwarded</h3>
          <p>--</p>
        </div>
        <div className="status-box">
          <h3>Pending Complaints</h3>
          <p>--</p>
        </div>
        <button className="logout-button" onClick={()=>navigate('/auth')}>Logout</button>
      </div>
      
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Grievance ID</th>
              <th>Branch of Complaint</th>
              <th>View</th>
              <th>Forward</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
              <td>--</td>
              <td>
                <span className="icon view-icon">👁️</span></td>
                <td><span className="icon forward-icon">➡️</span></td>
                <td><span className="icon delete-icon">🗑️</span>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
