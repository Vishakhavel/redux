// import { createStore } from 'redux'

// const reducerFn = (state = { counter: 0 }, action) => {
//   // sync functions only.
//   // not mutate the original state, rather modify and return a copy of the original state.

//   if (action.type === 'INC') {
//     return { counter: state.counter + 1 }
//   } else if (action.type === 'DEC') {
//     return { counter: state.counter - 1 }
//   }
//   return state
// }
// const store = createStore(reducerFn)

// export default store

// after redux-toolkit

import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducer: {
    increment(state, action) {
      state.counter++
    },
    decrement(state, action) {
      state.counter--
    },
  },
})
export const actions = counterSlice.actions
console.log('This is the actions in the store file.', actions)

console.log('CounterSlice', counterSlice)

const store = configureStore({
  reducer: counterSlice.reducer,
})

export default store
