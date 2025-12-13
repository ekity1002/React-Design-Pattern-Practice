

// TODO: カスタムフック版を実装してください
// ヒント:
// 1. useLoadingDataというカスタムフックを作成
// 2. データ取得関数を引数として受け取る
// 3. loading状態とdataを返す
// 4. React 18以降はHOCよりカスタムフックが推奨されます

import { useCallback, useEffect, useState } from "react";


interface User {
  name: string
  role: string
}

function useLoadingData<T>(fetcher: () => Promise<T>):
{ data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)

    fetcher().then((result) => {
      if (mounted) {
        setData(result)
        setLoading(false)
      }
    })
    return () => {
      mounted = false
    }
  }, [fetcher])
  return { data, loading }
}

function UserProfile() {
  const userFetcher = useCallback(() => {
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve({name: 'Taro Yamada', role: 'Developer'})
      }, 1000)
    })
  }, [])

  const { data: user, loading } = useLoadingData(userFetcher)
  if (loading) {
    return <div>Loading user...</div>;
  }
  if (!user) {
    return <div>No user</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>UserProfile</h3>
      <div>Name: {user.name}</div>
      <div>Role: {user.role}</div>
    </div>
  );}

function ProductList() {
  const profileFetcher = useCallback(() => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve(['Product A', 'Product B', 'Product C'])
      }, 2000)
    })
  }, [])

  const { data: products, loading } = useLoadingData(profileFetcher)

   if (loading) {
    return <div>Loading user...</div>;
  }
  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>ProductList</h3>
      <ul>
        {products.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export { ProductList, UserProfile };

