

// TODO: Render Propsパターンを実装してください
// ヒント:
// 1. MouseTrackerコンポーネントを作成
// 2. renderプロップまたはchildren関数を受け取る
// 3. マウス位置を引数として渡す
// 4. ロジックを共通化しつつ、表示は柔軟にカスタマイズ可能

import type { MouseEventHandler } from 'react'
import { useCallback, useState } from "react"

type Position = {
  x: number
  y: number
}

function useMouseTracker() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  // ReactのSyntheticEvent用の型（divに付ける想定）
  const onMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  /**
   * JSXで書きやすいように「付与するprops一式」を返す
   * （実務でもよくあるパターン）
   */
  const bind = { onMouseMove }

  return { position, bind }
}

function MouseTrackerA() {
  const { position, bind } = useMouseTracker()

  return (
    <div
      {...bind}
      style={{
        height: '200px',
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px'
      }}
    >
      <h4>Component A</h4>
      <p>
        Mouse position: ({position.x}, {position.y})
      </p>
    </div>
  )
}

function MouseTrackerB() {
  const { position, bind } = useMouseTracker()

  return (
    <div
      {...bind}
      style={{
        height: '200px',
        border: '1px solid #ddd',
        padding: '10px',
        backgroundColor: '#f5f5f5'
      }}
    >
      <h4>Component B</h4>
      <p>
        X: {position.x} | Y: {position.y}
      </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <MouseTrackerA />
      <MouseTrackerB />
    </div>
  )
}


export default App
