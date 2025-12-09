import React from 'react'
import BeforeForm from './Before'
import AfterForm from './After'

function ControlledComponents() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>09. Controlled Components Pattern</h2>
        <p>React状態でフォーム入力を統一管理し、完全な制御を実現するパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - 非制御コンポーネント</h3>
          <p>refでDOM要素に直接アクセス</p>
          <div className="demo-area">
            <BeforeForm />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - 制御コンポーネント</h3>
          <p>React状態でフォーム値を管理</p>
          <div className="demo-area">
            <AfterForm />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>useStateで入力値を管理</li>
          <li>value属性で値を設定</li>
          <li>onChange属性で状態を更新</li>
          <li>リアルタイムバリデーションが可能</li>
          <li>フォームの状態を完全に制御</li>
        </ul>
      </div>
    </div>
  )
}

export default ControlledComponents
