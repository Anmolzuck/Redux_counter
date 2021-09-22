import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // The function passesd inside of the useSelector is executed by React
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCOunterHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementCOunterHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCOunterHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementCOunterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
