import React from 'react'
import BeforeApp from './Before'
import AfterApp from './After'

function ProviderPattern() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>02. Provider Pattern</h2>
        <p>Context APIを使用してグローバルデータを共有し、プロップドリリングの問題を解決するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>propsを何階層も渡す必要がある(プロップドリリング)</p>
          <div className="demo-area">
            <BeforeApp />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>Context APIで必要なコンポーネントで直接データを取得</p>
          <div className="demo-area">
            <AfterApp />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>React.createContext()でContextを作成</li>
          <li>Providerコンポーネントで値を提供</li>
          <li>useContext()で値を取得</li>
          <li>中間コンポーネントでpropsを渡す必要がなくなる</li>
        </ul>
      </div>
    </div>
  )
}

export default ProviderPattern
