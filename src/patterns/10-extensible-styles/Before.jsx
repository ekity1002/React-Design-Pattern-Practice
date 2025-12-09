import React from 'react'

// Extensible Styles適用前: スタイルのカスタマイズが困難

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Buttons</h3>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button onClick={() => alert('Primary clicked')}>Primary</Button>
        {/* カスタムスタイルを適用できない */}
        <Button onClick={() => alert('Danger clicked')}>Danger</Button>
        {/* サイズを変更できない */}
        <Button onClick={() => alert('Large clicked')}>Large Button</Button>
      </div>
    </div>
  )
}

export default App
