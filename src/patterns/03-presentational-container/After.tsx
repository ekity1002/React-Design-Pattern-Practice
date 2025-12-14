

// TODO: Presentational & Container パターンを実装してください
// ヒント:
// 1. UserListContainer (Container Component): ロジックを担当
// 2. UserListView (Presentational Component): 表示を担当
// 3. Containerでデータ取得・状態管理を行う
// 4. Presentationalコンポーネントはpropsのみを受け取る

import { useUsers } from "./UserListContainer"
import { UserListView } from "./UserListView"

function UserList() {
  const { loading, filter, setFilter, filteredUsers } = useUsers()
  if (loading) return <div>Loading...</div>
  return (
    <UserListView
      users={filteredUsers}
      filter={filter}
      onFilterChange={setFilter}
    />
  )
}

export default UserList
