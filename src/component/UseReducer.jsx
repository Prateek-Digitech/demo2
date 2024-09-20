import React from 'react'
import { useReducer } from 'react';

const UseReducer = () => {

  const initialState = {count: 0};

  const reducer = (state, action) => {
    switch(action.type){
      case 'increment': return {count: state.count+1};
      case 'decrement': return {count: state.count--};
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <hr />
      <h1>useReducer</h1>

      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})}>Add</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Subs</button>
    </>
  )
}

export default UseReducer;