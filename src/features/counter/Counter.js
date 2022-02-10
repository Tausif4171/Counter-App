import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state)=>
    state.counter.value
    );
  const dispatch = useDispatch();
  return (
    <div>
      <button 
       aria-label="increment value" onClick={()=>dispatch(increment())}>
      </button>
      <h1>{count}</h1>
      <button 
       aria-label="decrement value" onClick={()=>dispatch(decrement())}>
      </button>
    </div>
  );
};

export default Counter;

// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';

// const Counter =()=>{
//   <h1>hello</h1>
// }
// export default Counter;