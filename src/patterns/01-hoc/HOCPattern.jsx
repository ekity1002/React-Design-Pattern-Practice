import React from 'react'
import * as Before from './Before'
import * as After from './After'

function HOCPattern() {
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>01. HOC (Higher Order Component) Pattern</h2>
        <p>コンポーネント間でロジックを再利用するパターン。関数を受け取り、拡張された新しいコンポーネントを返します。</p>
      </div>

      <div className="comparison-container">
        <div className="code-section before">
          <h3>Before - パターン適用前</h3>
          <p>各コンポーネントでローディング状態とデータ取得のロジックが重複しています。</p>
          <div className="demo-area">
            <Before.UserProfile />
            <div style={{ marginTop: '20px' }}>
              <Before.ProductList />
            </div>
          </div>
        </div>

        <div className="code-section after">
          <h3>After - パターン適用後</h3>
          <p>HOCを使用してローディングとデータ取得のロジックを共通化します。</p>
          <div className="demo-area">
            <After.UserProfile />
            <div style={{ marginTop: '20px' }}>
              <After.ProductList />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <h4>実装のポイント</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>withLoadingなどの名前でHOCを作成</li>
          <li>loading状態の管理を共通化</li>
          <li>データ取得関数をpropsとして受け取る</li>
          <li>コンポーネントの再利用性が向上</li>
        </ul>
      </div>
    </div>
  )
}

export default HOCPattern
