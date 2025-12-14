import { FC } from 'react';

interface User {
  id: number;
  name: string;
  age :number;
}

interface UserListViewProps {
  users: User[];
  filter: String;
  onFilterChange: (value: string) => void;
}

export const UserListView: FC<UserListViewProps> = ({
  users,
  filter,
  onFilterChange
}) => {
  //   useState / useEffect は一切使わない
  // 「どう描くか」だけ
  // イベントは コールバックとして受け取る
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>User List</h3>

      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  )
}
