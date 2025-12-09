import React, { useState } from 'react'

// Render Props適用前: マウス位置のロジックが重複

function MouseTrackerA() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '200px',
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px'
      }}
    >
      <h4>Component A</h4>
      <p>Mouse position: ({position.x}, {position.y})</p>
    </div>
  )
}

function MouseTrackerB() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '200px',
        border: '1px solid #ddd',
        padding: '10px',
        backgroundColor: '#f5f5f5'
      }}
    >
      <h4>Component B</h4>
      <p>X: {position.x} | Y: {position.y}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <MouseTrackerA />
      <MouseTrackerB />
    </div>
  )
}

export default App
