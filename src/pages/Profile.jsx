import { Link, useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName') || 'Employee'
  const userRole = localStorage.getItem('userRole') || 'employee'
  const leaves = JSON.parse(localStorage.getItem('leaves')) || []

  const userLeaves = leaves.filter((leave) => leave.employeeName === userName)

  const totalLeaves = 20
  const appliedLeaves = userLeaves.length
  const usedLeaves = userLeaves.filter(
    (leave) => leave.status === 'Approved'
  ).length
  const remainingLeaves = totalLeaves - usedLeaves

  const employeeId =
    userLeaves.length > 0
      ? userLeaves[userLeaves.length - 1].employeeId
      : 'EMP001'

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">ELMS</h2>
        <nav className="sidebar-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/apply-leave">Apply Leave</Link>
          <Link to="/leave-history">Leave History</Link>
          <Link to="/profile" className="active-link">Profile</Link>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>My Profile</h1>
            <p>Employee details and leave summary</p>
          </div>
        </header>

        <div className="profile-page">
          <div className="profile-header-card">
            <div className="profile-avatar-circle">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-header-info">
              <h2>{userName}</h2>
              <p>{userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
              <span className="profile-id-badge">{employeeId}</span>
            </div>
          </div>

          <div className="profile-summary-grid">
            <div className="summary-card">
              <h4>Total Leaves</h4>
              <p>{totalLeaves}</p>
            </div>

            <div className="summary-card">
              <h4>Applied Leaves</h4>
              <p>{appliedLeaves}</p>
            </div>

            <div className="summary-card">
              <h4>Used Leaves</h4>
              <p>{usedLeaves}</p>
            </div>

            <div className="summary-card">
              <h4>Remaining Leaves</h4>
              <p>{remainingLeaves}</p>
            </div>
          </div>

          <div className="profile-info-card">
            <h3>Employee Information</h3>

            <div className="profile-info-grid">
              <div className="info-box">
                <span>Employee Name</span>
                <strong>{userName}</strong>
              </div>

              <div className="info-box">
                <span>Employee ID</span>
                <strong>{employeeId}</strong>
              </div>

              <div className="info-box">
                <span>Role</span>
                <strong>{userRole.charAt(0).toUpperCase() + userRole.slice(1)}</strong>
              </div>

              <div className="info-box">
                <span>Department</span>
                <strong>Frontend Development</strong>
              </div>

              <div className="info-box">
                <span>Used Leaves</span>
                <strong>{usedLeaves}</strong>
              </div>

              <div className="info-box">
                <span>Remaining Leaves</span>
                <strong>{remainingLeaves}</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile