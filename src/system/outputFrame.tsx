import React, { useState } from 'react';
import styled from 'styled-components';
import { OutputBean } from './outputBean';

const outputFrame = (props: {
  // editBean: EditBean;
  outputBean: OutputBean;
})=> {
  // const outputList: JSX.Element[] = [];
  // outputList.push(<>{props.outputBean.outputValue}</>);
  return (
      <_Frame><textarea readOnly>{props.outputBean.outputValue}</textarea></_Frame>
  );
}

export default outputFrame;

const _Frame = styled.div`
  background-color: #b9c3eb;
  width: 100%;
  height: 100%;
  & textarea {
    background-color: #dcdcdc;
    color: #1945c9;
    resize: none;
    margin-left: 10px;
    margin-top: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    box-sizing: border-box; 
  }
`;
