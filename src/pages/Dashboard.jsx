import { Link } from 'react-router-dom'

function Dashboard() {
  const userName = localStorage.getItem('userName') || 'Employee'

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

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Total Leaves</h3>
            <p>20</p>
          </div>

          <div className="stat-card">
            <h3>Used Leaves</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>Remaining Leaves</h3>
            <p>15</p>
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
                <tr>
                  <td>Sick Leave</td>
                  <td>2026-04-02</td>
                  <td>2026-04-03</td>
                  <td><span className="status approved">Approved</span></td>
                </tr>
                <tr>
                  <td>Casual Leave</td>
                  <td>2026-04-10</td>
                  <td>2026-04-11</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Earned Leave</td>
                  <td>2026-04-15</td>
                  <td>2026-04-17</td>
                  <td><span className="status rejected">Rejected</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard