

// TODO: Controlled Componentsパターンを実装してください
// ヒント:
// 1. useStateで入力値を管理
// 2. valueとonChangeを設定
// 3. リアルタイムバリデーションを実装
// 4. フォームの状態を完全に制御

import { FormEvent, useMemo, useState, type ChangeEvent } from 'react'

/**
 * フォーム値の型
 */
type LoginValues = {
  email: string
  password: string
}

/**
 * エラーの型（nullならOK）
 */
type LoginErrors = {
  email: string | null
  password: string | null
}

function LoginForm(){
  const [values, setValues] = useState<LoginValues>({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<LoginErrors>({
    email: null,
    password: null,
  })

  const [submitted, setSubmitted] = useState(false)

  const validateField = (name: keyof LoginValues, value: string): string | null => {
    if (name === 'email') {
      if (!value.trim()) return 'Emailは必須です'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Emailの形式が正しくありません'
      return null
    }

    if (name === 'password') {
      if (!value.trim()) return 'Passwordは必須です'
      if (value.length < 8) return 'Passwordは8文字以上にしてください'
      return null
    }
    return null
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    const field = name as keyof LoginValues

    setValues((prev) => ({
      ...prev,
      [field]: value,
    }))

    const error = validateField(field, value)
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }))

    // 入力が始まったら送信済み表示を消したい場合
    setSubmitted(false)
  }

  const validateAll = (vals: LoginValues): LoginErrors => ({
    email: validateField('email', vals.email),
    password: validateField('password', vals.password),
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = validateAll(values)
    setErrors(nextErrors)

    const hasError = Object.values(nextErrors).some((err) => err !== null)
    if (hasError) return

    console.log('Email:', values.email)
    console.log('Password:', values.password)

    setSubmitted(true)
    alert(`Login attempt:\nEmail: ${values.email}\nPassword: ${values.password}`)
  }

  /**
   * ✅ 送信ボタンのdisabled制御
   * - 「空欄」や「エラーあり」を無効化条件にする例
   */
    const canSubmit = useMemo(() => {
    const hasEmpty = !values.email.trim() || !values.password.trim()
    const hasError = !!errors.email || !!errors.password
    return !hasEmpty && !hasError
  }, [values.email, values.password, errors.email, errors.password])

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Login Form (Controlled)</h3>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email} // ✅ stateが真実
          onChange={handleChange} // ✅ 入力→state更新
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.email && (
          <div style={{ marginTop: '6px' }}>
            <small style={{ color: 'crimson' }}>{errors.email}</small>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={values.password} // ✅ stateが真実
          onChange={handleChange} // ✅ 入力→state更新
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.password && (
          <div style={{ marginTop: '6px' }}>
            <small style={{ color: 'crimson' }}>{errors.password}</small>
          </div>
        )}
      </div>

      <button type="submit" style={{ padding: '10px 20px' }} disabled={!canSubmit}>
        Login
      </button>

      {submitted && (
        <div style={{ marginTop: '12px' }}>
          <small>ログイン送信しました（デモ）</small>
        </div>
      )}
    </form>
  )
}


export default LoginForm
