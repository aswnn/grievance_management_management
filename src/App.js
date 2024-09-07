import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserDashboard from './components/UserDashboard';
import SupervisorDashboard from './components/SupervisorDashboard';
import AssigneeDashboard from './components/AssigneeDashboard';
import AuthPage from './components/AuthPage'; 
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user-dashboard" element={<PrivateRoute role={"User"} ><UserDashboard /></PrivateRoute>} />
          <Route path="/supervisor-dashboard" element={<PrivateRoute role={"Supervisor"}><SupervisorDashboard /></PrivateRoute>} />
          <Route path="/assignee-dashboard" element={<PrivateRoute role={"Assignee"}><AssigneeDashboard /></PrivateRoute>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
