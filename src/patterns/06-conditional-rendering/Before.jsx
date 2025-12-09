import React, { useState } from 'react'

// 条件付きレンダリング適用前: if-else文が複雑

function UserDashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadUser = (shouldError = false) => {
    setLoading(true)
    setError(null)
    setTimeout(() => {
      if (shouldError) {
        setError('Failed to load user')
        setUser(null)
      } else {
        setUser({ name: 'John Doe', role: 'Admin' })
      }
      setLoading(false)
    }, 1000)
  }

  let content
  if (loading) {
    content = <div>Loading...</div>
  } else {
    if (error) {
      content = <div style={{ color: 'red' }}>Error: {error}</div>
    } else {
      if (user) {
        content = (
          <div>
            <h3>Welcome, {user.name}!</h3>
            <p>Role: {user.role}</p>
          </div>
        )
      } else {
        content = <div>No user data</div>
      }
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      {content}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => loadUser(false)} style={{ marginRight: '10px' }}>
          Load User
        </button>
        <button onClick={() => loadUser(true)}>
          Simulate Error
        </button>
      </div>
    </div>
  )
}

export default UserDashboard
