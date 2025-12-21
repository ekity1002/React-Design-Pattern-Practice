

// TODO: State Reducerパターンを実装してください
// ヒント:
// 1. useReducerフックを使用
// 2. アクションタイプを定義(INCREMENT, DECREMENT, RESET, CHANGE_STEP)
// 3. reducer関数で状態遷移を一元管理
// 4. より予測可能で保守しやすいコードになる

import { useReducer } from "react";

type CounterState = {
  count: number;
  history: string[],
  step: number;
}

type CounterAction =
  | {type: "INCREMENT"}
  | {type: "DECREMENT"}
  | {type: "RESET"}
  | {type: "CHANGE_STEP"; payload: number}

const initialState: CounterState = {
  count: 0,
  history: [],
  step: 1,
}

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT": {
      const newCount = state.count + state.step
      return {
        ...state,
        count: newCount,
        history: [...state.history, `+${state.step}`]
      };
    }
    case "DECREMENT": {
      const newCount = state.count - state.step;
      return {
        ...state,
        count: newCount,
        history: [...state.history, `-${state.step}`]
      }
    }
    case "CHANGE_STEP": {
      const newStep = action.payload;
      return {
        ...state,
        step: newStep,
        history: [...state.history, `step changed to ${newStep}`],
      };
    }
    case "RESET":
      return initialState;

    default: {
      // Exhaustive check（未対応のactionが増えたらTSがエラーにしてくれる）
      const _exhaustiveCheck: never = action;
      return state;
    }

  }
}


function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => dispatch({ type: "INCREMENT"})
  const decrement = () => dispatch({type: "DECREMENT"})
  const reset = () => dispatch({type: "RESET"})
  const changeStep = (newStep: number) => {
    dispatch({ type: "CHANGE_STEP", payload: newStep})
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h3>Counter: {state.count}</h3>
      <p>Step: {state.step}</p>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={increment} style={{ marginRight: "5px" }}>
          +{state.step}
        </button>
        <button onClick={decrement} style={{ marginRight: "5px" }}>
          -{state.step}
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => changeStep(1)} style={{ marginRight: "5px" }}>
          Step: 1
        </button>
        <button onClick={() => changeStep(5)} style={{ marginRight: "5px" }}>
          Step: 5
        </button>
        <button onClick={() => changeStep(10)}>Step: 10</button>
      </div>

      <div style={{ marginTop: "10px", fontSize: "12px" }}>
        <strong>History:</strong>
        <div>{state.history.join(", ")}</div>
      </div>
    </div>
  );
}

export default Counter
