import React,{useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount} from './features/counter/counterSlice';

function App  () {
  const [amount, setamount] = useState(0)
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count :{count} </p>
    <button onClick={handleDecrementClick}>-</button>
    <br></br>
    <button onClick={handleResetClick}>Reset</button>
    <br></br>

    <input
    type='number'
    value={amount}
    placeholder='Enter amount'
    onChange={(e)=>setamount(e.target.value)} >
    </input>
    <br></br>
    <button onClick={handleIncAmountClick}>INC BY AMOUNT</button>


    </div>
  )
}

export default App
