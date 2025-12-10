
import BeforeApp from './Before'
import AfterApp from './After'

function StateInitializer() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>11. State Initializer Pattern</h2>
        <p>初期状態の外部制御とリセット機能を実現するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>初期値が固定されている</p>
          <div className="demo-area">
            <BeforeApp />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>初期値のカスタマイズとリセット機能</p>
          <div className="demo-area">
            <AfterApp />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>初期値をpropsで受け取る</li>
          <li>初期値を保持して、リセット時に使用</li>
          <li>外部から初期状態を制御可能</li>
          <li>useRefで初期値を保持すると便利</li>
        </ul>
      </div>
    </div>
  )
}

export default StateInitializer
