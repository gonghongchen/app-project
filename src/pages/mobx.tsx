import ToDetail from "pages/toDetial";
import { toJS, observable, autorun, action, runInAction, computed } from "mobx";
import { observer, inject } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";
import BaseHoc from "base/BaseHoc";

const Sentence: React.SFC<any> = observer(props => {
  console.log(22222, toJS(props.show));
  return <p>Sentence 当前数值为：{props.store.numVal}</p>;
});

const Button: React.SFC<any> = inject('store')(observer(props => {
  const click = (type: number) => {
    type === 0 ? props.store.reduceNum(1) : props.store.addNum(1);
  };
  const clicknName = () => {
    props.store.setShow(true);
  };
  
  if (props.store.obj.show === false) {
    return <button onClick={clicknName.bind(null)}>show</button>;
  }
  console.log(33333, 'Button render');
  return (
    <div>
      <button onClick={click.bind(null, 0)}>&nbsp;&nbsp;-1&nbsp;&nbsp;</button>
      <button onClick={click.bind(null, 1)}>&nbsp;&nbsp;+1&nbsp;&nbsp;</button>
      <p>当前数值为：{props.store.numVal}</p>
      <p>当前展示状态：{props.store.obj.show.toString()}</p>
      <ToDetail />
      <p>
        <Link to="/test">to test</Link>
      </p>
    </div>
  );
}));

// @inject((allStore: any) => ({ userBaseInfor: allStore.userBaseInfor, store: allStore.store }))
@inject('userBaseInfor', 'store')
@observer
class Mobx extends React.Component<any> {
  state: any = {
    a: 'a',
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log(11111, toJS(this.props.store.obj));
    const { show } = this.props.store.obj;
    return (
      <div>
        {/* <Sentence show={show} store={this.props.store}/> */}
        <Sentence store={this.props.store}/>
        <Button />
        <p>username: {this.props.userBaseInfor.getUserName}</p>
        <p>{this.state.a}</p>
        <p>当前展示状态：{show.toString()}</p>
        <button onClick={this.setUserName}>设置 username</button>
      </div>
    );
  }

  setUserName = () => {
     // 使用 mobx 进行状态更新，当设置的 username 值在 render 里面没有使用时就不会触发 render。而且是同步更新的
    // this.props.userBaseInfor.setUserName(1);
    this.props.userBaseInfor.setUserName(this.props.userBaseInfor.getUserName + 1);
    // 只要调用了 setState 就一定会触发 render，无论 setState 里面的内容与 render 是否有关系。且 setState 是异步的。
    this.setState({b: 'b'}) // 测试：在 react 里面可以不预先定义根级 state 属性，而在后面添加
  };
}


class Person {
  @observable age: number
  @observable firstName: string
  @observable lastName: string

  @action
  setFirstName() {
    this.firstName =  "John";
  }
  @action
  setAge(val?: number): any {
    console.log(2);
    this.age = val || 40;
  }
  // 用 @computed 修饰过的方法，只有当方法内部有 @observable 修饰的变量有变动时才会重新计算最新的值，否知读取的都是缓存值
  @computed get displayName() {
    console.log("calculating displayName")
    return this.firstName + this.lastName
  }
}

const p = new Person();
// p.setFirstName();
// p.setAge()
console.log(1);

setTimeout(runInAction(() => p.setAge()), 1000)
setTimeout(() => p.setFirstName(), 1000)

autorun(() => {
  console.log('autorun')
  console.log('autorun', p.age + p.displayName)
})


export default BaseHoc(Mobx);
