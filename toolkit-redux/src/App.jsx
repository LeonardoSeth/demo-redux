import {  useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter';



function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <>
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={() => dispatch(increment())}>
          Incrementa
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrementa
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Incrementa por 2
        </button>

      </div>

    </>
  )
}

export default App
