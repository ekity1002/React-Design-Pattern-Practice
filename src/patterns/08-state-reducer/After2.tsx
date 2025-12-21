// State Reducerパターン版（外から stateReducer で挙動を上書き可能）

import { FC, useReducer } from "react";

type CounterState = {
  count: number;
  history: string[];
  step: number;
};
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "CHANGE_STEP"; payload: number };

const defaultInitialState: CounterState = {
  count: 0,
  history: [],
  step: 1,
};

/**
 * 標準の reducer（コンポーネントの基本仕様）
 * ここは「普通のカウンターならこう動く」を書く場所。
 *
 * 注意:
 * - stateは直接変更せず、新しいオブジェクトを返す（immutable更新）
 */
function baseReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT": {
      const newCount = state.count + state.step;
      return {
        ...state,
        count: newCount,
        history: [...state.history, `+${state.step}`],
      };
    }

    case "DECREMENT": {
      const newCount = state.count - state.step;
      return {
        ...state,
        count: newCount,
        history: [...state.history, `-${state.step}`],
      };
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
      return { ...defaultInitialState };

    default: {
      // Exhaustive check（未対応のactionが増えたらTSがエラーにしてくれる保険）
      const _exhaustiveCheck: never = action;
      return state;
    }
  }
}


/**
 * State Reducer（外から挙動を差し替えるための関数型）
 *
 * @template S stateの型
 * @template A actionの型
 *
 * @param state 現在のstate
 * @param action 今回のaction（操作）
 * @param defaultChanges baseReducerで計算した「本来の次state」
 * @returns 最終的に採用する次state（上書き/修正/そのまま が可能）
 */
type StateReducer<S, A> = (state: S, action: A, defaultChanges: S) => S;

/**
 * コンポーネントのprops（カスタマイズできる部分）
 */
type CounterProps = {
  /** 初期カウント（未指定なら0） */
  initialCount?: number;
  /** 初期ステップ（未指定なら1） */
  initialStep?: number;

  /** カウントの下限（未指定なら無制限） */
  min?: number;
  /** カウントの上限（未指定なら無制限） */
  max?: number;

  /**
   * State Reducer（任意）
   * - 指定がなければ defaultChanges をそのまま返す（標準挙動）
   */
  stateReducer?: StateReducer<CounterState, CounterAction>;
};

/**
 * State Reducerパターン版 Counter
 *
 * ポイント:
 * - baseReducerで標準挙動を計算
 * - stateReducerで最終挙動を差し替え可能にする（制御反転）
 */
export const CounterWithStateReducer: FC<CounterProps> = ({
  initialCount = 0,
  initialStep = 1,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  stateReducer = (_state, _action, defaultChanges) => defaultChanges, // デフォルトは「上書きしない」
}) => {
    /**
   * 初期stateをpropsから作る
   * - RESET時の戻り先もprops反映したいので、初期stateをここで作るのが安全
   */
  const initialState: CounterState = {
    count: initialCount,
    step: initialStep,
    history: [],
  };

  const reducer = (state: CounterState, action: CounterAction): CounterState => {
    let defaultChanges: CounterState

    if (action.type === "RESET") {
      // RESETだけは「props反映した初期state」に戻したいので、baseReducerを使わずここで作る
      defaultChanges = { ...initialState }
    } else {
      defaultChanges = baseReducer(state, action);
    }

    // 2) まずmin/maxを共通制約として適用（ここはコンポーネントの仕様として固定でもOK）
    //    ただし、最終的に上書きしたい場合は stateReducer 側で再調整できる。
    const clampedChanges: CounterState = {
      ...defaultChanges,
      count: Math.min(max, Math.max(min, defaultChanges.count)),
    };
    // 3) 利用側に最終決定を委ねる
    return stateReducer(state, action, clampedChanges);
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // UIイベントは「状態を直接いじらず」、actionを投げるだけ
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });
  const changeStep = (newStep: number) =>
    dispatch({ type: "CHANGE_STEP", payload: newStep });

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

/* =========================
 * Example（使用例）
 * ========================= */

/**
 * Example 1: 標準挙動（上書きなし）
 */
export const ExampleBasic: FC = () => (
  <CounterWithStateReducer initialCount={0} initialStep={1} />
);

/**
 * Example 2: min/max の範囲制限（props側で指定）
 */
export const ExampleWithLimit: FC = () => (
  <CounterWithStateReducer initialCount={10} initialStep={5} min={0} max={50} />
);

/**
 * Example 3: stateReducerで「偶数のみ」を強制
 * - INCREMENT/DECREMENT の結果が奇数なら、偶数に補正
 */
export const ExampleEvenOnly: FC = () => {
  const evenOnlyReducer: StateReducer<CounterState, CounterAction> = (
    _state,
    action,
    changes
  ) => {
    if (action.type === "INCREMENT" || action.type === "DECREMENT") {
      if (changes.count % 2 !== 0) {
        return {
          ...changes,
          count: action.type === "INCREMENT" ? changes.count + 1 : changes.count - 1,
          history: [...changes.history, "adjusted to even"],
        };
      }
    }
    return changes;
  };

  return (
    <CounterWithStateReducer
      initialCount={0}
      initialStep={1}
      stateReducer={evenOnlyReducer}
    />
  );
};

/**
 * Example 4: stateReducerで「RESET禁止」にする
 * - RESETが来ても、状態を変えない（changesではなくstateを返す）
 */
export const ExampleDisableReset: FC = () => {
  const disableResetReducer: StateReducer<CounterState, CounterAction> = (
    state,
    action,
    changes
  ) => {
    if (action.type === "RESET") {
      return {
        ...state,
        history: [...state.history, "reset blocked"],
      };
    }
    return changes;
  };

  return <CounterWithStateReducer stateReducer={disableResetReducer} />;
};
