import { useState } from 'react'

// TODO: 条件付きレンダリングのパターンを実装してください
// ヒント:
// 1. 三項演算子を使う
// 2. &&演算子を使う
// 3. Early returnを使う
// 4. より読みやすいコードになる

interface User {
  name: string
  role: string
}

function UserDashboard() {
  const [_user, setUser] = useState<User | null>(null)
  const [_loading, setLoading] = useState(true)
  const [_error, setError] = useState<string | null>(null)

  const _loadUser = (shouldError = false) => {
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
