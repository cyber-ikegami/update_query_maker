import React, { useState } from 'react';
import styled from 'styled-components';
import ImportFrame from './importFrame';
import EditFrame from './editFrame';
import OutputFrame from './outputFrame';
import { createEditBean, EditBean } from './editBean';
import { createOutputBean, OutputBean } from './outputBean';

const App = () => {
  // 画面遷移の管理(データセット、データ編集、出力結果)
  type Mode = 'import' | 'edit' | 'output';
  // 画面遷移の管理
  const [mode, setMode] = useState<Mode>('import');
  // データセット画面で入力された値
  const [baseText, setBaseText] = useState<string>('');
  // テーブル名
  const [tableName, setTableName] = useState<string>('');
  // edit(データ編集)のBean
  const [editBean, setEditBean] = useState<null | EditBean>(null);
  // output(出力結果)のBean
  const [outputBean, setOutputBean] = useState<null | OutputBean>(null);

  // 画面の状態を管理する
  let contentsJsx = <></>;
  // ボタンの動作を管理する
  let buttonsJsx = <></>;

  // 画面切り替え
  switch (mode) {
    case 'import':
      contentsJsx = <ImportFrame baseText={baseText} setBaseText={setBaseText} />;
      buttonsJsx = <>
        <_Button onClick={() => {
          setBaseText('');
        }}>クリア</_Button>
        <_Button onClick={() => {
          let alertMessage = [];
          const records = baseText.split(/\n/g);
          const columnLength = records[0].split(/[,\t]/g).length;
          if (records.length <= 2) {
            alertMessage.push('2行以上(ヘッダ含む)のデータを入力してください。');
          }
          for (let i = 1; i < records.length - 1; i++) {
            const dataLength = records[i].split(/[,\t]/g).length;
            if (columnLength !== dataLength) {
              alertMessage.push('すべての行のカラム数が一致するよう入力してください。');
              break;
            }
          }

          if (alertMessage.length > 0) {
            alert(alertMessage.join('\n'));
          } else {
            setEditBean(createEditBean(baseText));
            setMode('edit');
          }
        }}>インポート</_Button>
      </>;
      break;
    case 'edit':
      contentsJsx = <EditFrame editBean={editBean as EditBean} setEditBean={setEditBean} tableName={tableName} setTableName={setTableName} />;
      buttonsJsx = <>
        <_Button onClick={() => {
          setEditBean(createEditBean(baseText));
        }}>変更をリセット</_Button>
        <_Button onClick={() => {
          let alertMessage = [];
          if (tableName === '') {
            alertMessage.push('テーブル名は必須です。');
          }
          if (!editBean?.primalyKeys.includes(true)) {
            alertMessage.push('キー項目を1つ以上設定してください。');
          }
          if (editBean?.backupTable.join('-') === editBean?.dataTable.join('-')) {
            alertMessage.push('対象データがありません。');
          }

          if (alertMessage.length > 0) {
            alert(alertMessage.join('\n'));
          } else {
            setOutputBean(createOutputBean(editBean as EditBean, tableName));
            setMode('output');
          }
        }}>UPDATE文作成</_Button>
      </>;
      break;
    case 'output':
      contentsJsx = <OutputFrame outputBean={outputBean as OutputBean} />;
      break;
  }

  return (
    <>
      <_Header>
        <_ModeItem isActive={mode === 'import'} isEnable={true} onClick={() => {
          setMode('import')
        }} >データセット</_ModeItem>
        <_ModeItem isActive={mode === 'edit'} isEnable={editBean != null} onClick={() => {
          setMode('edit')
        }} >データ編集</_ModeItem>
        <_ModeItem isActive={mode === 'output'} isEnable={outputBean != null} onClick={() => {
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
const _Header = styled.div`
  background-color: #c8e7ed;
  width: 100%;
  height: 50px;
`;

// 状態を示すラベル
const _ModeItem = styled.div<{
  isActive: boolean;
  isEnable: boolean;
}>`
  cursor: pointer;
  background-color: ${props => props.isActive ? '#f37e7e' : '#eee197'};
  pointer-events:  ${props => props.isEnable ? 'auto' : 'none'};
  opacity: ${props => props.isEnable ? '100%' : '50%'};
  font-size: 15px;
  text-align: center;
  width: 100px;
  height: 23px;
  margin-left: 5px;
  margin-top: 13px;
  display: inline-block;
`;

// ボディ
const _Body = styled.div`
  width: 100%;
  height: calc(100% - 100px);
`;

// フッター
const _Footer = styled.div`
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