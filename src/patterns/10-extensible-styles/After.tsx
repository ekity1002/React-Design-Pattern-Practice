

// TODO: Extensible Stylesパターンを実装してください
// ヒント:
// 1. classNameプロップを受け取る
// 2. styleプロップを受け取り、デフォルトスタイルとマージ
// 3. variantプロップで事前定義されたスタイルを選択
// 4. 柔軟なカスタマイズが可能になる
import { CSSProperties, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  style?: CSSProperties
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}


const baseStyle: CSSProperties = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 700,
}

const variantStyleMap: Record<ButtonVariant, CSSProperties> = {
  primary: { backgroundColor: '#007bff', color: 'white' },
  danger: { backgroundColor: '#dc3545', color: 'white' },
  ghost: { backgroundColor: 'transparent', color: '#333', border: '1px solid #ccc' },
}

const sizeStyleMap: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: '12px' },
  md: { padding: '10px 20px', fontSize: '14px' },
  lg: { padding: '14px 28px', fontSize: '16px' },
}
/**
 * style を安全に「後勝ち」でマージするヘルパー
 * - 後ろに書いたものが優先される
 */
function mergeStyles(...styles: Array<CSSProperties | undefined>): CSSProperties {
  return Object.assign({}, ...styles.filter(Boolean))
}

function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  style,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const computedStyle = mergeStyles(
    baseStyle,
    variantStyleMap[variant],
    sizeStyleMap[size],
    style
  )
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={computedStyle}
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Buttons</h3>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => alert('Primary clicked')}>
          Primary
        </Button>

        {/* variant で危険系に切替 */}
        <Button variant="danger" onClick={() => alert('Danger clicked')}>
          Danger
        </Button>

        {/* size で大型に */}
        <Button size="lg" onClick={() => alert('Large clicked')}>
          Large Button
        </Button>

        {/* style で部分上書き（拡張） */}
        <Button
          variant="primary"
          onClick={() => alert('Custom clicked')}
          style={{ borderRadius: '999px', backgroundColor: 'purple' }}
        >
          Custom Style
        </Button>

        {/* className で外部CSS連携（拡張） */}
        <Button variant="ghost" className="my-ghost-button" onClick={() => alert('Ghost clicked')}>
          Ghost
        </Button>
      </div>
    </div>
  )
}

export default App
