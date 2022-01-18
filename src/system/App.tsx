import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <>
      <_Header>
        <p>データセット</p>
        <p>データ編集</p>
        <p>出力結果</p>
      </_Header>
      <_Body></_Body>
      <_Footer></_Footer>
    </>
  );
}

export default App;

const _Header= styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
  & p {
    background-color: #eee197;
    font-size: 15px;
    text-align: center;
    width: 100px;
    height: 23px;
    margin-left: 5px;
    display: inline-block;
  }
`;

const _Body= styled.div`
  background-color: #97e1ee;
  width: 100%;
  height: calc(100% - 100px);
`;

const _Footer= styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
`;