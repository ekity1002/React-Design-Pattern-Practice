import React from 'react'
import BeforeApp from './Before'
import AfterApp from './After'

function ExtensibleStyles() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>10. Extensible Styles Pattern</h2>
        <p>統一性を保ちながら柔軟なスタイルのカスタマイズを可能にするパターンです。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>スタイルのカスタマイズが困難</p>
          <div className="demo-area">
            <BeforeApp />
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>拡張可能なスタイルシステム</p>
          <div className="demo-area">
            <AfterApp />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>classNameプロップで追加のクラスを受け取る</li>
          <li>styleプロップでインラインスタイルをマージ</li>
          <li>variantプロップで事前定義されたスタイルを選択</li>
          <li>デフォルトスタイルと外部からのカスタマイズを両立</li>
        </ul>
      </div>
    </div>
  )
}

export default ExtensibleStyles
