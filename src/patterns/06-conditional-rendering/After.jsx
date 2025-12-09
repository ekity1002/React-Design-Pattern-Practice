import React, { useState } from 'react'

// TODO: 条件付きレンダリングのパターンを実装してください
// ヒント:
// 1. 三項演算子を使う
// 2. &&演算子を使う
// 3. Early returnを使う
// 4. より読みやすいコードになる

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

  // TODO: より読みやすい条件付きレンダリングに書き換える
  return <div>Conditional Rendering Pattern - TODO</div>
}

export default UserDashboard
