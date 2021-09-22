import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // The function passesd inside of the useSelector is executed by React
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementCOunterHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementCOunterHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toogle" });
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
