const redux = require("redux");

//Reducer fucntion
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// .createStore() is a method that creates a store
const store = redux.createStore(counterReducer);

// console.log(store.getState());
//Subscriber function
const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

//Telling redux about our subscriber function
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
