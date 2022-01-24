import React, { useState } from 'react';
import styled from 'styled-components';
import ImportFrame from './importFrame';
import EditFrame from './editFrame';
import OutputFrame from './outputFrame';
import createEditBean, { EditBean } from './editBean';


const App = ()=> {
  type Mode = 'import' | 'edit' | 'output';
  const [mode, setMode] = useState<Mode>('import');
  const [baseText, setBaseText] = useState<string>('');

  const [editBean, setEditBean] = useState<EditBean>({columnNames: []});

  // 画面切り替え
  let contentsJsx = <></>;
  let buttonsJsx = <></>;
  switch (mode) {
    case 'import':
      contentsJsx = <ImportFrame baseText={baseText} setBaseText={setBaseText}/>;
      buttonsJsx = <>
        <_Button>クリア</_Button>
        <_Button  onClick={()=>{
          setEditBean({columnNames: {createEditBean}});
          setMode('edit');
        }}>インポート</_Button>
        </>;
      break;
    case 'edit':
      contentsJsx = <EditFrame editBean={editBean}/>;
      buttonsJsx = <>
        <_Button>変更をリセット</_Button>
        <_Button>UPDATE文作成</_Button>
        </>;
      break;
    case 'output':
      contentsJsx = <OutputFrame />;
      buttonsJsx = <>
        <_Button>編集に戻る</_Button>
        <_Button>UPDATE文作成</_Button>
        </>;
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
      <_Footer>{buttonsJsx}</_Footer>
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
  text-align: right;
  width: 100%;
  height: 50px;
`;
  
// ボタン
const _Button = styled.div`
  display: inline-block;
  background-color:#eef5ff;
  font-size: 15px;
  width: 130px;
  height: calc(100% - 10px);
  text-align: center;
  line-height: 40px;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #919191;
  border-radius: 5px;
  &:hover {
    background-color:#b1bff5;
  }
`;