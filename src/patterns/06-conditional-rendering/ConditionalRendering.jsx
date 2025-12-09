import React from 'react'
import BeforeDashboard from './Before'
import AfterDashboard from './After'

function ConditionalRendering() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>06. Conditional Rendering Pattern</h2>
        <p>条件に応じてUIの表示を制御する様々なテクニックを学びます。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>複雑なif-else文を使用</p>
          <div className="demo-area">
            <BeforeDashboard />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>三項演算子、&&演算子、Early returnを活用</p>
          <div className="demo-area">
            <AfterDashboard />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>三項演算子: condition ? true : false</li>
          <li>&&演算子: condition && {`<Component />`}</li>
          <li>Early return: if (condition) return {`<Component />`}</li>
          <li>読みやすさとメンテナンス性の向上</li>
        </ul>
      </div>
    </div>
  )
}

export default ConditionalRendering
