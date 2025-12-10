
import BeforeUserList from './Before'
import AfterUserList from './After'

function PresentationalContainer() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>03. Presentational & Container Pattern</h2>
        <p>UIとロジックを分離して、コンポーネントの役割を明確にするパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>ロジックと表示が混在している</p>
          <div className="demo-area">
            <BeforeUserList />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>ContainerとPresentationalに分離</p>
          <div className="demo-area">
            <AfterUserList />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>Container: データ取得、状態管理などのロジックを担当</li>
          <li>Presentational: propsを受け取ってUIを表示するのみ</li>
          <li>Presentationalコンポーネントは再利用しやすい</li>
          <li>テストが書きやすくなる</li>
        </ul>
      </div>
    </div>
  )
}

export default PresentationalContainer
