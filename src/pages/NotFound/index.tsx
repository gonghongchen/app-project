import { RouteComponentProps } from "react-router-dom";
import * as React from "react";
import styled from "styled-components";

const NotFound = (props: RouteComponentProps) => (
  <Span bgColor="#eee">{`404, Not found this url: ${
    props.location.pathname
  }`}</Span>
);

interface ISpanProps {
  bgColor: string;
}

const Span = styled.span`
  color: red;
  background-color: ${(props: ISpanProps) => props.bgColor};
`;

export default NotFound;
