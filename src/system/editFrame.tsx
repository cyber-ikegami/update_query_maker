import React, { useState } from 'react';
import styled from 'styled-components';
import { EditBean } from './editBean';

// edit(データ編集)のフレーム
const editFrame = (props: {
  // edit(データ編集)のBean
  editBean: EditBean;
  // edit(データ編集)のBean(セッター)
  setEditBean: Function;
  // テーブル名
  tableName: string;
  // テーブル名(セッター)
  setTableName: Function;
}) => {
  // テーブル名に値が入力されているか
  const isInput = props.tableName !== '';

  // カラム名JSXのリスト
  const columnNameJsxList: JSX.Element[] = [];
  // キー項目JSXのリスト
  const primalyKeyList: JSX.Element[] = [];
  // NUMBER JSXのリスト
  const numberList: JSX.Element[] = [];
  for (let i = 0; i < props.editBean.columnNames.length; i++) {
    let isKeyClick = props.editBean.primalyKeys[i];
    let isNumberClick = props.editBean.number[i];
    columnNameJsxList.push(<_Column>{props.editBean.columnNames[i]}</_Column>);

    primalyKeyList.push(<_Key isKeyClick={isKeyClick} onClick={() => {
      isKeyClick = !isKeyClick;
      props.editBean.primalyKeys[i] = isKeyClick;
      props.setEditBean({ ...props.editBean });
    }} >{(props.editBean.primalyKeys[i] ? <b>KEY</b> : 'KEY')}</_Key>);

    if (isKeyClick) {
      numberList.push(<_Number isNumberClick={false} isKeyClick={isKeyClick}>-</_Number>);
    } else {
      numberList.push(<_Number isNumberClick={isNumberClick} isKeyClick={isKeyClick} onClick={() => {
        isNumberClick = !isNumberClick;
        props.editBean.number[i] = isNumberClick;
        props.setEditBean({ ...props.editBean });
      }} >{(props.editBean.number[i] ? <b>NUMBER</b> : 'NUMBER')}</_Number>);
    }
  }

  // レコードJSXのリスト
  const recordJsxList: JSX.Element[] = [];
  for (let j = 0; j < props.editBean.dataTable.length; j++) {
    // セルJSXのリスト
    const dataNameJsxList: JSX.Element[] = [];
    // セルの値に変更があったか
    const isUpdateRecord = props.editBean.dataTable[j].join('-') !== props.editBean.backupTable[j].join('-');

    for (let k = 0; k < props.editBean.columnNames.length; k++) {
      // キー項目かどうか
      const isKey = props.editBean.primalyKeys[k];
      if (isKey) {
        dataNameJsxList.push(<_Data><b>{props.editBean.backupTable[j][k]}</b></_Data>);
      } else {
        const isSame = props.editBean.dataTable[j][k] === props.editBean.backupTable[j][k];

        dataNameJsxList.push(<_Text isSame={isSame} isUpdateRecord={isUpdateRecord}><input type="text" value={props.editBean.dataTable[j][k]} onChange={(e) => {
          props.editBean.dataTable[j][k] = e.target.value;
          props.setEditBean({ ...props.editBean });
        }} /> </_Text>);
      }
    }
    recordJsxList.push(<_Record>{dataNameJsxList}</_Record>);
  }

  return (
    <_Frame>
      <_Name isInput={isInput}><span>■テーブル名</span><textarea value={props.tableName} onChange={(e) => {
        props.setTableName(e.target.value);
      }} /></_Name>
      <_Table>
        <_Header>
          <_Record>
            {columnNameJsxList}
          </_Record>
          <_Record>
            {primalyKeyList}
          </_Record>
          <_Record>
            {numberList}
          </_Record>
        </_Header>
        <_Body>
          {recordJsxList}
        </_Body>
      </_Table></_Frame>
  );
}

export default editFrame;

// フレーム
const _Frame = styled.div`
  background-color: #b9c3eb;
  width: 100%;
  height: 100%;
`;

// テーブル名
const _Name = styled.div<{
  isInput: boolean;
}>`
  background-color: #b9c3eb;
  display: inline-block;
  width: 100%;
  height: 30px;
  & textarea {
    background-color: ${props => props.isInput ? '#ffffff' : '#ebff33'};
    resize: none;
    margin-top: 5px;
    margin-left: 5px;
    width: 200px;
    height: 20px;
    box-sizing: border-box; 
  }
  & span {
    font-size: 15px;
  }
`;

// テーブル
const _Table = styled.div`
  background-color: #d9dde9;
  display: inline-block;
  margin-left: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: calc(100% - 20px);
  height: calc(100% - 40px);
`;

// ヘッダー
const _Header = styled.div`
  background-color: #d9dde9;
  display: block;
  margin-left: 10px;
  margin-top: 10px;
  width: calc(100% - 20px);
  height: 72px;
`;

// ボディ
const _Body = styled.div`
  background-color: #d9dde9;
  display: inline-block;
  margin-left: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  height: calc(100% - 82px);
`;

// レコード
const _Record = styled.div`
  display: block;
  height: 24px;
`;

// セル(ヘッダー、KEY、NUMBERに継承)
const _Cell = styled.div`
  display: inline-block;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #1a1a1a;
  width: 100px;
  height: 100%;
  `;

// ヘッダー(カラム名)
const _Column = styled(_Cell)`
    background-color: #7890d8;
  `;

// KEY(キー項目)
const _Key = styled(_Cell) <{
  isKeyClick: boolean;
}>`
  background-color: ${props => props.isKeyClick ? '#78d8c6' : '#87c0b7'};
  color: ${props => props.isKeyClick ? '#264ec9' : '#807e7e'};
  text-align: center; 
`;

// NUMBER(update文で数値として扱うか)
const _Number = styled(_Cell) <{
  isNumberClick: boolean;
  isKeyClick: boolean;
}>`
  background-color: ${props => props.isNumberClick ? '#d878b5' : '#bb93ac'};
  color: ${props => props.isNumberClick ? '#264ec9' : '#807e7e'};
  pointer-events:  ${props => props.isKeyClick ? 'none' : 'oute'};
  opacity: ${props => props.isKeyClick ? '80%' : '100%'};
  text-align: center; 
`;

// キー項目の列
const _Data = styled(_Cell)`
  background-color: #ffef78;
  color: #264ec9;
  white-space: nowrap;
  overflow: hidden;
`;

// セル内のデータの文字
const _Text = styled.div<{
  isSame: boolean;
  isUpdateRecord: boolean;
}>`
  display: inline-block;
  border: 1px solid #1a1a1a;
  width: 110px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  & input {
    color: ${props => props.isSame ? '#000000' : '#ff3333'};
    background-color: ${props => props.isUpdateRecord ? '#b5e8ee' : '#ffffff'};
    font-size: 15px;
    width: 110px;
    height: 100%;
  }
`;