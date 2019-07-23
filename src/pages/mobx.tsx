import ToDetail from "pages/toDetial";
import { observer, inject } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";
import BaseHoc from "base/BaseHoc";

// const Sentence: React.SFC<any> = observer(props => {
//   return <p>当前数值为：{props.store.num}</p>;
// });

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

@inject('userBaseInfor', 'store')
@observer
class Mobx extends React.Component<any> {
  render() {
    return (
      <div>
        {/* <Sentence /> */}
        <Button />
        <p>当前展示状态：{this.props.store.obj.show.toString()}</p>
        <button onClick={this.setUserName}>设置 username</button>
      </div>
    );
  }

  setUserName = () => {
    this.props.userBaseInfor.setUserName(Math.random().toString());
  };
}

export default BaseHoc(Mobx);
