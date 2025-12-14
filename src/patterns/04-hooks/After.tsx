

// TODO: React Hooksを実装してください
// ヒント:
// 1. 関数コンポーネントに変換
// 2. useState で状態管理
// 3. useEffect でライフサイクルを扱う
// 4. クラスコンポーネントより簡潔になる

import { useEffect, useState } from "react"

function Counter() {
  // TODO: useStateとuseEffectを使って実装
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev+1)} style={{ marginRight: '10px' }}>
        +1
      </button>
      <button onClick={() => setCount((prev) => prev-1)}>
        -1
      </button>
    </div>
  )
}

export default Counter
