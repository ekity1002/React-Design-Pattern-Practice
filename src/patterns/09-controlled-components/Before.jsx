import React, { useRef } from 'react'

// Controlled Components適用前: 非制御コンポーネント(Uncontrolled)

function LoginForm() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // バリデーションが難しい
    console.log('Email:', email)
    console.log('Password:', password)

    alert(`Login attempt:\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Login Form (Uncontrolled)</h3>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input
          type="email"
          ref={emailRef}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input
          type="password"
          ref={passwordRef}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>
        Login
      </button>
    </form>
  )
}

export default LoginForm
