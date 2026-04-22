import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminPanel() {
  const [leaves, setLeaves] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem('leaves')) || []
    setLeaves(storedLeaves)
  }, [])

  const updateLeaveStatus = (id, newStatus) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id && leave.status === 'Pending'
        ? { ...leave, status: newStatus }
        : leave
    )

    setLeaves(updatedLeaves)
    localStorage.setItem('leaves', JSON.stringify(updatedLeaves))
  }

  const handleDeleteRecord = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this leave record?'
    )

    if (!confirmDelete) return

    const updatedLeaves = leaves.filter((leave) => leave.id !== id)

    setLeaves(updatedLeaves)
    localStorage.setItem('leaves', JSON.stringify(updatedLeaves))
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">ELMS</h2>
        <nav className="sidebar-menu">
          <Link to="/admin" className="active-link">Admin Panel</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/apply-leave">Apply Leave</Link>
          <Link to="/leave-history">Leave History</Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Admin Panel</h1>
            <p>Manage all employee leave requests</p>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Total Requests</h3>
            <p>{leaves.length}</p>
          </div>

          <div className="stat-card">
            <h3>Approved</h3>
            <p>{leaves.filter((leave) => leave.status === 'Approved').length}</p>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <p>{leaves.filter((leave) => leave.status === 'Pending').length}</p>
          </div>
        </section>

        <section className="recent-section">
          <h2>All Leave Requests</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Employee Name</th>
                  <th>Employee ID</th>
                  <th>Leave Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {leaves.length > 0 ? (
                  leaves.map((leave, index) => (
                    <tr key={leave.id}>
                      <td>{index + 1}</td>
                      <td>{leave.employeeName}</td>
                      <td>{leave.employeeId}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.fromDate}</td>
                      <td>{leave.toDate}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <span className={`status ${leave.status.toLowerCase()}`}>
                          {leave.status}
                        </span>
                      </td>
                      <td>
                        {leave.status === 'Pending' ? (
                          <div className="action-group">
                            <button
                              className="approve-btn"
                              onClick={() => updateLeaveStatus(leave.id, 'Approved')}
                            >
                              Approve
                            </button>

                            <button
                              className="reject-btn"
                              onClick={() => updateLeaveStatus(leave.id, 'Rejected')}
                            >
                              Reject
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() => handleDeleteRecord(leave.id)}
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <div className="action-group">
                            <span className="no-action">No Action</span>
                            <button
                              className="delete-btn"
                              onClick={() => handleDeleteRecord(leave.id)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="no-data">
                      No leave requests found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AdminPanel