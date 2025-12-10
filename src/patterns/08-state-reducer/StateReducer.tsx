
import BeforeCounter from './Before'
import AfterCounter from './After'

function StateReducer() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>08. State Reducer Pattern</h2>
        <p>useReducerフックを使用して複雑な状態遷移を管理するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>複数のuseStateで状態管理</p>
          <div className="demo-area">
            <BeforeCounter />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>useReducerで状態遷移を一元管理</p>
          <div className="demo-area">
            <AfterCounter />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>useReducerで複雑な状態ロジックを管理</li>
          <li>アクションタイプで明示的な状態遷移</li>
          <li>reducer関数で状態更新ロジックを一元化</li>
          <li>テストが書きやすく、予測可能</li>
        </ul>
      </div>
    </div>
  )
}

export default StateReducer
