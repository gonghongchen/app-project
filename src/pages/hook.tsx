import { RouteComponentProps } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';

const Hook = (props: RouteComponentProps) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Li');
  
  useEffect(() => {
    console.log('call useEffect');
    return () => {
      console.log('call end useEffect');
    }
  });
  useEffect(() => {
    console.log('call useEffect connect name');
    return () => {
      console.log('call end useEffect connect name');
    }
  }, []);

  return (
    <Fragment>
      <div onClick={() => {setCount(count+1); setName('Gong')}}>Result: {count + name}</div>
      <button onClick={() => props.history.push('/test')}>to test</button>
    </Fragment>
  )
}

export default Hook