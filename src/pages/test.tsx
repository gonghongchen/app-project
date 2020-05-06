import * as React from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { Button } from "antd";
import Chart from "components/Chart";
import BaseHoc from "base/BaseHoc";
import { getLocation } from "base/request";
import { observer, inject } from "mobx-react";

const { Component, Fragment } = React;
const colors = ["#5793f3", "#d14a61", "#675bba"];


interface ITestState {
  name: string;
  age: number;
}

@inject('userBaseInfor')
@observer
// @BaseHoc
class Test extends Component<any, ITestState> {
  state = {
    name: "",
    age: 0
  };

  option = {
    color: colors,

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    grid: {
      right: "20%"
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ["蒸发量", "降水量", "平均温度"]
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ]
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "蒸发量",
        min: 0,
        max: 250,
        position: "right",
        axisLine: {
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          formatter: "{value} ml"
        }
      },
      {
        type: "value",
        name: "降水量",
        min: 0,
        max: 250,
        position: "right",
        offset: 80,
        axisLine: {
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          formatter: "{value} ml"
        }
      },
      {
        type: "value",
        name: "温度",
        min: 0,
        max: 25,
        position: "left",
        axisLine: {
          lineStyle: {
            color: colors[2]
          }
        },
        axisLabel: {
          formatter: "{value} °C"
        }
      }
    ],
    series: [
      {
        name: "蒸发量",
        type: "bar",
        data: [
          2.0,
          4.9,
          7.0,
          23.2,
          25.6,
          76.7,
          135.6,
          162.2,
          32.6,
          20.0,
          6.4,
          3.3
        ]
      },
      {
        name: "降水量",
        type: "bar",
        yAxisIndex: 1,
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ]
      },
      {
        name: "平均温度",
        type: "line",
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };

  constructor(props: any) {
    super(props);

    console.log(isEmpty([]));
  }

  componentDidMount() {
    getLocation().then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <Fragment>
        <img src="https://img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png"/>
        <img src="https://img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png"/>
        <Button onClick={this.doClick}>Pass in an object</Button>
        <Button onClick={this.doClick2}>Pase in a function</Button>
        <p>age: {this.state.age}</p>
        <p>username: {this.props.userBaseInfor.getUserName}</p>
        <p>
          <Link to="/index">to index</Link>
        </p>
        <Chart option={this.option} width={600} height={600} />
      </Fragment>
    );
  }
  doClick = () => {
    console.log(this.props);

    this.setState({
      age: this.state.age + 1
    });

    if (true) {
      this.setState({
        age: this.state.age + 1
      });
    }
  };
  doClick2 = () => {
    // console.log(this);

    this.setState((prevState, props) => {
      return {
        age: prevState.age + 1
      };
    });

    if (true) {
      this.setState((prevState, props) => {
        return {
          age: prevState.age + 1
        };
      });
    }
  };
}

export default BaseHoc(Test);
// export default Test;
