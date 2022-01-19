import { Mode } from 'fs';
import React, { useState } from 'react';
import styled from 'styled-components';

const App = ()=> {
  type Mode = 'import' | 'edit' | 'output';
  const [Mode, setMode] = useState<string>();

  return (
    <>
      <_Header>
        <_ModeItem isActive={}>データセット</_ModeItem>
        <_ModeItem>データ編集</_ModeItem>
        <_ModeItem>出力結果</_ModeItem>
      </_Header>
      <_Body></_Body>
      <_Footer></_Footer>
    </>
  );
}

export default App;


// ヘッダー
const _Header= styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
`;

// 状態を示すラベル
const _ModeItem = styled.div<{
  isActive: boolean;
}>`
  background-color: #eee197;
  font-size: 15px;
  text-align: center;
  width: 100px;
  height: 23px;
  margin-left: 5px;
  margin-top: 13px;
  display: inline-block;
`;

// ボディ
const _Body= styled.div`
  background-color: #97e1ee;
  width: 100%;
  height: calc(100% - 100px);
`;

// フッター
const _Footer= styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
  `;
  