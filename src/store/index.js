import { createStore } from 'redux'

const reducerFn = (state = { counter: 0 }, action) => {
  // sync functions only.
  // not mutate the original state, rather modify and return a copy of the original state.

  if (action.type == 'INC') {
    return { counter: state.counter + 1 }
  } else if (action.type === 'DEC') {
    return { counter: state.counter - 1 }
  }
  return state
}
const store = createStore(reducerFn)

export default store
