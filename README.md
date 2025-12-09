# React Design Pattern Practice

このプロジェクトは、Reactのデザインパターンを学習・練習するためのプロジェクトです。

## 📚 参考記事

[Reactデザインパターンとは - Zenn](https://zenn.dev/grooves/articles/a1d268ac45ed67)

## 🚀 セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## 📖 パターン一覧

### 01. HOC (Higher Order Component)
コンポーネント間でロジックを再利用するパターン

**学習ポイント:**
- withLoadingなどのHOCを作成
- loading状態の管理を共通化
- データ取得関数をpropsとして受け取る

### 02. Provider Pattern
グローバルデータを共有し、プロップドリリングを解決

**学習ポイント:**
- React.createContext()でContextを作成
- Providerコンポーネントで値を提供
- useContext()で値を取得

### 03. Presentational & Container
UIとロジックを分離して関心を分ける

**学習ポイント:**
- Container: データ取得、状態管理などのロジックを担当
- Presentational: propsを受け取ってUIを表示するのみ
- テストが書きやすくなる

### 04. React Hooks
関数コンポーネントで状態管理とライフサイクルを扱う

**学習ポイント:**
- useState: 状態管理
- useEffect: 副作用の処理
- クラスコンポーネントより簡潔なコード

### 05. Compound Component
密接に関連したコンポーネント群を構築

**学習ポイント:**
- 親コンポーネントが状態を管理
- 子コンポーネントは暗黙的に状態にアクセス
- 柔軟で宣言的なAPIを提供

### 06. Conditional Rendering
条件に応じてUIの表示を制御

**学習ポイント:**
- 三項演算子: `condition ? true : false`
- &&演算子: `condition && <Component />`
- Early return: `if (condition) return <Component />`

### 07. Render Props
関数をpropsとして渡してロジックを再利用

**学習ポイント:**
- 関数をpropsとして受け取る(render, children等)
- ロジックを実行した結果を関数の引数として渡す
- 表示内容はコールバック関数でカスタマイズ

### 08. State Reducer
複雑な状態遷移をuseReducerで管理

**学習ポイント:**
- useReducerで複雑な状態ロジックを管理
- アクションタイプで明示的な状態遷移
- reducer関数で状態更新ロジックを一元化

### 09. Controlled Components
React状態でフォーム入力を統一管理

**学習ポイント:**
- useStateで入力値を管理
- value属性で値を設定
- onChange属性で状態を更新
- リアルタイムバリデーションが可能

### 10. Extensible Styles
スタイルのカスタマイズ性を確保

**学習ポイント:**
- classNameプロップで追加のクラスを受け取る
- styleプロップでインラインスタイルをマージ
- variantプロップで事前定義されたスタイルを選択

### 11. State Initializer
初期状態の外部制御とリセット機能

**学習ポイント:**
- 初期値をpropsで受け取る
- 初期値を保持して、リセット時に使用
- 外部から初期状態を制御可能

## 📂 プロジェクト構造

```
src/
├── patterns/
│   ├── 01-hoc/
│   │   ├── Before.jsx          # パターン適用前
│   │   ├── After.jsx           # パターン適用後（練習用）
│   │   └── HOCPattern.jsx      # 表示コンポーネント
│   ├── 02-provider/
│   ├── 03-presentational-container/
│   ├── 04-hooks/
│   ├── 05-compound-component/
│   ├── 06-conditional-rendering/
│   ├── 07-render-props/
│   ├── 08-state-reducer/
│   ├── 09-controlled-components/
│   ├── 10-extensible-styles/
│   └── 11-state-initializer/
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 💡 使い方

1. 左側のメニューから学びたいパターンを選択
2. **Before**セクションでパターン適用前のコードを確認
3. **After**セクションのファイル（`After.jsx`）にパターンを適用したコードを実装
4. デモエリアで動作を確認

## 🎯 学習のヒント

- 各パターンの`After.jsx`ファイルにはTODOコメントとヒントが記載されています
- まずは`Before.jsx`のコードを理解してから、`After.jsx`で実装してみましょう
- 実装後は動作を確認して、コードを改善してみましょう
- わからない場合は参考記事を確認するか、`Before.jsx`と比較してみましょう

## 🛠️ 技術スタック

- React 18
- Vite
- React Router v6

## 📝 ライセンス

MIT
