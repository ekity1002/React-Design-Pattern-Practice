import { Component } from 'react'

// React Hooks適用前: クラスコンポーネント

interface CounterState {
  count: number
  name: string
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0,
      name: 'Counter'
    }
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <h3>{this.state.name}</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment} style={{ marginRight: '10px' }}>
          +1
        </button>
        <button onClick={this.decrement}>
          -1
        </button>
      </div>
    )
  }
}

export default Counter
