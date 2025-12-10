function Home() {
  return (
    <div className="pattern-container">
      <div className="home-container">
        <h2>React Design Patterns Practice</h2>
        <p style={{ marginBottom: '30px', color: '#7f8c8d' }}>
          このプロジェクトは、Reactのデザインパターンを学習・練習するためのものです。
          左側のメニューから各パターンを選択して、パターン適用前と適用後のコードを比較できます。
        </p>

        <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>パターン一覧</h3>
        <ul>
          <li>
            <strong>01. HOC (Higher Order Component)</strong>
            <span>コンポーネント間でロジックを再利用するパターン</span>
          </li>
          <li>
            <strong>02. Provider Pattern</strong>
            <span>グローバルデータを共有し、プロップドリリングを解決</span>
          </li>
          <li>
            <strong>03. Presentational & Container</strong>
            <span>UIとロジックを分離して関心を分ける</span>
          </li>
          <li>
            <strong>04. React Hooks</strong>
            <span>関数コンポーネントで状態管理とライフサイクルを扱う</span>
          </li>
          <li>
            <strong>05. Compound Component</strong>
            <span>密接に関連したコンポーネント群を構築</span>
          </li>
          <li>
            <strong>06. Conditional Rendering</strong>
            <span>条件に応じてUIの表示を制御</span>
          </li>
          <li>
            <strong>07. Render Props</strong>
            <span>関数をpropsとして渡してロジックを再利用</span>
          </li>
          <li>
            <strong>08. State Reducer</strong>
            <span>複雑な状態遷移をuseReducerで管理</span>
          </li>
          <li>
            <strong>09. Controlled Components</strong>
            <span>React状態でフォーム入力を統一管理</span>
          </li>
          <li>
            <strong>10. Extensible Styles</strong>
            <span>スタイルのカスタマイズ性を確保</span>
          </li>
          <li>
            <strong>11. State Initializer</strong>
            <span>初期状態の外部制御とリセット機能</span>
          </li>
        </ul>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e8f4f8', borderRadius: '5px' }}>
          <h4 style={{ marginBottom: '10px', color: '#2c3e50' }}>使い方</h4>
          <ol style={{ marginLeft: '20px', color: '#7f8c8d' }}>
            <li>左側のメニューから学びたいパターンを選択</li>
            <li>「Before」セクションでパターン適用前のコードを確認</li>
            <li>「After」セクションにパターンを適用したコードを実装</li>
            <li>デモエリアで動作を確認</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home
