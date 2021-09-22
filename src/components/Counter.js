import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  // The function passesd inside of the useSelector is executed by React
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementCOunterHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementCOunterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCOunterHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementCOunterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
