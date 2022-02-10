import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
    <h2 style={{color: "blue"}}>Counter App</h2>
      <button style={{backgroundColor:"black", color:"white", height:40,width:60,fontSize:36, border:"none", borderRadius:12}} aria-label="increment value" onClick={() => dispatch(increment())}>
        +
      </button>
      <h1 style={{color:"#D2691E"}}>{count}</h1>
      <button style={{backgroundColor:"black", color:"white", height:40,width:60,fontSize:36, border:"none", borderRadius:12}} aria-label="decrement value" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Counter;