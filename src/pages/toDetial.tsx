import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as React from 'react';

class ToDetail extends React.PureComponent<RouteComponentProps<any>> {
    public render() {
      const toDetail = () => {
        this.props
          .history
          .push('/detail')
      }
      return (
        <button onClick={toDetail.bind(null, 1)}>转到详细页面</button>
      )
    }
  }

export default withRouter(ToDetail)