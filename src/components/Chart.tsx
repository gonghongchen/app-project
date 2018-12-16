/**
 * @description 基于 Echarts 的图表组件
 */

import * as React from "react";
import styled from "styled-components";
import echarts from "echarts";

interface IChartProps {
  option: object;
  width?: number;
  height?: number;
}

class Chart extends React.PureComponent<IChartProps> {
  chartBoxEle: HTMLDivElement;

  componentDidMount() {
    const { option } = this.props;
    const myChart = echarts.init(this.chartBoxEle);

    myChart.setOption(option);
  }

  render() {
    const { width, height } = this.props;

    return (
      <Div
        width={width}
        height={height}
        ref={(ele: HTMLDivElement) => (this.chartBoxEle = ele)}
      />
    );
  }
}

interface IChartSize {
  width?: number;
  height?: number;
}

const Div = styled.div`
  width: ${(props: IChartSize) => props.width || 300}px;
  height: ${(props: IChartSize) => props.height || 300}px;
`;

export default Chart;
