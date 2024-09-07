import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import './UserDashboard.js';
import './SupervisorDashboard.js';
import './AssigneeDashboard.js';

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        Swal.fire({
          title: 'Account Exists',
          text: 'Account already exists. Please sign in.',
          customClass: {
            popup: 'custom-swal-popup',
            confirmButton: 'custom-swal-button',
            text: 'custom-swal-text',
            title: 'custom-swal-title',
          },
        });
        setIsSignup(false);
        return;
      }
      if (password.length < 4) {
        Swal.fire({
          text: 'Password must be at least 4 characters.',
          customClass: {
            popup: 'custom-swal-popup',
            confirmButton: 'custom-swal-button',
            text: 'custom-swal-text',
          },
        });
        return;
      }

      if (password !== confirmPassword) {
        Swal.fire({
          title: 'Passwords do not match',
          customClass: {
            popup: 'custom-swal-popup1',
            confirmButton: 'custom-swal-button',
            text: 'custom-swal-text',
            title: 'custom-swal-title1',
          },
        });
        return;
      }

      // Save the user's details to local storage as a simple registration simulation
      localStorage.setItem(email, JSON.stringify({ password }));
      Swal.fire({
        title: 'Account Created',
        customClass: {
          popup: 'custom-swal-popup1',
          confirmButton: 'custom-swal-button',
          text: 'custom-swal-text',
          title: 'custom-swal-title1',
        },
      });
      setIsSignup(false); 
    } else if (isForgotPassword) {
      // Handle verification code entry and password reset
      if (!isCodeVerified) {
        if (verificationCode === generatedCode) {
          setIsCodeVerified(true);
          Swal.fire({
            title: 'Code Verified',
            text: 'You can now reset your password.',
            customClass: {
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-button',
              text: 'custom-swal-text',
              title: 'custom-swal-title',
            },
          });
        } else {
          Swal.fire({
            title: 'Incorrect Code',
            text: 'The verification code is incorrect. Please try again.',
            customClass: {
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-button',
              text: 'custom-swal-text',
              title: 'custom-swal-title',
            },
          });
        }
      } else {
        // Update the password if the code is verified
        const storedUser = localStorage.getItem(email);
        if (!storedUser) {
          Swal.fire({
            title: 'Email Not Registered',
            text: 'Please sign up first.',
            customClass: {
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-button',
              text: 'custom-swal-text',
              title: 'custom-swal-title',
            },
          });
          setIsSignup(true);
        } else {
          if (newPassword.length < 4) {
            Swal.fire({
              text: 'Password must be at least 4 characters.',
              customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button',
                text: 'custom-swal-text',
              },
            });
            return;
          }
          const updatedUser = JSON.parse(storedUser);
          updatedUser.password = newPassword;
          localStorage.setItem(email, JSON.stringify(updatedUser));
          Swal.fire({
            title: 'Password Updated',
            text: 'Your password has been successfully updated.',
            customClass: {
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-button',
              text: 'custom-swal-text',
              title: 'custom-swal-title',
            },
          });
          setIsForgotPassword(false);
          setIsCodeVerified(false);
        }
      }
    } else {
      // Check if the user is registered
      const storedUser = localStorage.getItem(email);

      if (email === 'admin@admin.com' && password === '1234') {
        navigate('/supervisor-dashboard');
        return;
      } else if (email === 'assignee@gmail.com' && password === '1234') {
        navigate('/assignee-dashboard');
        return;
      } else if (!storedUser) {
        Swal.fire({
          title: 'Email Not Registered',
          text: 'Please sign up first.',
          customClass: {
            popup: 'custom-swal-popup',
            confirmButton: 'custom-swal-button',
            text: 'custom-swal-text',
            title: 'custom-swal-title',
          },
        });
        setIsSignup(true); // Switch to signup if not registered
      } else {
        const userDetails = JSON.parse(storedUser);
        if (userDetails.password === password) {
          navigate('/user-dashboard');
        } else {
          Swal.fire({
            title: 'Incorrect Password',
            text: 'Please try again.',
            customClass: {
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-button',
              text: 'custom-swal-text',
              title: 'custom-swal-title',
            },
          });
        }
      }
    }
  };

  const sendVerificationCode = () => {
    // Simulate sending a verification code (4-digit code generation)
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
    setIsCodeVerified(false);
    Swal.fire({
      title: 'Verification Code Sent',
      text: `Verification code: ${code}`,
      // For demo purposes; in real applications, send via email
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-button',
        text: 'custom-swal-text',
        title: 'custom-swal-title',
      },
    });
  };

  return (
    <div className="auth-container">
      <h1 className="title1">Grievance Redressal Cell</h1>
      <div className="auth-form">
        <h2>{isSignup ? 'Sign Up' : isForgotPassword ? 'Reset Password' : 'Sign In'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {!isForgotPassword && (
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {!isSignup && (
                <button
                  type="button"
                  className="btn-link forgot-password-link"
                  onClick={() => {
                    setIsForgotPassword(true);
                    sendVerificationCode();
                  }}
                >
                  Forgot Password?
                </button>
              )}
            </div>
          )}

          {isSignup && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {isForgotPassword && !isCodeVerified && (
            <div className="form-group">
              <label>Enter Verification Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the code sent to your email"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn-link forgot-password-link"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Sign In
              </button>
            </div>
          )}

          {isForgotPassword && isCodeVerified && (
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="btn-block">
            {isSignup
              ? 'Sign Up'
              : isForgotPassword
              ? isCodeVerified
                ? 'Reset Password'
                : 'Verify Code'
              : 'Sign In'}
          </button>

          <button
            type="button"
            className="btn-link"
            onClick={() => {
              setIsSignup(!isSignup);
              setIsForgotPassword(false);
              setIsCodeVerified(false);
            }}
          >
            {isSignup ? 'Have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
