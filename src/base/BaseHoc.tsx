import * as React from "react";
import userBaseInfor, { IUserBaseInforProps } from "mobx/baseInfor";
import { observer } from "mobx-react";
import hoistNonReactStatics from "hoist-non-react-statics";

const BaseHoc = (WrappedComponent: any) => {
  @observer
  class Hoc extends React.Component {
    static readonly WrappedComponent = WrappedComponent;
    render() {
      return <WrappedComponent {...this.props} store={{ userBaseInfor }} />;
    }
  }

  return hoistNonReactStatics(Hoc, WrappedComponent);
};

export { IUserBaseInforProps };
export default BaseHoc;
