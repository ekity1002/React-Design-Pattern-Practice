import { useState, useEffect } from 'react'

// HOCパターン適用前: ロジックが各コンポーネントに重複している

interface User {
  name: string
  role: string
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setUser({ name: 'Taro Yamada', role: 'Developer' })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <div>Loading user...</div>
  if (!user) return <div>No user data</div>

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  )
}

function ProductList() {
  const [products, setProducts] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setProducts(['Product A', 'Product B', 'Product C'])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <div>Loading products...</div>
  if (!products) return <div>No products</div>

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Product List</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  )
}

export { UserProfile, ProductList }
