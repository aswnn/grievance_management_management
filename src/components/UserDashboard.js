import React, { useState } from "react";
import './UserDashboard.css';
import { useNavigate } from "react-router-dom";


function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="profile-tab">
            <h2>Profile Info</h2>
            <form>
              <div className="form-group1">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group1">
                <label>Enrollment ID</label>
                <input type="text" placeholder="Enter your enrollment ID" />
              </div>
              <div className="form-group1">
                <label>Branch</label>
                <select>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="EEE">ICE</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="MECH">MECHANICAL</option>
                </select>
              </div>
              <div className="form-group1">
                <label>Semester</label>
                <input type="text" placeholder="Enter your semester" />
              </div>
              <div className="form-group1">
                <label>Year</label>
                <input type="text" placeholder="Enter your year" />
              </div>
              <div className="form-group1">
                <label>Email ID</label>
                <input type="email" placeholder="Enter your email ID" />
              </div>
              <div className="form-group1">
                <label>Phone Number (Optional)</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <button type="submit" className="submit-btn">Save Profile</button>
            </form>
          </div>
        );
      case "register-complaint":
        return (
          <div className="complaint-tab">
            <h2>Register Complaint</h2>
            <form>
              <div className="form-group1">
                <label>Category of Grievance</label>
                <select>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Examination">Examination</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group1">
                <label>Description</label>
                <textarea placeholder="Describe your grievance"></textarea>
              </div>
              <div className="form-group1">
                <label>Upload Supporting Document (If any)</label>
                <input type="file" />
              </div>
              <button type="submit" className="submit-btn">Submit Complaint</button>
            </form>
          </div>
        );
      case "complaint-history":
        return (
          <div className="history-tab">
            <h2>Complaint History</h2>
            <table>
              <thead>
                <tr>
                  <th>Grievance ID</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>G001</td>
                  <td>Resolved</td>
                  <td><textarea placeholder="Write feedback here"></textarea></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>User Dashboard</h3>
        <ul>
          <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>Profile Info</li>
          <li className={activeTab === "register-complaint" ? "active" : ""} onClick={() => setActiveTab("register-complaint")}>Register Complaint</li>
          <li className={activeTab === "complaint-history" ? "active" : ""} onClick={() => setActiveTab("complaint-history")}>Complaint History</li>
          <li><button className="logout-btn" onClick={()=>navigate('/auth')}>Logout</button></li>
        </ul>
      </div>
      <div className="content">
        {renderTabContent()}
      </div>
    </div>
  );
}


export default UserDashboard;
