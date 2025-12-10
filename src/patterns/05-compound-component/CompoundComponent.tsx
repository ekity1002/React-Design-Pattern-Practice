
import BeforeApp from './Before'
import AfterApp from './After'

function CompoundComponent() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>05. Compound Component Pattern</h2>
        <p>密接に関連したコンポーネント群を構築し、親子間で暗黙的に状態と動作を共有するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>全ての設定をpropsで渡す</p>
          <div className="demo-area">
            <BeforeApp />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>複合コンポーネントで柔軟な構造</p>
          <div className="demo-area">
            <AfterApp />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>親コンポーネント(Accordion)が状態を管理</li>
          <li>子コンポーネント(Header, Content)は暗黙的に状態にアクセス</li>
          <li>React.createContext()で状態を共有</li>
          <li>柔軟で宣言的なAPIを提供</li>
        </ul>
      </div>
    </div>
  )
}

export default CompoundComponent
