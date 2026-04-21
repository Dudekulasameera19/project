import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear()
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Logging out...</h2>
    </div>
  )
}

export default Logout