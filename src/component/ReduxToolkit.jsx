import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { counterAction } from '../store';


const ReduxToolkit = () => {
  const {counterVal} = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterAction.increment());
  }
  const decrease = () => {
    dispatch(counterAction.decrement())
  }

  return (
    <>
    <h1>ReduxToolkit Count: {counterVal}</h1>
    <button onClick={increase}>Add</button>
    <button onClick={decrease}>Subs</button>
    </>
  )
}

export default ReduxToolkit;