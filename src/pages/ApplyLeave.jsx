import { useState } from 'react'
import { Link } from 'react-router-dom'

function ApplyLeave() {
  const userName = localStorage.getItem('userName') || 'Employee'

  const [formData, setFormData] = useState({
    employeeName: userName,
    employeeId: '',
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newLeave = {
      id: Date.now(),
      ...formData,
      status: 'Pending',
    }

    const existingLeaves = JSON.parse(localStorage.getItem('leaves')) || []
    existingLeaves.push(newLeave)
    localStorage.setItem('leaves', JSON.stringify(existingLeaves))

    alert('Leave applied successfully')

    setFormData({
      employeeName: userName,
      employeeId: '',
      leaveType: '',
      fromDate: '',
      toDate: '',
      reason: '',
    })
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">ELMS</h2>
        <nav className="sidebar-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/apply-leave" className="active-link">Apply Leave</Link>
          <Link to="/leave-history">Leave History</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Apply Leave</h1>
            <p>Fill the form below to submit your leave request</p>
          </div>
        </header>

        <section className="form-section">
          <form className="leave-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  placeholder="Enter employee ID"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Leave Type</label>
                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select leave type</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Earned Leave">paid Leave</option>
                  <option value="Emergency Leave">Emergency Leave</option>
                </select>
              </div>

              <div className="form-group">
                <label>From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>To Date</label>
                <input
                  type="date"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Reason</label>
                <textarea
                  name="reason"
                  rows="5"
                  placeholder="Enter reason for leave"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Leave Request
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default ApplyLeave