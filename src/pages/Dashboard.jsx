import { Link } from 'react-router-dom'

function Dashboard() {
  const userName = localStorage.getItem('userName') || 'Employee'
  const leaves = JSON.parse(localStorage.getItem('leaves')) || []

  const userLeaves = leaves.filter((leave) => leave.employeeName === userName)

  const totalLeaves = 20
  const appliedLeaves = userLeaves.length
  const usedLeaves = userLeaves.filter((leave) => leave.status === 'Approved').length
  const remainingLeaves = totalLeaves - usedLeaves

  const recentLeaves = [...userLeaves].reverse().slice(0, 5)

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">ELMS</h2>
        <nav className="sidebar-menu">
          <Link to="/dashboard" className="active-link">Dashboard</Link>
          <Link to="/apply-leave">Apply Leave</Link>
          <Link to="/leave-history">Leave History</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {userName}</p>
          </div>
        </header>

        <section className="stats-grid four-cards">
          <div className="stat-card">
            <h3>Total Leaves</h3>
            <p>{totalLeaves}</p>
          </div>

          <div className="stat-card">
            <h3>Applied Leaves</h3>
            <p>{appliedLeaves}</p>
          </div>

          <div className="stat-card">
            <h3>Used Leaves</h3>
            <p>{usedLeaves}</p>
          </div>

          <div className="stat-card">
            <h3>Remaining Leaves</h3>
            <p>{remainingLeaves}</p>
          </div>
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/apply-leave" className="action-btn">Apply Leave</Link>
            <Link to="/leave-history" className="action-btn">View History</Link>
            <Link to="/profile" className="action-btn">My Profile</Link>
          </div>
        </section>

        <section className="recent-section">
          <h2>Recent Leave Requests</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeaves.length > 0 ? (
                  recentLeaves.map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.leaveType}</td>
                      <td>{leave.fromDate}</td>
                      <td>{leave.toDate}</td>
                      <td>
                        <span className={`status ${leave.status.toLowerCase()}`}>
                          {leave.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-data">
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

export default Dashboard