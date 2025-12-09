import React, { useState } from 'react'

// State Initializer適用前: 初期状態が固定されている

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Counter: {count}</h3>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        初期値が常に0で固定されており、カスタマイズやリセットが困難
      </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
