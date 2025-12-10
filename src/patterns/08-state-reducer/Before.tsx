import { useState } from 'react'

// State Reducer適用前: useStateで複雑な状態を管理

function Counter() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const increment = () => {
    const newCount = count + step
    setCount(newCount)
    setHistory([...history, `+${step}`])
  }

  const decrement = () => {
    const newCount = count - step
    setCount(newCount)
    setHistory([...history, `-${step}`])
  }

  const reset = () => {
    setCount(0)
    setHistory([])
    setStep(1)
  }

  const changeStep = (newStep: number) => {
    setStep(newStep)
    setHistory([...history, `step changed to ${newStep}`])
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Counter: {count}</h3>
      <p>Step: {step}</p>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={increment} style={{ marginRight: '5px' }}>+{step}</button>
        <button onClick={decrement} style={{ marginRight: '5px' }}>-{step}</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => changeStep(1)} style={{ marginRight: '5px' }}>Step: 1</button>
        <button onClick={() => changeStep(5)} style={{ marginRight: '5px' }}>Step: 5</button>
        <button onClick={() => changeStep(10)}>Step: 10</button>
      </div>

      <div style={{ marginTop: '10px', fontSize: '12px' }}>
        <strong>History:</strong>
        <div>{history.join(', ')}</div>
      </div>
    </div>
  )
}

export default Counter
