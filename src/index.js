/**
 * Following along from https://frontendmasters.com/courses/redux-fundamentals
 */
import { createStore, compose } from "redux";

// const makeLouder = (string) => string.toUpperCase();
// const repeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const compound = compose(repeatThreeTimes, makeLouder, embolden);
// const message = compound("Hello!");

// console.log(message);

const INCREMENT = "increment";
const ADD = "add";

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case ADD:
      return {
        ...state,
        value: state.value + payload
      };
    default:
      return state;
  }
};

const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const store = createStore(reducer);

const subscriber = () => {
  console.log(store.getState());
};

store.subscribe(subscriber);

store.dispatch(increment());
store.dispatch(add(5));
