import React from 'react'
import BeforeCounter from './Before'
import AfterCounter from './After'

function HooksPattern() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>04. React Hooks Pattern</h2>
        <p>関数コンポーネントで状態管理やライフサイクルを扱えるようにする、React 16.8で導入された機能です。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - クラスコンポーネント</h3>
          <p>クラスコンポーネントでの実装</p>
          <div className="demo-area">
            <BeforeCounter />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - 関数コンポーネント + Hooks</h3>
          <p>Hooksを使った関数コンポーネントでの実装</p>
          <div className="demo-area">
            <AfterCounter />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>useState: 状態管理</li>
          <li>useEffect: 副作用の処理(ライフサイクル)</li>
          <li>クラスコンポーネントより簡潔なコード</li>
          <li>ロジックの再利用がしやすい(カスタムフック)</li>
        </ul>
      </div>
    </div>
  )
}

export default HooksPattern
