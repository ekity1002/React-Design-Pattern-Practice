import { useState } from 'react'
import * as Before from './Before'
import * as After from './After'
import * as CustomHook from './CustomHook'

function HOCPattern() {
  const [activeTab, setActiveTab] = useState('hoc')

  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <h2>01. HOC (Higher Order Component) Pattern</h2>
        <p>コンポーネント間でロジックを再利用するパターン。関数を受け取り、拡張された新しいコンポーネントを返します。</p>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => setActiveTab('hoc')}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: activeTab === 'hoc' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'hoc' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            HOC版
          </button>
          <button
            onClick={() => setActiveTab('hook')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'hook' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'hook' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            カスタムフック版 (推奨)
          </button>
        </div>
      </div>

      {activeTab === 'hoc' ? (
        <>
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
              <h3>After - HOCパターン適用後</h3>
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
            <h4>実装のポイント (HOC版)</h4>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>withLoadingなどの名前でHOCを作成</li>
              <li>loading状態の管理を共通化</li>
              <li>データ取得関数をpropsとして受け取る</li>
              <li>コンポーネントの再利用性が向上</li>
            </ul>
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fff3cd', borderRadius: '5px', borderLeft: '4px solid #ffc107' }}>
              <strong>⚠️ 注意:</strong> React 18以降では、HOCよりもカスタムフックの使用が推奨されています。
            </div>
          </div>
        </>
      ) : (
        <>
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
              <h3>After - カスタムフック版</h3>
              <p>カスタムフックを使用してロジックを共通化します（React 18推奨）</p>
              <div className="demo-area">
                <CustomHook.UserProfile />
                <div style={{ marginTop: '20px' }}>
                  <CustomHook.ProductList />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
            <h4>実装のポイント (カスタムフック版)</h4>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>useLoadingDataなどの名前でカスタムフックを作成</li>
              <li>データ取得関数を引数として受け取る</li>
              <li>loading状態とdataをオブジェクトで返す</li>
              <li>HOCよりもシンプルで理解しやすい</li>
              <li>コンポーネントツリーをネストしない</li>
            </ul>
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#d4edda', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
              <strong>✅ 推奨:</strong> React 18以降では、ロジックの再利用にはカスタムフックの使用が推奨されています。
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HOCPattern
