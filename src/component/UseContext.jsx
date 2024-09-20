import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UseContext = () => {
  
  const {phone, name} = useContext(AppContext);

  return (
    <>
    <hr />
    <h1>useContext</h1>
    <h3>Phone: {phone}</h3>
    <h3>Name: {name}</h3>
    </>
  )
}

export default UseContext;