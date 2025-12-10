
import BeforeApp from './Before'
import AfterApp from './After'

function RenderProps() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>07. Render Props Pattern</h2>
        <p>関数をpropsとして渡すことで、コンポーネント間でロジックを再利用するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>各コンポーネントでロジックが重複</p>
          <div className="demo-area">
            <BeforeApp />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>Render Propsでロジックを共通化</p>
          <div className="demo-area">
            <AfterApp />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>関数をpropsとして受け取る(render, children等)</li>
          <li>ロジックを実行した結果を関数の引数として渡す</li>
          <li>表示内容はコールバック関数でカスタマイズ</li>
          <li>Hooksの登場で利用頻度は減少</li>
        </ul>
      </div>
    </div>
  )
}

export default RenderProps
