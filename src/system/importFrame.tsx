import React, { useState } from 'react';
import styled from 'styled-components';

// import(データセット)のフレーム
const importFrame = (props: {
  // データセット画面で入力された値
  baseText: string;
  // データセット画面で入力された値(セッター)
  setBaseText: Function;
}) => {
  return (
    <_Frame><textarea value={props.baseText} onChange={(e) => {
      props.setBaseText(e.target.value);
    }} /></_Frame>
  );
}

export default importFrame;

// フレーム
const _Frame = styled.div`
  background-color: #b9c3eb;
  width: 100%;
  height: 100%;
  & textarea {
    resize:none;
    margin-left: 10px;
    margin-top: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    box-sizing: border-box; 
  }
`;


