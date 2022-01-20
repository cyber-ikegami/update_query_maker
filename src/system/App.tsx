import React, { useState } from 'react';
import styled from 'styled-components';
import ImportFrame from './importFrame';
import EditFrame from './editFrame';
import OutputFrame from './outputFrame';

const App = ()=> {
  type Mode = 'import' | 'edit' | 'output';
  const [mode, setMode] = useState<Mode>('import');

  let contentsJsx = <></>;
  switch (mode) {
    case 'import':
      contentsJsx = <ImportFrame />;
      break;
    case 'edit':
      contentsJsx = <EditFrame />;
      break;
    case 'output':
      contentsJsx = <OutputFrame />;
      break;
  }

  return (
    <>
      <_Header>
        <_ModeItem isActive={mode==='import'} onClick={()=>{
          setMode('import')
        }} >データセット</_ModeItem>
        <_ModeItem isActive={mode==='edit'} onClick={()=>{
          setMode('edit')
        }} >データ編集</_ModeItem>
        <_ModeItem isActive={mode==='output'} onClick={()=>{
          setMode('output')
        }} >出力結果</_ModeItem>
      </_Header>
      <_Body>{contentsJsx}</_Body>
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
  background-color: ${props => props.isActive ? '#f37e7e' : '#eee197'};
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
  width: 100%;
  height: calc(100% - 100px);
`;

// フッター
const _Footer= styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
  `;
  