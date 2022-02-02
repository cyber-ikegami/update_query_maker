import React, { useState } from 'react';
import styled from 'styled-components';
import { OutputBean } from './outputBean';

// output(出力結果)のフレーム
const outputFrame = (props: {
  // output(出力結果)のBean
  outputBean: OutputBean;
})=> {
  return (
      <_Frame><textarea readOnly>{props.outputBean.outputValue}</textarea></_Frame>
  );
}

export default outputFrame;

// フレーム
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
