// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countZero, decrement, increment, incrementByAmount } from '../../../Redux/counterSlice';


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Redux Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(countZero(0))}>count 0</button>
    </div>
  );
};

export default Counter;
