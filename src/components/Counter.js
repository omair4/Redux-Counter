import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { counterActions } from '../store/counter';
const Counter = () => {
  const dispatch = useDispatch();
  const val = useRef();
  const [show, setShow] = useState(true);
  const counter=useSelector(state=>state.counter.counter);
  const toggleCounterHandler = () => {
    setShow(!show);
  };
  const incrementHandler = () => {
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    // dispatch({ type: "increase",amount:val.current.value });
    dispatch(counterActions.increase(val.current.value));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increaseHandler}>increase</button>
      <input ref={val} type="text"></input>
    </main>
  );
};

export default Counter;
