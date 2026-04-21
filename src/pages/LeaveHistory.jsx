import { Link } from 'react-router-dom'

function LeaveHistory() {
  const userName = localStorage.getItem('userName') || 'Employee'
  const leaves = JSON.parse(localStorage.getItem('leaves')) || []

  const userLeaves = leaves.filter(
    (leave) => leave.employeeName === userName
  )

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">ELMS</h2>
        <nav className="sidebar-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/apply-leave">Apply Leave</Link>
          <Link to="/leave-history" className="active-link">Leave History</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Leave History</h1>
            <p>View all your submitted leave requests</p>
          </div>
        </header>

        <section className="recent-section">
          <h2>My Leave Records</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Employee ID</th>
                  <th>Leave Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {userLeaves.length > 0 ? (
                  userLeaves.map((leave, index) => (
                    <tr key={leave.id}>
                      <td>{index + 1}</td>
                      <td>{leave.employeeId}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.fromDate}</td>
                      <td>{leave.toDate}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <span
                          className={`status ${leave.status.toLowerCase()}`}
                        >
                          {leave.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-data">
                      No leave records found
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

export default LeaveHistory