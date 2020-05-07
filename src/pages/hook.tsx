import { RouteComponentProps } from 'react-router-dom';
import React, { useState, useEffect, Fragment, useReducer, FC, useMemo, memo } from 'react';
import { Button } from 'antd'
import { inject } from 'mobx-react'
import { IAppState } from 'mobx/AppState'

const numReducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case 'add':
      return state + 1
      break;
    case 'reduce':
      return state - 1
      break;
    default:
      break;
  }
}

interface ICalculateProps {
  num: number,
}
const Calculate: FC<ICalculateProps> = memo(props => {  // memo 相当于 shouldComponentUpdate，但只会对 props 进行浅比较
  const [num, dispatch] = useReducer(numReducer, props.num)
  const memorizedValue = useMemo(() => num * 10, [num]) // useMemo 类似于 VUE 里面的 computed
  useEffect(() => {
    console.log('Calculate update')
  })
  return (
    <div>
      <Button onClick={() => dispatch({ type: 'add' })}>+</Button>
      now count: {num}
      <Button onClick={() => dispatch({ type: 'reduce' })}>-</Button>
      <p>memorizedValue：{memorizedValue}</p>
    </div>
  )
})

const Hook = inject('store')((props: RouteComponentProps & { store: IAppState}) => {
  console.log(props.store)
  const [inputVal, setInputVal] = useState('0')
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    return () => {
      console.log('call end useEffect');
    }
  });
  const [name, setName] = useState('Li');
  useEffect(() => {
    console.log('call useEffect connect name');
    return () => {
      console.log('call end useEffect connect name');
    }
  }, []);

  const [age, setAge] = useState(0)
  useEffect(() => {
    if (age !== 2) {
      setAge(age + 1)
    }
    console.log('now, age is: ', age)
  }, [age]) // 当 age 变为2的时候由于 age 不会再改变，所以和这个 effect 也就不会再在组件渲染的时候执行了

  return (
    <Fragment>
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <Button onClick={() => {setCount(count+1); setName('Gong')}}>Result: {count + name}</Button>
      <Button onClick={() => props.history.push('/test')}>to test</Button>
      <Calculate num={age} />
    </Fragment>
  )
})

export default Hook