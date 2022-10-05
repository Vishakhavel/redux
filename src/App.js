import './App.css'
import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementCounter = () => {
    dispatch({ type: 'INC' })
  }
  const decrementCounter = () => {
    dispatch({ type: 'DEC' })
  }
  return (
    <Fragment>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </Fragment>
  )
}

export default App
