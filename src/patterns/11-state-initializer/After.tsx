

// TODO: State Initializerパターンを実装してください
// ヒント:
// 1. initialCountプロップで初期値を受け取る
// 2. onResetコールバックで初期値にリセット
// 3. 外部から初期状態を制御可能に
// 4. リセット機能を柔軟に実装

import { FC, useState } from 'react'

type CounterProps = {
  initialCount?: number
  onReset?: (count: number) => void
}

const Counter: FC<CounterProps> = ({
  initialCount = 0,
  onReset
}) => {
  const [count, setCount] = useState(initialCount)
  const handleReset = () => {
    setCount(initialCount)
    onReset?.(initialCount)
  }
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Counter: {count}</h3>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setCount(prev => prev + 1)}
          style={{ marginRight: '10px' }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(prev => prev - 1)}
          style={{ marginRight: '10px' }}
        >
          Decrement
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </div>

      <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        初期値は props（initialCount）から注入される
      </p>
    </div>
  )
}

/**
 * 使用例
 * 親コンポーネントが初期状態を制御
 */
function App() {
  return (
    <div>
      <Counter
        initialCount={10}
        onReset={(count) => {
          console.log('リセットされました:', count)
        }}
      />
    </div>
  )}

export default App
