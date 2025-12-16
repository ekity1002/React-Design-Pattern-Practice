import { useState } from 'react'

// 1. 三項演算子を使う
// 2. &&演算子を使う
// 3. Early returnを使う
// 4. より読みやすいコードになる

interface User {
  name: string
  role: string
}

function UserDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <div>Loading...</div>
        <ActionButtons onLoad={loadUser} />
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <div style={{ color: 'red' }}>Error: {error}</div>
        <ActionButtons onLoad={loadUser} />
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      {user ? (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <div>No user data</div>
      )}

      <ActionButtons onLoad={loadUser} />
    </div>
  )
}

function ActionButtons({ onLoad }: { onLoad: (shildError?: boolean) => void }) {
    return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => onLoad(false)} style={{ marginRight: '10px' }}>
        Load User
      </button>
      <button onClick={() => onLoad(true)}>Simulate Error</button>
    </div>
  )
}

export default UserDashboard
