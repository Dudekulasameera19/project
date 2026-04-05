import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ApplyLeave from './pages/ApplyLeave'
import LeaveHistory from './pages/LeaveHistory'
import AdminPanel from './pages/AdminPanel'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/leave-history" element={<LeaveHistory />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App