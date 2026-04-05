import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/login-bg.jpg'

function Login() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('employee')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    localStorage.setItem('userName', name)
    localStorage.setItem('userRole', role)

    if (role === 'admin') {
      navigate('/admin')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-layout">
        <div
          className="login-left"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="overlay"></div>
          <div className="left-text">
            <h1>Employee Leave Management System</h1>
            <p>
              Manage employee leave requests, approvals, and records in a clean
              and professional way.
            </p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <p className="login-subtitle">Please login to continue</p>

            <form onSubmit={handleLogin} className="login-form">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Select Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>

              <button type="submit">Login</button>
            </form>

            <p className="bottom-text">
              Secure login for employees and administrators
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login