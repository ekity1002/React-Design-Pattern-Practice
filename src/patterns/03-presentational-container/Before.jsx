import React, { useState, useEffect } from 'react'

// Presentational & Container パターン適用前
// ロジックと表示が混在している

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  )

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>User List</h3>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
