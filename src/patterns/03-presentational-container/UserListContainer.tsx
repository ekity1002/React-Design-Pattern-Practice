import { useEffect, useMemo, useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

// 表示判断（Loading）をここでやる
// データ取得・filterロジックは全部ここ
// View には「完成したデータ」だけ渡す
// カスタムフックとしてロジックを実装
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    // 本来はAPIで取得
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
      ])
      setLoading(false)
    }, 1000)
    // 念のための後始末（アンマウント時にタイマーを止める）
    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = useMemo(() => {
    const query = filter.toLowerCase()
    return users.filter((user) => user.name.toLowerCase().includes(query))
  }, [users, filter])

  return {
    loading,
    filter,
    setFilter,
    users,
    filteredUsers
  }
}
